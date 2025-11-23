import type { IncomingMessage } from 'node:http'
import type { HttpBindings } from '@hono/node-server'
import { createMiddleware } from 'hono/factory'
import type { SSEStreamingApi } from 'hono/streaming'

// Simple Jsonifiable type definition to replace npm:type-fest dependency
type Jsonifiable =
  | string
  | number
  | boolean
  | null
  | undefined
  | Jsonifiable[]
  | { [key: string]: Jsonifiable }

type DatastarVariables = {
  datastar: {
    signals: Record<string, Jsonifiable> | null
    patchElements: (stream: SSEStreamingApi, template: string) => Promise<void>
    patchSignals: (
      stream: SSEStreamingApi,
      signals: Jsonifiable,
    ) => Promise<void>
  }
}

declare module 'hono' {
  interface ContextVariableMap extends DatastarVariables {}
}

function isRecord(obj: unknown): obj is Record<string, Jsonifiable> {
  return typeof obj === 'object' && obj !== null
}

export type ReadSignalsResult = Promise<
  | { success: true; signals: Record<string, Jsonifiable> }
  | { success: false; error: string }
>

/**
 * Reads client sent signals based on HTTP methods
 *
 * @params request - The NodeJS Request object.
 *
 * @returns An object containing a success boolean and either the client's signals or an error message.
 */
export const readSignals = async (
  request: IncomingMessage,
): ReadSignalsResult => {
  if (request.method === 'GET') {
    const url = new URL(
      `http://${process.env.HOST ?? 'localhost'}${request.url}`,
    )
    const params = url.searchParams

    try {
      if (params.has('datastar')) {
        const signals = JSON.parse(params.get('datastar')!)
        if (isRecord(signals)) {
          return { success: true, signals }
        } else throw new Error('Datastar param is not a record')
      } else throw new Error('No datastar object in request')
    } catch (e: unknown) {
      if (isRecord(e) && 'message' in e && typeof e.message === 'string') {
        return { success: false, error: e.message }
      } else {
        return {
          success: false,
          error: 'unknown error when parsing request',
        }
      }
    }
  }
  const body = await new Promise((resolve, _) => {
    let chunks = ''
    request.on('data', (chunk: string) => {
      chunks += chunk
    })
    request.on('end', () => {
      resolve(chunks)
    })
  })

  try {
    if (typeof body !== 'string') throw Error('body was not a string')
    const parsedBody = JSON.parse(body)

    if (isRecord(parsedBody)) {
      return { success: true, signals: parsedBody }
    } else {
      throw new Error('Parsed JSON body is not of type record')
    }
  } catch (e: unknown) {
    if (isRecord(e) && 'message' in e && typeof e.message === 'string') {
      return { success: false, error: e.message }
    } else {
      return {
        success: false,
        error: 'unknown error when parsing request',
      }
    }
  }
}

export const patchElements = (stream: SSEStreamingApi, template: string) => {
  return stream.writeSSE({
    event: 'datastar-patch-elements',
    data:
      'mode replace\n' +
      template
        .split('\n')
        .map((line) => `elements ${line}`)
        .join('\n'),
  })
}

export const patchSignals = (stream: SSEStreamingApi, signals: Jsonifiable) => {
  return stream.writeSSE({
    event: 'datastar-patch-signals',
    data: `signals ${JSON.stringify(signals)}`,
  })
}

export const datastar = () =>
  createMiddleware<{ Bindings: HttpBindings }>(async (c, next) => {
    if (!c.req.header('datastar-request')) return await next()

    const payload = await readSignals(c.env.incoming)

    if (!payload.success) {
      console.error(payload.error)
    }

    c.set('datastar', {
      signals: payload.success ? payload.signals : null,
      patchElements,
      patchSignals,
    })

    await next()
  })
