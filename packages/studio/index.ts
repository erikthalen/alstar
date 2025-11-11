import path from 'node:path'

import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { HTTPException } from 'hono/http-exception'

import { loadDb } from '@alstar/db'
import { getEnv } from '@alstar/studio/env'
import { hotReload, hotReloadClient } from '@alstar/studio/hot-reload'

import { createStudioTables } from './utils/create-studio-tables.ts'
import { fileBasedRouter } from './utils/file-based-router.ts'
import { getConfig } from './utils/get-config.ts'
import startupLog from './utils/startup-log.ts'
import { createAuthServer } from './utils/auth.ts'
import { apiRoutes } from './api/index.ts'
import { mcpRoutes } from './api/mcp.ts'
import packageJSON from './package.json' with { type: 'json' }

import ErrorPage from './pages/error.ts'

import * as types from './types.ts'
import { cors } from 'hono/cors'
import { except } from 'hono/combine'
import { html } from 'hono/html'

export let rootdir = './node_modules/@alstar/studio'

export let studioStructure: types.Structure = {}
export let studioConfig: types.StudioConfig = {
  siteName: '',
  honoConfig: {},
  fileBasedRouter: true,
  port: 3000,
  structure: {},
}

const env = await getEnv()

const createStudio = async (config: types.StudioConfigInput) => {
  loadDb('./studio.db')
  createStudioTables()

  const auth = createAuthServer()

  // const configFile = await getConfig<types.StudioConfig>()

  if (config.structure) {
    studioStructure = config.structure
  }

  studioConfig = { ...studioConfig, ...config }

  const app = new Hono(studioConfig.honoConfig)

  // app.use(
  //   '*',
  //   cors({
  //     origin: `http://localhost:${studioConfig.port}`, // replace with your origin
  //     allowHeaders: ['Content-Type', 'Authorization'],
  //     allowMethods: ['POST', 'GET', 'OPTIONS'],
  //     exposeHeaders: ['Content-Length'],
  //     maxAge: 600,
  //     credentials: true,
  //   })
  // )

  // app.get('/hot-reload', hotReload({ root: '.', exclude: '.db' }))

  if (process.env.HOT_RELOAD === 'true') {
    app.get('/hot-reload', hotReload({ root: '.', exclude: '.db' }))
  }

  /**
   * Static folders
   */
  app.use('*', serveStatic({ root: path.join(rootdir, 'public') }))
  app.use('*', serveStatic({ root: './public' }))

  // redirect to /login if not logged in
  app.use(
    '/studio/*',
    except('/studio/login', async (c, next) => {
      const session = await auth.api.getSession({ headers: c.req.raw.headers })

      if (!session) {
        c.set('user', null)
        c.set('session', null)
        await next()
        return c.redirect('/studio/login')
      }

      c.set('user', session.user)
      c.set('session', session.session)
      await next()
    }),
  )

  // redirect from /login to /studio if logged in
  app.use('/studio/login', async (c, next) => {
    const session = await auth.api.getSession({ headers: c.req.raw.headers })
    if (session?.user) return c.redirect('/studio')
    await next()
  })

  /**
   * Studio API routes
   */
  app.route('/studio/api', apiRoutes)
  app.route('/studio/mcp', mcpRoutes)

  /**
   * Studio pages
   */
  const studioPages = await fileBasedRouter(path.join(rootdir, 'pages'))
  if (studioPages) app.route('/studio', studioPages)

  /**
   * User pages
   */
  if (studioConfig.fileBasedRouter) {
    const pages = await fileBasedRouter('./pages')
    if (pages) app.route('/', pages)
  }

  app.on(['POST', 'GET'], '/api/auth/*', (c) => auth.handler(c.req.raw))

  /**
   * Error pages
   */
  app.notFound((c) => c.html(ErrorPage(c.error)))

  app.onError((err, c) => {
    if (err instanceof HTTPException) {
      // Get the custom response
      // const error = err.getResponse()
      return c.html(ErrorPage(err))
    }

    return c.notFound()
  })

  app.use(
    '/studio/backups/*',
    serveStatic({
      root: './',
      rewriteRequestPath: (path) =>
        path.replace(/^\/studio\/backups/, '/backups'),
    }),
  )

  /**
   * Run server
   */
  const server = serve({
    fetch: app.fetch,
    port: studioConfig.port,
  })

  // graceful shutdown
  process.on('SIGINT', () => {
    server.close()
    process.exit(0)
  })
  process.on('SIGTERM', () => {
    server.close((err) => {
      if (err) {
        console.error(err)
        process.exit(1)
      }
      process.exit(0)
    })
  })

  startupLog({ port: studioConfig.port })

  return {
    app,
    hotReloadClient: hotReloadClient(studioConfig.port),
  }
}

export {
  defineConfig,
  defineEntry,
  defineStructure,
  defineBlock,
  defineField,
  defineBlockField,
} from './utils/define.ts'
export { type RequestContext } from './types.ts'
export { createStudio }
export { query } from './queries/index.ts'
export const version = packageJSON.version
