import path from 'node:path'
import fsp from 'node:fs/promises'
import { serveStatic } from '@hono/node-server/serve-static'
import { hotReload, hotReloadMiddleware } from './helpers/hot-reload/hot-reload.ts'
import { datastar } from './helpers/hono-datastar/index.ts'

import routes from './routes.ts'
import { api } from './api/index.ts'
import { getConfig } from './utils/get-config.ts'
import startupLog from './utils/startup-log.ts'

import ErrorPage from './pages/error.ts'

import * as types from './types.ts'
import { cors } from 'hono/cors'

import mediaLibrary from '@alstar/media-library'
import type {
  Field,
  FieldComponent,
  FieldHandler,
  FieldTypeMap,
  StudioConfig,
  Widget,
} from '@alstar/types'
import { getField } from '#database/sql/index.ts'
import { createDatabaseRouter } from '#database/router.ts'
import { factory } from '@alstar/framework'
import Clock from '@alstar/clock-widget'
import Explorer from '#plugins/Explorer.ts'
import markdownField from '@alstar/markdown-field'
import svgField from '@alstar/svg-field'
import textField from '@alstar/text-field'
import { streamSSE } from 'hono/streaming'
import { connections, eventEmitter } from '#event-emitter.ts'
import titleField from '@alstar/title-field'
import { initAuth } from '#features/auth/router.ts'
import { html } from 'hono/html'
import SiteHeader from '#components/SiteHeader.ts'
import Widgets from '#components/Widgets.ts'
import { app as workspaceRouter } from './features/workspace/router.ts'
import WidgetsLayout from '#layouts/WidgetsLayout.ts'
import { HtmlEscapedString } from 'hono/utils/html'
import SharedLayout from '#layouts/SharedLayout.ts'

const { version } = JSON.parse(await fsp.readFile('./package.json', 'utf-8'))

const consumerRoot = path.resolve('.')
const studioRoot = import.meta.dirname

const defaultConfig: StudioConfig = {
  siteName: '',
  database: './studio.db',
  uploadBase: './public/media',
  structure: {},
  plugins: [Clock, Explorer, titleField, textField, svgField, markdownField, mediaLibrary()],
}

const consumerConfig = await getConfig<types.StudioUserConfig>()

const config = {
  ...defaultConfig,
  ...consumerConfig,
  plugins: [...defaultConfig.plugins, ...(consumerConfig.plugins || [])],
}

const { app: databaseRouter, database } = await createDatabaseRouter(config.database)
const { app: authRouter, auth } = initAuth(database)

type AuthType = {
  user: typeof auth.$Infer.Session.user | null
  session: typeof auth.$Infer.Session.session | null
}

declare module 'hono' {
  interface ContextVariableMap extends AuthType {}
}

type ConfigType = {
  config: StudioConfig
  widgets: Widget[]
  publicFiles: string
}

declare module 'hono' {
  interface ContextVariableMap extends ConfigType {}
}

type StudioRuntimeConfig = {
  enableHotReload?: boolean
}

export let fields: Partial<
  Record<keyof FieldTypeMap, { component: FieldComponent<any>; handler?: FieldHandler<any> }>
> = {}

const createStudio = (runtimeConfig: StudioRuntimeConfig = {}) => {
  const {
    /**
     * hotReload
     * Enables automatic browser refresh when studio code is saved during development
     */
    enableHotReload = false,
  } = runtimeConfig

  const app = factory.createApp()

  if (enableHotReload) {
    app.get('/hot-reload', hotReload({ root: path.join(studioRoot, '..'), exclude: '.db' }))
    app.use('*', hotReloadMiddleware(true))
  }

  /**
   * Datastar middleware
   */
  app.use('*', datastar())

  /**
   * Static folder
   */
  app.use('*', serveStatic({ root: path.join(studioRoot, 'public') }))

  let widgets = []
  let publicFiles = ''

  /**
   * Initialise plugins
   */
  const plugins = config.plugins.map((pluginInit) => {
    return pluginInit({
      database,
      config: config,
      eventEmitter: eventEmitter,
      query: {
        getField,
      },
    })
  })

  for (const plugin of plugins) {
    if (plugin.widget) {
      widgets.push(plugin.widget)
    }

    if (plugin.migrations?.length) {
      for (const migration of plugin.migrations) {
        database.exec(migration.sql)
      }
    }

    function registerField<K extends keyof FieldTypeMap>(field: Field<K>) {
      fields[field.type] = {
        component: field.component,
        handler: field.handler,
      }
    }

    if (plugin.fields?.length) {
      for (const field of plugin.fields) {
        registerField(field as Field<keyof FieldTypeMap>)
      }
    }

    if (plugin.public) {
      for (const publicFile of plugin.public) {
        app.use(
          publicFile.filename,
          serveStatic({ path: path.join(publicFile.root, publicFile.filename) }),
        )

        const { ext } = path.parse(publicFile.filename)

        if (ext === '.js') {
          publicFiles += `<script type="module" src="/studio/${publicFile.filename}"></script>`
        }

        if (ext === '.css') {
          publicFiles += `<link rel="stylesheet" href="/studio/${publicFile.filename}" />`
        }
      }
    }
  }

  app.use('*', async (c, next) => {
    c.set('config', config)
    c.set('widgets', widgets)
    c.set('publicFiles', publicFiles)
    await next()
  })

  app.route('/', authRouter)
  app.route('/', databaseRouter)

  /**
   * CQRS route
   */
  app.get('/updates', (c) => {
    return streamSSE(c, async (stream) => {
      const user = c.get('user')

      if (!user) {
        console.log(`[updates] no user`)
        return
      }

      let { promise, resolve } = Promise.withResolvers()

      connections.set(user.id, { stream, user })
      console.log(`[updates] ${user.email} connected`)

      stream.onAbort(() => {
        resolve(true)
        connections.delete(user.id)
      })

      await promise
    })
  })

  for (const plugin of plugins) {
    if (plugin.app) {
      app.route('/', plugin.app)
    }
  }

  const pluginViews = plugins.map((plugin) => plugin.views || []).flat()

  for (const route of [...routes, ...pluginViews]) {
    app.get(route.path, (c) => {
      return c.html(WidgetsLayout(c, route.handler(c)))
    })
  }

  app.route('/', api)
  app.route('/', databaseRouter)
  app.route('/', workspaceRouter)

  startupLog()

  app.get('*', (c) => c.html(SharedLayout(c, ErrorPage())))

  return app
}

export { createStudio, version, config, database, studioRoot }

export type { AuthType }
