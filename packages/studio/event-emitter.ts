import crypto from 'node:crypto'
import EventEmitter from 'node:events'
import { SSEStreamingApi, streamSSE } from 'hono/streaming'
import { factory } from './factory.ts'
import { type AuthType } from './index.ts'
import { patchElements, type Jsonifiable } from './helpers/hono-datastar/index.ts'
import { type HtmlEscapedString } from 'hono/utils/html'

type Component = HtmlEscapedString | Promise<HtmlEscapedString>

type Connection = {
  stream: SSEStreamingApi
  user: AuthType['user']
}

/**
 * generate a random, seeded, name based on what function called this function
 */
const generateEventName = (id?: string | number) => {
  const { stack } = new Error()
  const caller = stack?.split('\n')[3]

  return crypto
    .createHash('sha1')
    .update(id + (caller as string))
    .digest('hex')
}

export const eventEmitter = new EventEmitter()
export const connections = new Map<string, Connection>()

type EventHandler = (arg: {
  user: AuthType['user']
  signals: Record<string, Jsonifiable> | null
  patchElements: (patches: Component | Component[], patchCurrentUser?: boolean) => void
}) => Component | Component[] | void

const registeredEventNames = new Set<string>()
const dependencies = new Map<string | number, { name: string; handler: EventHandler }[]>()

export const defineEventHandler = (
  fn: EventHandler,
  options?: {
    id?: string | number | (string | number)[]
    dependency?: string | number
    once?: boolean
  },
): string => {
  const eventName = generateEventName(JSON.stringify(options || '{}'))
  const endpoint = `@post('/studio/updates/${eventName}')`

  if (registeredEventNames.has(eventName)) return endpoint

  registeredEventNames.add(eventName)

  // console.log('defining event:', eventName)

  const handler: EventHandler = (args) => {
    const patch = (patches: Component | Component[], patchCurrentUser = true) => {
      const patchesArray = Array.isArray(patches) ? patches : [patches]

      for (const patch of patchesArray) {
        try {
          connections.forEach(async (connection) => {
            if (!patchCurrentUser && args.user && connection.user?.id === args.user?.id) return

            await patchElements(connection.stream, await patch)
          })
        } catch (error) {
          console.log(error)
          return
        }
      }
    }

    const patches = fn({ ...args, patchElements: patch })

    if (patches) {
      patch(patches)
    }
  }

  eventEmitter[options?.once ? 'once' : 'on'](eventName, handler)

  if (options?.dependency) {
    dependencies.set(options?.dependency, [
      ...(dependencies.get(options?.dependency) || []),
      { name: eventName, handler },
    ])
  }

  return endpoint
}

export function unregisterEventHandler(id: string | number) {
  const events = dependencies.get(id)

  if (!events) return

  events.forEach((event) => {
    console.log(`[emitter] - Unregistering: ${event.name}`)
    eventEmitter.off(event.name, event.handler)
  })
}

const eventEmitterApp = factory.createApp()

eventEmitterApp.get('/', (c) => {
  return streamSSE(c, async (stream) => {
    const user = c.get('user')

    if (!user) return

    let { promise, resolve } = Promise.withResolvers()

    connections.set(user.id, { stream, user })

    stream.onAbort(() => {
      resolve(true)
      connections.delete(user.id)
    })

    await promise
  })
})

eventEmitterApp.post('/:event', (c) => {
  return streamSSE(c, async () => {
    const user = c.get('user')

    if (!user) return

    const event = c.req.param('event')
    const { signals } = c.get('datastar')

    eventEmitter.emit(event, { user, signals })
  })
})

export { eventEmitterApp }
