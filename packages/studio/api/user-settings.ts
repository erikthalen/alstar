import { Hono } from 'hono'
import { type HttpBindings } from '@hono/node-server'
import { db } from '@alstar/db'
import { sql } from '../utils/sql.ts'
import { streamSSE } from 'hono/streaming'

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
  const user = c.get('user')

  if (!user?.id) return c.json({ status: 401, message: 'no user' })

  db.database
    .prepare(sql`select type, value from setting where user_id = ?`)
    .run(user.id)

  return c.text('settings')
})

function camelToSnake(camelCaseString: string): string {
  return camelCaseString.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`)
}

app.post('/user-settings', async (c) => {
  return streamSSE(c, async (stream) => {
    const user = c.get('user')
    const datastar = c.get('datastar')

    if (!user?.id) return

    const body = datastar.signals

    if (!body) return

    const values = body.usersettings

    console.log('VALUES:', values)

    for (const key in values) {
      if (key !== 'explorerLocked') continue

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
        .run(user.id, camelToSnake(key), values[key].toString() || 'false')
    }

    return
  })
})

app.delete('/user-settings', async (c) => {})

export const userSettingsRoutes = app
