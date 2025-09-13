import path from 'node:path'

import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { HTTPException } from 'hono/http-exception'

import { loadDb } from '@alstar/db'
import { createRefresher } from '@alstar/refresher'

import { createStudioTables } from './utils/create-studio-tables.ts'
import { fileBasedRouter } from './utils/file-based-router.ts'
import { getConfig } from './utils/get-config.ts'
import startupLog from './utils/startup-log.ts'
import { apiRoutes } from './api/index.ts'
import { mcpRoutes } from './api/mcp.ts'

import auth from './utils/auth.ts'
import ErrorPage from './pages/error.ts'

import * as types from './types.ts'

export let rootdir = './node_modules/@alstar/studio'

export let studioStructure: types.Structure = {}
export let studioConfig: types.StudioConfig = {
  siteName: '',
  port: 3000,
  structure: {},
}

const createStudio = async (config: types.StudioConfig) => {
  // const refresher = await createRefresher({ rootdir: ['.', import.meta.dirname] })
  const refresher = await createRefresher({ rootdir: ['.'] })

  loadDb('./studio.db')
  createStudioTables()

  // const configFile = await getConfig<types.StudioConfig>()

  if (config.structure) {
    studioStructure = config.structure
  }

  studioConfig = { ...studioConfig, ...config }

  const app = new Hono(studioConfig.honoConfig)

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
  const pages = await fileBasedRouter('./pages')
  if (pages) app.route('/', pages)

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
      rewriteRequestPath: (path) => path.replace(/^\/studio\/backups/, '/backups'),
    }),
  )

  // console.log(app.routes)

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

  startupLog({ port: studioConfig.port || 3000, refresherPort: refresher.port })

  return app
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
export { html, type HtmlEscapedString } from './utils/html.ts'
export { query } from './queries/index.ts'
