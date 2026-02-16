import { definePlugin, factory } from '@alstar/framework'
import widget from './widget.ts'
import Index from './pages/index.ts'
import migrations from './migrations/index.ts'
import type { Plugin } from '@alstar/types'
import ImageField from './components/ImageField.ts'
import type { DatastarFileUpload, MediaSchema } from './types.ts'
import { createMedia, mediaPath, saveCachedMedia } from './api/create-media.ts'
import { serveStatic } from './api/serve-static.ts'
import { getMimeType } from 'hono/utils/mime'
import sql from 'sql-template-tag'
import { type SQLInputValue } from 'node:sqlite'
import fsp from 'node:fs/promises'
import path from 'node:path'
import { transformMedia } from './api/transform-media.ts'

declare module '@alstar/types' {
  interface FieldTypeMap {
    image: {
      type: 'image'
      label: string
      description?: string
    }
  }
}

export const mediaRoute = '/studio/media'

export default () =>
  definePlugin((api) => {
    const app = factory.createApp()

    app.get('/media/:filename', async (c) => {
      const url = new URL(c.req.url)
      const fullname = url.href.replace(url.origin + mediaRoute + '/', '')
      const filename = c.req.param('filename')
      const query = c.req.query()
      const requestHasQuery = Object.keys(query).length

      // return cached image if request is for transformed image that exists in cache
      if (requestHasQuery) {
        const query = sql`select * from media_transforms where filename = ${fullname}`

        const cachedImage = api.database
          .prepare(query.sql)
          .get(...(query.values as SQLInputValue[])) as MediaSchema | undefined

        if (cachedImage) {
          return serveStatic(c, cachedImage, true)
        }
      }

      const getMediaQuery = sql`select * from media where filename = ${filename}`

      const originalImage = api.database
        .prepare(getMediaQuery.sql)
        .get(...(getMediaQuery.values as SQLInputValue[])) as MediaSchema | undefined

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
        api.database,
        fullname,
        originalImage.filename,
        mime,
        transformedMediaBuffer,
      )

      if (transformedMedia) {
        return serveStatic(c, transformedMedia, true)
      }
    })

    app.post('/media/upload', async (c) => {
      const user = c.get('user')
      const datastar = c.get('datastar')

      if (!datastar.signals) {
        return c.json({ status: 500, message: 'No signals' })
      }

      try {
        await createMedia(api.config, api.database, datastar.signals.files as DatastarFileUpload[])

        console.log('[upload]')

        // const value = datastar.signals[id]?.toString()

        // if (value === undefined) {
        //   return c.json({ status: 500, message: 'No value' })
        // }

        // api.eventEmitter.emit('update-block', { userId: user?.id, id, payload: { value } })

        return c.json({ status: 200, message: 'Success' })
      } catch (error) {
        return c.json({ status: 500, message: error })
      }
    })

    app.post('/media/update/:id', (c) => {
      const id = parseInt(c.req.param('id'))
      const user = c.get('user')
      const datastar = c.get('datastar')

      if (!datastar.signals) {
        return c.json({ status: 500, message: 'No signals' })
      }

      const value = datastar.signals[id]?.toString()

      if (value === undefined) {
        return c.json({ status: 500, message: 'No value' })
      }

      api.eventEmitter.emit('update-block', {
        userId: user?.id,
        id,
        payload: { value },
        patchSelf: true,
      })

      return c.json({ status: 200, message: 'Success' })
    })

    return {
      app: app,
      widget: widget,
      views: [
        {
          path: '/media-library',
          handler: () => Index(api),
        },
      ],
      migrations: migrations,
      fields: [
        {
          name: 'image',
          component: ImageField(api),
          // handler: ImageFieldHandler,
        },
      ],
    } satisfies Plugin
  })
