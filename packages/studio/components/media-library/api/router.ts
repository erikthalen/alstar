import { factory } from '#factory.ts'
import { serveStatic } from './serve-static.ts'
import { saveCachedMedia, type MediaSchema } from './create-media.ts'
import fsp from 'node:fs/promises'
import { getMimeType } from 'hono/utils/mime'
import path from 'node:path'
import { transformMedia } from './transform-media.ts'
import { database } from '#index.ts'

export const mediaPath = path.resolve(path.join('./public', 'media'))
export const mediaCachePath = path.resolve(path.join(mediaPath, 'transforms'))

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

  return app
}
