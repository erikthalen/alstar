import path from 'node:path'

import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { HTTPException } from 'hono/http-exception'

import { loadDb } from '@alstar/db'
import { refreshClient } from '@alstar/refresher'

import { createStudioTables } from './utils/create-studio-tables.ts'
import { fileBasedRouter } from './utils/file-based-router.ts'
import { getConfig } from './utils/get-config.ts'
import startupLog from './utils/startup-log.ts'
import { apiRoutes } from './api/index.ts'
import { mcpRoutes } from './api/mcp.ts'
import packageJSON from './package.json' with { type: 'json' }

import auth from './utils/auth.ts'
import ErrorPage from './pages/error.ts'

import * as types from './types.ts'
import { refresher } from './utils/refresher.ts'

export let rootdir = './node_modules/@alstar/studio'

export let studioStructure: types.Structure = {}
export let studioConfig: types.StudioConfig = {
  siteName: '',
  honoConfig: {},
  fileBasedRouter: true,
  port: 3000,
  structure: {},
}

const createStudio = async (config: types.StudioConfigInput) => {
  loadDb('./studio.db')
  createStudioTables()

  // const configFile = await getConfig<types.StudioConfig>()

  if (config.structure) {
    studioStructure = config.structure
  }

  studioConfig = { ...studioConfig, ...config }

  const app = new Hono(studioConfig.honoConfig)

  app.get('/refresh', refresher({ root: '.', exclude: '.db' }))

  /**
   * Static folders
   */
  app.use('*', serveStatic({ root: path.join(rootdir, 'public') }))
  app.use('*', serveStatic({ root: './public' }))

  /**
   * Require authentication to access Studio
   */
  app.use('/studio/*', auth)

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

  /**
   * Error pages
   */
  app.notFound((c) => c.html(ErrorPage()))
  app.onError((err, c) => {
    console.log(err)

    if (err instanceof HTTPException) {
      // Get the custom response
      const error = err.getResponse()
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
    refreshClient: refreshClient(studioConfig.port)
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
export { html, raw, type HtmlEscapedString } from './utils/html.ts'
export { query } from './queries/index.ts'
export const version = packageJSON.version
