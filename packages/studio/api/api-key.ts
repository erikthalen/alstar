import { type HttpBindings } from '@hono/node-server'
import { Hono } from 'hono'
import { streamSSE } from 'hono/streaming'
import { db } from '@alstar/db'
import crypto from 'node:crypto'
import { sql } from '../utils/sql.ts'
import { createHash } from '../utils/create-hash.ts'

const app = new Hono<{ Bindings: HttpBindings }>()

app.post('/api-key', async (c) => {
  return streamSSE(c, async (stream) => {
    const formData = await c.req.formData()
    const data = Object.fromEntries(formData.entries())

    if (!data) return

    const apiKey = crypto.randomUUID()

    const hash = createHash(apiKey)

    const xs = (length: number) => '*'.repeat(length)

    db.insertInto('api_keys', {
      name: data.name?.toString(),
      value: hash,
      hint: `${apiKey.substring(0, 8)}-${xs(4)}-${xs(4)}-${xs(4)}-${xs(12)}`,
    })

    await stream.writeSSE({
      event: 'datastar-patch-signals',
      data: `signals { apiKey: '${apiKey}', name: '' }`,
    })

    return
    // await renderSSE(stream, c)
  })
})

app.delete('/api-key', async (c) => {
  return streamSSE(c, async (stream) => {
    const formData = await c.req.formData()

    const value = formData.get('value')?.toString()

    if (!value) return

    db.database
      .prepare(
        sql`
        delete from api_keys
        where
          value = ?
      `
      )
      .run(value)

    return
    // await renderSSE(stream, c)
  })
})

export const apiKeyRoutes = app
