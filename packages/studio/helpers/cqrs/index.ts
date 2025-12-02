import { SSEStreamingApi, streamSSE } from 'hono/streaming'
import { factory } from '../../factory.ts'
import EventEmitter from 'node:events'
import { raw } from 'hono/html'
import { patchElements } from '../hono-datastar/index.ts'
import { type AuthType } from '../../index.ts'
import { getElementsToPatch } from '../../utils/get-elements-to-patch.ts'
import EditedBy from '../../components/utils/EditedBy.ts'

type Connection = {
  stream: SSEStreamingApi
  user: AuthType['user']
  cursor: [number, number]
  color: string
}

export const eventEmitter = new EventEmitter()
const connections = new Map<string, Connection>()

eventEmitter.on('cursor', (datastar, user) => {
  if (datastar.signals?.cursor) {
    const cursor = datastar.signals?.cursor as [number, number]
    const connection = connections.get(user.id)

    if (connection) {
      connections.set(user.id, { ...connection, cursor: cursor })
    }
  }

  connections.forEach((connection) => {
    let template = ''

    connections.forEach((innerItem) => {
      if (!innerItem.cursor) return
      if (innerItem.user?.id === user?.id) return

      const [x, y] = innerItem.cursor

      template += raw(
        `<div class="cursor" style="translate: ${x + 10}px ${y + 10}px; background-color: ${innerItem.color}"> ${innerItem.user?.name}</div>`,
      )
    })

    patchElements(connection.stream, template)
  })
})

eventEmitter.on('patch', (elementsToPatch, user) => {
  connections.forEach(async (connection) => {
    if (user && connection.user?.id === user?.id) return

    const patches = await getElementsToPatch(elementsToPatch)

    for (const patch of patches) {
      await patchElements(connection.stream, patch)
    }
  })
})

eventEmitter.on('editing', (datastar, user) => {
  const obj = Object.values(datastar.signals)[0] as { id: number }
  const id = obj?.id as number

  if (!id) return

  const template = EditedBy({
    id: id,
    userId: !user ? null : user.id,
  })

  connections.forEach(async (connection) => {
    if (user && connection.user?.id === user?.id) return

    await patchElements(connection.stream, template.toString())
  })
})

export default () => {
  const app = factory.createApp()

  app.get('/', (c) => {
    return streamSSE(c, async (stream) => {
      const user = c.get('user')

      if (!user) return

      let { promise, resolve } = Promise.withResolvers()

      connections.set(user.id, {
        stream,
        user,
        cursor: [0, 0],
        color: `hsl(${Math.random() * 360}, 90%, 60%)`,
      })

      stream.onAbort(() => {
        resolve(true)
        connections.delete(user.id)
      })

      await promise
    })
  })

  app.post('/:event', (c) => {
    return streamSSE(c, async () => {
      const event = c.req.param('event')
      const user = c.get('user')
      const datastar = c.get('datastar')
      const query = c.req.query()

      console.log('query', query)

      if (!user) return

      if (event === 'cursor') {
        eventEmitter.emit('cursor', datastar, user)
      }

      if (event === 'editing') {
        eventEmitter.emit('editing', datastar, user)
      }

      if (event === 'not-editing') {
        eventEmitter.emit('editing', datastar, null)
      }
    })
  })

  return app
}
