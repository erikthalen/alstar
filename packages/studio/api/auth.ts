import { type HttpBindings } from '@hono/node-server'
import { Hono } from 'hono'
import { createHash } from '../utils/create-hash.ts'
import { db } from '@alstar/db'
import { streamSSE } from 'hono/streaming'
import { sql } from '../utils/sql.ts'
import { setCookie } from 'hono/cookie'

const app = new Hono<{ Bindings: HttpBindings }>()

app.post('/register', async (c) => {
  const formData = await c.req.formData()
  const data = Object.fromEntries(formData.entries())

  if (!data || !data.email || !data.password) return

  const hash = createHash(data.password.toString())

  db.insertInto('users', {
    email: data.email?.toString(),
    hash: hash,
  })

  setCookie(c, 'login', 'yes')

  return c.redirect('/studio')
})

app.post('/login', async (c) => {
  const formData = await c.req.formData()
  const data = Object.fromEntries(formData.entries())

  if (!data || !data.email || !data.password) return

  const user = db.database
    .prepare(sql`
      select
        *
      from
        users
      where
        email = ?
    `)
    .get(data.email.toString())

  if (!user) {
    return c.json({ status: 404, message: 'No user with that email' })
  }

  const passwordHash = createHash(data.password.toString())

  if (passwordHash !== user.hash) {
    return c.json({ status: 401, message: 'Wrong password' })
  }

  setCookie(c, 'login', 'yes')

  return c.redirect('/studio')
})

export const authRoutes = app
