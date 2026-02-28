import { factory } from '@alstar/framework'
import { betterAuth } from 'better-auth'
import { except } from 'hono/combine'
import type { DatabaseSync } from 'node:sqlite'
import register from './pages/register.ts'
import login from './pages/login.ts'
import SiteLayout from '#components/SiteLayout.ts'

export const initAuth = (database: DatabaseSync) => {
  const app = factory.createApp()
  const auth = betterAuth({
    basePath: 'studio/api/auth',
    database: database,
    emailAndPassword: {
      enabled: true,
    },
  })

  const nonSecureRoutes = ['/studio/api/auth/*', '/studio/login', '/studio/register']

  // redirect to /login if not logged in
  app.use(
    '*',
    except(nonSecureRoutes, async (c, next) => {
      const session = await auth.api.getSession({
        headers: c.req.raw.headers,
      })

      if (!session) {
        c.set('user', null)
        c.set('session', null)

        const users = database.prepare('select id from user').all()

        if (!users.length) {
          return c.redirect('/studio/register')
        } else {
          return c.redirect('/studio/login')
        }
      }

      c.set('user', session.user)
      c.set('session', session.session)
      await next()
    }),
  )

  // redirect from /login to /studio if logged in
  app.use('/login', async (c, next) => {
    const session = await auth.api.getSession({ headers: c.req.raw.headers })
    if (session?.user) return c.redirect('/studio')
    await next()
  })

  app.on(['POST', 'GET'], '/api/auth/*', (c) => {
    return auth.handler(c.req.raw)
  })

  app.get('/register', (c) => c.html(SiteLayout(c, register())))
  app.get('/login', (c) => c.html(SiteLayout(c, login())))

  return { auth, app }
}
