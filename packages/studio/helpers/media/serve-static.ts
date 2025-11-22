import type { Context, Env } from 'hono'
import type { ReadStream, Stats } from 'node:fs'
import { createReadStream, lstatSync } from 'node:fs'
import type { MediaSchema } from './create-media.ts'
import type { BlankInput } from 'hono/types'

const createStreamBody = (stream: ReadStream) => {
  const body = new ReadableStream({
    start(controller) {
      stream.on('data', (chunk) => {
        controller.enqueue(chunk)
      })
      stream.on('error', (err) => {
        controller.error(err)
      })
      stream.on('end', () => {
        controller.close()
      })
    },

    cancel() {
      stream.destroy()
    },
  })
  return body
}

const getStats = (path: string) => {
  let stats: Stats | undefined
  try {
    stats = lstatSync(path)
  } catch {}
  return stats
}

export const serveStatic = (
  c: Context<Env, ':filename', BlankInput>,
  media: MediaSchema
) => {
  let stats = getStats(media.filepath)

  if (!stats) {
    return c.notFound()
  }

  c.header('Content-Type', media.mimeType || 'application/octet-stream')

  let result
  const size = stats.size
  const range = c.req.header('range') || ''

  if (c.req.method == 'HEAD' || c.req.method == 'OPTIONS') {
    c.header('Content-Length', size.toString())
    c.status(200)
    result = c.body(null)
  } else if (!range) {
    c.header('Content-Length', size.toString())
    result = c.body(createStreamBody(createReadStream(media.filepath)), 200)
  } else {
    c.header('Accept-Ranges', 'bytes')
    c.header('Date', stats.birthtime.toUTCString())

    const parts = range.replace(/bytes=/, '').split('-', 2)
    const start = parseInt(parts[0], 10) || 0
    let end = parseInt(parts[1], 10) || size - 1
    if (size < end - start + 1) {
      end = size - 1
    }

    const chunksize = end - start + 1
    const stream = createReadStream(media.filepath, { start, end })

    c.header('Content-Length', chunksize.toString())
    c.header('Content-Range', `bytes ${start}-${end}/${stats.size}`)

    result = c.body(createStreamBody(stream), 206)
  }

  return result
}
