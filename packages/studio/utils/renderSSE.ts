import path from 'node:path'
import { stripNewlines } from './strip-newlines.ts'
import { type SSEStreamingApi } from 'hono/streaming'
import { type Context } from 'hono'

export const renderSSE = async (stream: SSEStreamingApi, c: Context) => {
  const componentPaths = c.req.header('render')
  const props = c.req.header('props')

  if (!componentPaths) return

  for (const componentPath of componentPaths.split(' ')) {
    if (!componentPath) return

    try {
      const partialToRender = await import(
        path.join('../', 'components', componentPath + '.ts')
      )

      const propsJSON = props ? JSON.parse(props) : undefined
      const component = await partialToRender.default(propsJSON)

      await stream.writeSSE({
        event: 'datastar-patch-elements',
        data: component.split('\n').map((line: string) => `elements ${line}\n`).join(''),
      })

    } catch (error) {
      console.log(error)
    }
  }
}
