import { Hono } from 'hono'
import { loadDb } from '@alstar/db'
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { createRefresher } from '@alstar/refresher'

import Layout from './components/layout.ts'
import IndexPage from './components/index.ts'
import SettingsPage from './components/Settings.ts'
import Entry from './components/Entry.ts'

import * as types from './types.ts'
import { createStudioTables } from './utils/create-studio-tables.ts'
import { fileBasedRouter } from './utils/file-based-router.ts'
import { getConfig } from './utils/get-config.ts'
import startupLog from './utils/startup-log.ts'
import { api } from './api/index.ts'
import mcp from './api/mcp.ts'

export let structure: types.Structure
export let rootdir = '/node_modules/@alstar/studio'

export let studioConfig: types.StudioConfig = {
  siteName: '',
  structure: {}
}

const createStudio = async (config: types.StudioConfig) => {
  startupLog()

  createRefresher({ rootdir: '.' })

  loadDb('./studio.db')
  createStudioTables()

  // const configFile = await getConfig<types.StudioConfig>()

  if (config.structure) {
    structure = config.structure
  }

  studioConfig = { ...studioConfig, ...config }

  const app = new Hono(studioConfig.honoConfig)

  app.use('*', serveStatic({ root: './' }))
  app.use('*', serveStatic({ root: './public' }))

  app.get('/admin', (c) => c.html(Layout({ structure, content: IndexPage() })))
  app.get('/admin/settings', (c) => c.html(Layout({ structure, content: SettingsPage() })))
  app.get('/admin/entry/:id', (c) => {
    return c.html(
      Layout({
        structure,
        content: Entry({ entryId: parseInt(c.req.param('id')) }),
      }),
    )
  })

  app.route('/admin/api', api(structure))
  app.route('/admin/mcp', mcp())

  const pages = await fileBasedRouter('./pages')

  if (pages) {
    app.route('/', pages)
  }

  const server = serve(app)

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
