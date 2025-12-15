import { factory } from '../../factory.ts'
import { serveStatic } from './serve-static.ts'
import { type MediaCacheSchema, saveCachedMedia, type MediaSchema } from './create-media.ts'
import fsp from 'node:fs/promises'
import { streamSSE } from 'hono/streaming'
import { getElementsToPatch } from '../../utils/get-elements-to-patch.ts'
import { createMedia, type DatastarFileUpload } from '@alstar/studio/media'
import { getMimeType } from 'hono/utils/mime'
import path from 'node:path'
import { transformMedia } from './transform-media.ts'
import { sql } from '../../utils/sql.ts'
import { database } from '../../index.ts'

export const mediaPath = path.resolve(path.join('./public', 'media'))
export const mediaCachePath = path.resolve(path.join(mediaPath, 'cache'))

export const mediaRoute = '/studio/media'

export const mediaRouter = () => {
  const app = factory.createApp()

  app.get(':filename', async (c) => {
    const url = new URL(c.req.url)
    const fullname = url.href.replace(url.origin + mediaRoute + '/', '')
    const filename = c.req.param('filename')
    const query = c.req.query()
    const requestHasQuery = Object.keys(query).length

    // return cached image if request is for transformed image that exists in cache
    if (requestHasQuery) {
      const cachedImage = database
        .prepare('select * from media_cache where filename = ?')
        .get(fullname) as MediaSchema | undefined

      if (cachedImage) {
        return serveStatic(c, cachedImage, true)
      }
    }

    const originalImage = database
      .prepare('select * from media where filename = ?')
      .get(filename) as MediaSchema | undefined

    if (!originalImage) {
      return c.notFound()
    }

    if (!requestHasQuery) {
      return serveStatic(c, originalImage)
    }

    const originalMediaBuffer = await fsp.readFile(path.join(mediaPath, originalImage.filename))

    const transformedMediaBuffer = await transformMedia(originalMediaBuffer, query)

    const outputFormat = query?.format ? `.${query.format}` : path.extname(filename)
    const mime = getMimeType(outputFormat)

    if (!mime) {
      return c.notFound()
    }

    const transformedMedia = await saveCachedMedia(
      fullname,
      originalImage.filename,
      mime,
      transformedMediaBuffer,
    )

    if (transformedMedia) {
      return serveStatic(c, transformedMedia, true)
    }
  })

  app.post('/', async (c) => {
    return streamSSE(c, async (stream) => {
      const name = c.req.query('name')
      const datastar = c.get('datastar')

      if (!datastar.signals?.files) return

      try {
        await fsp.mkdir(mediaPath, { recursive: true })
      } catch (error) {}

      for (const file of datastar.signals.files as DatastarFileUpload[]) {
        await createMedia(file)
      }

      if (name) {
        const patches = await getElementsToPatch([{ name }])

        for (const patch of patches) {
          await datastar.patchElements(stream, patch)
        }
      }

      if (datastar?.signals?.medialibrary && 'medialibrary' in datastar?.signals) {
        const patches = await getElementsToPatch(datastar.signals.medialibrary.patchElements || [])

        for (const patch of patches) {
          await datastar.patchElements(stream, patch)
        }
      }
    })
  })

  app.delete(':filename', async (c) => {
    return streamSSE(c, async (stream) => {
      const filename = c.req.param('filename')
      const datastar = c.get('datastar')

      // delete any cached/transformed media rows
      const cachedMedia = database
        .prepare(sql`select * from media_cache where original_filename = ?`)
        .all(filename) as MediaCacheSchema[]

      await Promise.all(
        cachedMedia.map(async (media) => {
          // delete cached media
          await fsp.rm(path.join(mediaCachePath, media.filename))
        }),
      )

      // delete any cached/transformed media rows
      database.prepare(sql`delete from media_cache where original_filename = ?`).run(filename)

      // delete original media in db
      database.prepare(sql`delete from media where filename = ?`).run(filename)

      // delete original media
      await fsp.rm(path.join(mediaPath, filename))

      if (datastar?.signals?.medialibrary && 'medialibrary' in datastar?.signals) {
        const patches = await getElementsToPatch(datastar.signals.medialibrary.patchElements || [])

        for (const patch of patches) {
          await datastar.patchElements(stream, patch)
        }
      }
    })
  })

  return app
}
