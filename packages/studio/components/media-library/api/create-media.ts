import path from 'node:path'
import { randomUUID } from 'node:crypto'
import sharp from 'sharp'
import { config, database } from '#index.ts'
import { sql } from '#utils/sql.ts'
import fsp from 'node:fs/promises'
import { mediaCachePath, mediaPath } from './router.ts'

export type DatastarFileUpload = {
  name: string
  contents: string
  mime: string
}

export type MediaSchema = {
  name: string
  filename: string
  mime_type: string
  width: number
  height: number
}

export type MediaCacheSchema = {
  original_filename: string
  filename: string
  mime_type: string
  width: number
  height: number
}

export const saveMedia = async (
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

  // Create a new media row in db
  database
    .prepare(
      sql`insert into media (name, filename, mime_type, width, height) values (?, ?, ?, ?, ?)`,
    )
    .run(...Object.values(row))

  return database.prepare(sql`select * from media where filename = ?`).get(filename) as MediaSchema
}

export const saveCachedMedia = async (
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

  // Create a new media_cache row in db
  database
    .prepare(
      sql`insert into media_cache (original_filename, filename, mime_type, width, height) values (?, ?, ?, ?, ?)`,
    )
    .run(...Object.values(row))

  console.log('Created row in media_cached:', filename)

  return database
    .prepare(sql`select * from media_cache where filename = ?`)
    .get(filename) as MediaCacheSchema
}

/**
 * Creates a new media record.
 * @param file The uploaded file (from Multer).
 * @returns The saved media document.
 * @throws Error if file is missing or any error occurs.
 */
export const createMedia = async (files: DatastarFileUpload[]) => {
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

    await saveMedia(filename, uniqueFilename, mime, buffer)
  }
}
