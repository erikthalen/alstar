import { type HttpBindings } from '@hono/node-server'
import { ServerSentEventGenerator } from '@starfederation/datastar-sdk'
import { Hono } from 'hono'
import { sql } from '../utils/sql.ts'
import { db } from '@alstar/db'
import { bearerAuth } from 'hono/bearer-auth'
import crypto from 'node:crypto'

export default () => {
  const app = new Hono<{ Bindings: HttpBindings }>()

  app.use(
    '/*',
    bearerAuth({
      verifyToken: async (token, c) => {
        const hash = crypto.createHash('sha256')

        hash.update(token)

        const digest = hash.digest().toString('base64')

        const exists = db.database
          .prepare(sql`
            select
              value
            from
              api_keys
            where
              value = ?
          `)
          .get(digest)

        return !!exists
      },
    }),
  )

  app.get('/entry', async (c) => {
    return c.json({
      status: 'success',
      message: 'Response from MCP server!',
    })
  })

  app.post('/entry', async (c) => {
    return c.json({
      status: 'success',
      message: 'New entry created!',
    })
  })

  return app
}
