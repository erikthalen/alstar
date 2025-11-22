import fsp from 'node:fs/promises'
import path from 'node:path'
import { randomUUID } from 'node:crypto'
import sharp from 'sharp'
import { config } from '@alstar/studio'
import { db } from '@alstar/db'
import { sql } from '../../utils/sql.ts'

export type DatastarFileUpload = {
  name: string
  contents: string
  mime: string
}

export type MediaSchema = {
  name: string
  filename: string
  filepath: string
  mimeType: string
  width: number
  height: number
  url: string
}

type TransformOptions = {
  w?: number
  format?: string
}

export const transformMedia = async (
  filepath: string,
  options: TransformOptions
) => {
  const originalMedia = await fsp.readFile(filepath)
  const transformer = await sharp(originalMedia)

  console.log('transformer', transformer)

  return originalMedia
}

export const saveMedia = () => {}

/**
 * Creates a new media record.
 * @param file The uploaded file (from Multer).
 * @returns The saved media document.
 * @throws Error if file is missing or any error occurs.
 */
export const createMedia = async (file: DatastarFileUpload) => {
  if (!file) {
    throw new Error('No file uploaded.')
  }

  const { name: filename, mime, contents } = file
  const { name, ext } = path.parse(filename)

  const buffer = Buffer.from(contents, 'base64')

  const uniqueId = randomUUID()
  const uniqueFilename = `${name}-${uniqueId}${ext}`
  const filepath = path.join(config.uploadBase, uniqueFilename)
  const url = path.join('/studio', 'media', uniqueFilename)

  // Upload the original image to folder
  await fsp.writeFile(filepath, buffer)

  // Extract image metadata using sharp
  const metadata = await sharp(buffer).metadata()

  const row: MediaSchema = {
    name: filename,
    filename: uniqueFilename,
    filepath: filepath,
    mimeType: mime,
    width: metadata.width,
    height: metadata.height,
    url: url,
  }

  // Create a new media row in db
  db.database
    .prepare(
      sql`insert into media (name, filename, filepath, mimeType, width, height, url) values (?, ?, ?, ?, ?, ?, ?)`
    )
    .run(...Object.values(row))

  console.log(row)

  // return savedMedia as IMedia
}
