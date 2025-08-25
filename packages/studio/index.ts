import { Hono } from 'hono'
import { loadDb } from '@alstar/db'
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { createRefresher } from '@alstar/refresher'

import * as types from './types.ts'
import { createStudioTables } from './utils/create-studio-tables.ts'
import { fileBasedRouter } from './utils/file-based-router.ts'
import { getConfig } from './utils/get-config.ts'
import startupLog from './utils/startup-log.ts'
import { api } from './api/index.ts'
import mcp from './api/mcp.ts'
import path from 'path'

export let rootdir = './node_modules/@alstar/studio'

export let studioStructure: types.Structure = {}
export let studioConfig: types.StudioConfig = {
  siteName: '',
  port: 3000,
  structure: {},
}

const createStudio = async (config: types.StudioConfig) => {
  const refresher = await createRefresher({ rootdir: '.' })

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
   * Studio API routes
   */
  app.route('/admin/api', api(studioStructure))
  app.route('/admin/mcp', mcp())

  /**
   * Studio pages
   */
  const adminPages = await fileBasedRouter(path.join(rootdir, 'pages'))

  if (adminPages) app.route('/admin', adminPages)

  /**
   * User pages
   */
  const pages = await fileBasedRouter('./pages')

  if (pages) app.route('/', pages)

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
} from './utils/define.ts'
export { type RequestContext } from './types.ts'
export { createStudio }
export { html, type HtmlEscapedString } from './utils/html.ts'
export { query } from './queries/index.ts'
