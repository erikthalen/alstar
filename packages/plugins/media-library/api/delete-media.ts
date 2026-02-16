import fsp from 'node:fs/promises'
import { database } from '#index.ts'
import { sql } from '#utils/sql.ts'
import { type MediaCacheSchema } from './create-media.ts'
import path from 'node:path'
import { mediaCachePath, mediaPath } from './router.ts'

export const deleteMedia = async (filename: string) => {
  // delete any cached/transformed media rows
  const cachedMedia = database
    .prepare(sql`select * from media_cache where original_filename = ?`)
    .all(filename) as MediaCacheSchema[]

  await Promise.all(
    cachedMedia.map(async (media) => {
      try {
        // delete cached media
        await fsp.rm(path.join(mediaCachePath, media.filename))
      } catch (error) {
        console.log(error)
      }
    }),
  )

  // delete any cached/transformed media rows
  database.prepare(sql`delete from media_cache where original_filename = ?`).run(filename)

  // delete original media in db
  database.prepare(sql`delete from media where filename = ?`).run(filename)

  try {
    // delete original media
    await fsp.rm(path.join(mediaPath, filename))
  } catch (error) {
    console.log(error)
  }
}
