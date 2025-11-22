import { Hono } from 'hono'
import { streamSSE } from 'hono/streaming'
import { getElementsToPatch } from '../utils/get-elements-to-patch.ts'

const app = new Hono()

app.get('/component', async (c) => {
  return streamSSE(c, async (stream) => {
    const name = c.req.query('name')
    const datastar = c.get('datastar')

    // console.log(datastar.signals)

    if (name) {
      const patches = await getElementsToPatch([{ name }])

      for (const patch of patches) {
        await datastar.patchElements(stream, patch)
      }
    }
  })
})

export const componentRoutes = app
