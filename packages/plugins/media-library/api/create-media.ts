import path from 'node:path'
import { randomUUID } from 'node:crypto'
import sharp from 'sharp'
import sql from 'sql-template-tag'
import fsp from 'node:fs/promises'
import type { DatastarFileUpload, MediaCacheSchema, MediaSchema } from '../types.ts'
import type { StudioConfig } from '@alstar/types'
import type { DatabaseSync, SQLInputValue } from 'node:sqlite'

export const mediaPath = path.resolve(path.join('./public', 'media'))
export const mediaCachePath = path.resolve(path.join(mediaPath, 'transforms'))

export const saveMedia = async (
  config: StudioConfig,
  database: DatabaseSync,

  name: string,
  filename: string,
  mime: string,
  buffer: Buffer,
): Promise<MediaSchema | undefined> => {
  // Upload the original image to folder
  await fsp.writeFile(path.join(config.uploadBase, filename), buffer)

  // Extract image metadata using sharp
  const metadata = await sharp(buffer).metadata()

  const row: MediaSchema = {
    name: name,
    filename: filename,
    mime_type: mime,
    width: metadata.width,
    height: metadata.height,
  }

  const query = sql`
    insert into
      media (name, filename, mime_type, width, height)
    values
      (
        ${row.name},
        ${row.filename},
        ${row.mime_type},
        ${row.width},
        ${row.height}
      )
  `

  // Create a new media row in db
  database.prepare(query.sql).run(...(query.values as SQLInputValue[]))

  const query2 = sql`
    select
      *
    from
      media
    where
      filename = ${filename}
  `

  return database.prepare(query2.sql).get(...(query.values as SQLInputValue[])) as MediaSchema
}

export const saveCachedMedia = async (
  database: DatabaseSync,
  filename: string,
  originalFilename: string,
  mime: string,
  buffer: Buffer,
): Promise<MediaCacheSchema | undefined> => {
  try {
    console.log('Created cached media folder:', mediaCachePath)
    fsp.mkdir(mediaCachePath, { recursive: true })
  } catch (error) {}

  console.log('Creating:', path.join(mediaCachePath, filename))

  // Upload the original image to folder
  await fsp.writeFile(path.join(mediaCachePath, filename), buffer)

  console.log('Created:', path.join(mediaCachePath, filename))

  // Extract image metadata using sharp
  const metadata = await sharp(buffer).metadata()

  const row: MediaCacheSchema = {
    original_filename: originalFilename,
    filename: filename,
    mime_type: mime,
    width: metadata.width,
    height: metadata.height,
  }

  // Create a new media_transforms row in db
  const insertCachedMediaQuery = sql`
    insert into
      media_transforms (
        original_filename,
        filename,
        mime_type,
        width,
        height
      )
    values
      (
        ${row.original_filename},
        ${row.filename},
        ${row.mime_type},
        ${row.width},
        ${row.height}
      )
  `

  database
    .prepare(insertCachedMediaQuery.sql)
    .run(...(insertCachedMediaQuery.values as SQLInputValue[]))

  console.log('Created row in media_transforms:', filename)

  const getCachedMediaQuery = sql`
    select
      *
    from
      media_transforms
    where
      filename = ${filename}
  `

  return database
    .prepare(getCachedMediaQuery.sql)
    .get(...(getCachedMediaQuery.values as SQLInputValue[])) as MediaCacheSchema
}

/**
 * Creates a new media record.
 * @param file The uploaded file (from Multer).
 * @returns The saved media document.
 * @throws Error if file is missing or any error occurs.
 */
export const createMedia = async (
  config: StudioConfig,
  database: DatabaseSync,
  files: DatastarFileUpload[],
) => {
  if (!files) {
    throw new Error('No file uploaded.')
  }

  try {
    await fsp.mkdir(mediaPath, { recursive: true })
  } catch (error) {}

  for (const file of files) {
    const { name: filename, mime, contents } = file
    const { name, ext } = path.parse(filename)

    const buffer = Buffer.from(contents, 'base64')

    const uniqueId = randomUUID()
    const uniqueFilename = `${name}-${uniqueId}${ext}`

    await saveMedia(config, database, filename, uniqueFilename, mime, buffer)
  }
}
