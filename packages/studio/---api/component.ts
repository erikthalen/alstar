import { Hono } from 'hono'
import { streamSSE } from 'hono/streaming'
import { getElementsToPatch } from '../utils/get-elements-to-patch.ts'

const app = new Hono()

app.get('/component', async (c) => {
  return streamSSE(c, async (stream) => {
    const name = c.req.query('name')
    const props = c.req.query('props')
    const datastar = c.get('datastar')

    console.log(name, props)

    try {
      if (name) {
        const patches = await getElementsToPatch([
          { name, props: JSON.parse(props || '{}') },
        ])

        for (const patch of patches) {
          await datastar.patchElements(stream, patch)
        }
      }
    } catch (error) {
      console.log(error)
    }
  })
})

export const componentRoutes = app
