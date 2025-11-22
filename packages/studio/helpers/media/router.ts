import { db } from '@alstar/db'
import { factory } from '../../factory.ts'
import { serveStatic } from './serve-static.ts'
import { transformMedia, type MediaSchema } from './create-media.ts'

export const mediaRouter = () => {
  const app = factory.createApp()

  app.get(':filename', async (c) => {
    const url = new URL(c.req.url)
    const relativeUrl = c.req.url.replace(url.origin, '')

    const cachedImage = db.database
      .prepare('select * from media where url = ?')
      .get(relativeUrl) as MediaSchema | undefined

    if (cachedImage) {
      return serveStatic(c, cachedImage)
    }

    const filename = c.req.param('filename')
    const query = c.req.query()

    const originalImage = db.database
      .prepare('select * from media where filename = ?')
      .get(filename) as MediaSchema | undefined

    if (!originalImage) {
      return c.notFound()
    }

    const transformedMedia = await transformMedia(originalImage.filepath, query)

    return c.text('hehe')
  })

  return app
}
