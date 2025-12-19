import path from 'node:path'
import fsp from 'node:fs/promises'
import { serveStatic } from '@hono/node-server/serve-static'
// import { getEnv } from '@alstar/studio/env'
import { hotReload, hotReloadClient } from '@alstar/studio/hot-reload'
import { datastar } from '@alstar/studio/hono-datastar'
import { mediaRouter } from '@alstar/studio/media'

import routes from './routes.ts'
import { getConfig } from './utils/get-config.ts'
import startupLog from './utils/startup-log.ts'
import { createAuthServer } from './utils/auth.ts'

import ErrorPage from './pages/error.ts'

import * as types from './types.ts'
import { cors } from 'hono/cors'
import { except } from 'hono/combine'
import { factory } from './factory.ts'
import { eventEmitterApp } from './event-emitter.ts'
import { applyMigrations } from './utils/apply-migrations.ts'
import { getDatabase } from './helpers/db/index.ts'

const { version } = JSON.parse(await fsp.readFile('./package.json', 'utf-8'))

const consumerRoot = path.resolve('.')
const studioRoot = import.meta.dirname

const defaultConfig: types.StudioConfig = {
  siteName: '',
  database: './studio.db',
  uploadBase: './public/media',
  fileBasedRouter: true,
  structure: {},
}

const consumerConfig = await getConfig<types.StudioConfigInput>()

// const env = await getEnv()

const config = { ...defaultConfig, ...consumerConfig }

const database = getDatabase(config.database)

await applyMigrations(database)

const auth = createAuthServer(database)

type AuthType = {
  user: typeof auth.$Infer.Session.user | null
  session: typeof auth.$Infer.Session.session | null
}

declare module 'hono' {
  interface ContextVariableMap extends AuthType {}
}

const createStudio = () => {
  const app = factory.createApp()

  // app.use(
  //   '*',
  //   cors({
  //     origin: `http://localhost:${config.port}`, // replace with your origin
  //     allowHeaders: ['Content-Type', 'Authorization'],
  //     allowMethods: ['POST', 'GET', 'OPTIONS'],
  //     exposeHeaders: ['Content-Length'],
  //     maxAge: 600,
  //     credentials: true,
  //   })
  // )

  if (process.env.HOT_RELOAD === 'true') {
    app.get('/hot-reload', hotReload({ root: '.', exclude: '.db' }))
  }

  /**
   * Datastar middleware
   */
  app.use('*', datastar())

  /**
   * Static folder
   */
  app.use('*', serveStatic({ root: path.join(studioRoot, 'public') }))

  // redirect to /login if not logged in
  app.use(
    '*',
    except(['/studio/api/auth/*', '/studio/login', '/studio/register'], async (c, next) => {
      const session = await auth.api.getSession({
        headers: c.req.raw.headers,
      })

      if (!session) {
        c.set('user', null)
        c.set('session', null)
        return c.redirect('/studio/login')
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

  // redirect to /register if there's no users
  app.use(
    '*',
    except(['/studio/register', '/studio/api/auth/*'], async (c, next) => {
      const users = database.prepare('select id from user').all()
      if (!users.length) return c.redirect('/studio/register')
      await next()
    }),
  )

  /**
   * Media route
   */
  app.route('/media', mediaRouter())

  /**
   * CQRS route
   */
  app.route('/updates', eventEmitterApp)

  /**
   * Studio pages
   */
  for (const route of routes) {
    app.get(route.name, route.handler(config)[0])
  }

  app.on(['POST', 'GET'], '/api/auth/*', (c) => {
    return auth.handler(c.req.raw)
  })

  app.use(
    '/backups/*',
    serveStatic({
      root: './',
      rewriteRequestPath: (path) => path.replace(/^\/backups/, '/backups'),
    }),
  )

  startupLog()

  app.get('*', ErrorPage(config)[0])

  return app
}

export { createStudio, version, config, database, studioRoot }

export type { AuthType }
