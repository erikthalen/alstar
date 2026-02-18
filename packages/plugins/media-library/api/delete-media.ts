import fsp from 'node:fs/promises'
import path from 'node:path'
import sql from 'sql-template-tag'
import type { MediaCacheSchema } from '../types.ts'
import { mediaCachePath, mediaPath } from './create-media.ts'
import type { DatabaseSync, SQLInputValue } from 'node:sqlite'

export const deleteMedia = async (database: DatabaseSync, filename: string) => {
  const getCachedMediaQuery = sql`select * from media_transforms where original_filename = ${filename}`

  const cachedMedia = database
    .prepare(getCachedMediaQuery.sql)
    .all(...(getCachedMediaQuery.values as SQLInputValue[])) as MediaCacheSchema[]

  await Promise.all(
    cachedMedia.map(async (media) => {
      try {
        // delete cached media file
        await fsp.rm(path.join(mediaCachePath, media.filename))
      } catch (error) {
        console.log(error)
      }
    }),
  )

  const deleteCachedMediaQuery = sql`delete from media_transforms where original_filename = ${filename}`
  database
    .prepare(deleteCachedMediaQuery.sql)
    .run(...(deleteCachedMediaQuery.values as SQLInputValue[]))

  const deleteOriginalMediaQuery = sql`delete from media where filename = ${filename}`
  database
    .prepare(deleteOriginalMediaQuery.sql)
    .run(...(deleteOriginalMediaQuery.values as SQLInputValue[]))

  try {
    // delete original media file
    await fsp.rm(path.join(mediaPath, filename))
  } catch (error) {
    console.log(error)
  }
}
