import { Hono } from 'hono'
import { type HttpBindings } from '@hono/node-server'
import { db } from '@alstar/db'
import { sql } from '../utils/sql.ts'
import { readSignals } from '../utils/read-signals.ts'

const app = new Hono<{ Bindings: HttpBindings }>()

app.get('/user-settings', async (c) => {
  const user = c.get('user') as { id: string } | undefined

  if (!user?.id) return c.json({ status: 401, message: 'no user' })

  db.database
    .prepare(sql`select type, value from setting where user_id = ?`)
    .run(user.id)

  return c.text('settings')
})

app.post('/user-settings', async (c) => {
  const user = c.get('user') as { id: string } | undefined

  if (!user?.id) return c.json({ status: 401, message: 'no user' })

  const body = await c.req.json()
  const [data] = Object.entries(body)

  db.database
    .prepare(
      sql`
        INSERT INTO setting (user_id, type, value, updated_at)
        VALUES (?, ?, ?, datetime('now'))
        ON CONFLICT(user_id, type)
        DO UPDATE SET
          value = excluded.value,
          updated_at = datetime('now');
      `
    )
    .run(user.id, data[0], data[1]?.toString() || '')

  return c.text('yeah')
})

app.delete('/user-settings', async (c) => {})

export const userSettingsRoutes = app
