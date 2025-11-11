import { type HttpBindings } from '@hono/node-server'
import { Hono } from 'hono'
import { getEnv } from '@alstar/studio/env'

const env = await getEnv()

const app = new Hono<{ Bindings: HttpBindings }>()

app.post('/register', async (c) => {
  const formData = await c.req.formData()
  const signupData = Object.fromEntries(formData.entries())

  if (!signupData || !signupData.email || !signupData.password) {
    console.log(signupData)
    return c.text('noope')
  }

  return c.text('hello')

  return c.redirect('/studio')
})

app.post('/login', async (c) => {
  const formData = await c.req.formData()
  const data = Object.fromEntries(formData.entries())

  if (!data || !data.username || !data.password) return

  return c.redirect('/studio')
})

export const authRoutes = app
