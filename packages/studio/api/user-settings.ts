import { Hono } from 'hono'
import { type HttpBindings } from '@hono/node-server'
import { db } from '@alstar/db'
import { sql } from '../utils/sql.ts'

const app = new Hono<{
  Bindings: HttpBindings
  Variables: {
    user: {
      id: string
      createdAt: Date
      updatedAt: Date
      email: string
      emailVerified: boolean
      name: string
      image?: string | null | undefined
    } | null
    session: {
      id: string
      createdAt: Date
      updatedAt: Date
      userId: string
      expiresAt: Date
      token: string
      ipAddress?: string | null | undefined
      userAgent?: string | null | undefined
    } | null
  }
}>()

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

  const body = await c.req.formData()
  const data = Object.fromEntries(body.entries())

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
    .run(user.id, data.type.toString(), data.value?.toString() || 'false')

  return c.json({ status: 200, message: 'value updated' })
})

app.delete('/user-settings', async (c) => {})

export const userSettingsRoutes = app
