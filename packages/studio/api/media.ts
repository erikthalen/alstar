import { Hono } from 'hono'
import { streamSSE } from 'hono/streaming'
import { getElementsToPatch } from '../utils/get-elements-to-patch.ts'
import fsp from 'node:fs/promises'
import path from 'node:path'
import { createMedia, type DatastarFileUpload } from '@alstar/studio/media'

const app = new Hono()

app.post('/media', async (c) => {
  return streamSSE(c, async (stream) => {
    const name = c.req.query('name')
    const datastar = c.get('datastar')

    if (!datastar.signals?.files) return

    try {
      fsp.mkdir('./public/media', { recursive: true })
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
  })
})

export const mediaRoutes = app
