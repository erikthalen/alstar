import type { Context, Env } from 'hono'
import type { ReadStream, Stats } from 'node:fs'
import { createReadStream, lstatSync } from 'node:fs'
import type { MediaCacheSchema, MediaSchema } from './create-media.ts'
import type { BlankInput } from 'hono/types'
import path from 'node:path'
import { mediaCachePath, mediaPath } from './router.ts'

const createStreamBody = (stream: ReadStream) => {
  const body = new ReadableStream({
    start(controller) {
      stream.on('data', (chunk) => controller.enqueue(chunk))
      stream.on('error', (err) => controller.error(err))
      stream.on('end', () => controller.close())
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
  media: MediaSchema | MediaCacheSchema,
  fromCached?: boolean,
) => {
  const filepath = path.join(
    fromCached ? mediaCachePath : mediaPath,
    media.filename,
  )

  let stats = getStats(filepath)

  if (!stats) {
    return c.notFound()
  }

  c.header('Content-Type', media.mime_type || 'application/octet-stream')

  let result
  const size = stats.size
  const range = c.req.header('range') || ''

  if (c.req.method == 'HEAD' || c.req.method == 'OPTIONS') {
    c.header('Content-Length', size.toString())
    c.status(200)
    result = c.body(null)
  } else if (!range) {
    c.header('Content-Length', size.toString())
    result = c.body(createStreamBody(createReadStream(filepath)), 200)
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
    const stream = createReadStream(filepath, { start, end })

    c.header('Content-Length', chunksize.toString())
    c.header('Content-Range', `bytes ${start}-${end}/${stats.size}`)

    result = c.body(createStreamBody(stream), 206)
  }

  return result
}
