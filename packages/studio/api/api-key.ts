import { type HttpBindings } from '@hono/node-server'
import { ServerSentEventGenerator } from '@starfederation/datastar-sdk'
import { Hono } from 'hono'
import { streamSSE } from 'hono/streaming'
import { db } from '@alstar/db'
import crypto from 'node:crypto'

import { stripNewlines } from '../utils/strip-newlines.ts'
import { sql } from '../utils/sql.ts'
import { type Structure } from '../types.ts'
import Settings from '../components/Settings.ts'

export default (structure: Structure) => {
  const app = new Hono<{ Bindings: HttpBindings }>()

  app.post('/api-key', async (c) => {
    return streamSSE(c, async (stream) => {
      const formData = await c.req.formData()
      const data = Object.fromEntries(formData.entries())

      if (!data) return

      const apiKey = crypto.randomUUID()
      const hash = crypto.createHash('sha256')

      hash.update(apiKey)

      const digest = hash.digest().toString('base64')

      const xs = (length: number) => '*'.repeat(length)

      db.insertInto('api_keys', {
        name: data.name?.toString(),
        value: digest,
        hint: `${apiKey.substring(0, 8)}-${xs(4)}-${xs(4)}-${xs(4)}-${xs(12)}`,
      })

      await stream.writeSSE({
        event: 'datastar-patch-signals',
        data: `signals { apiKey: '${apiKey}', name: '' }`,
      })

      await stream.writeSSE({
        event: 'datastar-patch-elements',
        data: `elements ${stripNewlines(Settings())}`,
      })
    })
  })

  app.delete('/api-key', async (c) => {
    return streamSSE(c, async (stream) => {
      const formData = await c.req.formData()

      const value = formData.get('value')?.toString()

      if (!value) return

      db.database
        .prepare(sql`
          delete from api_keys
          where
            value = ?
        `)
        .run(value)

      await stream.writeSSE({
        event: 'datastar-patch-elements',
        data: `elements ${stripNewlines(Settings())}`,
      })
    })
  })

  return app
}
