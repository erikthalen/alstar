import path from 'node:path'
import { stripNewlines } from './strip-newlines.ts'
import { type SSEStreamingApi } from 'hono/streaming'
import { type Context } from 'hono'

export const renderSSE = async (stream: SSEStreamingApi, c: Context) => {
  const componentPath = c.req.header('render')
  const props = c.req.header('props')

  if (componentPath) {
    try {
      const partialToRender = await import(
        path.join('../', 'components', componentPath + '.ts')
      )

      const propsJSON = props ? JSON.parse(props) : undefined
      const component = await partialToRender.default(propsJSON)

      await stream.writeSSE({
        event: 'datastar-patch-elements',
        data: `elements ${stripNewlines(component)}`,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
