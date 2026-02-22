import path from 'node:path'
import fsp from 'node:fs/promises'
import { serveStatic } from '@hono/node-server/serve-static'
import { hotReload, hotReloadMiddleware } from './helpers/hot-reload/hot-reload.ts'
import { datastar } from './helpers/hono-datastar/index.ts'

import routes from './routes.ts'
import { api } from './api/index.ts'
import { getConfig } from './utils/get-config.ts'
import startupLog from './utils/startup-log.ts'
import { createAuthServer } from './utils/auth.ts'

import ErrorPage from './pages/error.ts'

import * as types from './types.ts'
import { cors } from 'hono/cors'
import { except } from 'hono/combine'
import { applyMigrations } from './utils/apply-migrations.ts'
import { getDatabase } from './helpers/db/index.ts'
import SiteLayout from '#components/SiteLayout.ts'
import mediaLibrary from '@alstar/media-library'
import type { Field, FieldComponent, FieldHandler, FieldTypeMap, StudioConfig } from '@alstar/types'
import { getField } from '#helpers/db/sql/index.ts'
import { factory } from '@alstar/framework'
import Clock from '@alstar/clock-widget'
import Explorer from '#plugins/Explorer.ts'
import markdownField from '@alstar/markdown-field'
import svgField from '@alstar/svg-field'
import textField from '@alstar/text-field'
import { streamSSE } from 'hono/streaming'
import { connections, eventEmitter } from '#event-emitter.ts'

const { version } = JSON.parse(await fsp.readFile('./package.json', 'utf-8'))

const consumerRoot = path.resolve('.')
const studioRoot = import.meta.dirname

const defaultConfig: StudioConfig = {
  siteName: '',
  database: './studio.db',
  uploadBase: './public/media',
  structure: {},
  plugins: [Clock, Explorer, textField, svgField, markdownField, mediaLibrary()],
}

const consumerConfig = await getConfig<types.StudioUserConfig>()

const config = {
  ...defaultConfig,
  ...consumerConfig,
  plugins: [...defaultConfig.plugins, ...(consumerConfig.plugins || [])],
}

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

  /**
   * CQRS route
   */
  app.get('/updates', (c) => {
    return streamSSE(c, async (stream) => {
      const user = c.get('user')

      if (!user) return

      let { promise, resolve } = Promise.withResolvers()

      connections.set(user.id, { stream, user })

      stream.onAbort(() => {
        resolve(true)
        connections.delete(user.id)
      })

      await promise
    })
  })

  let plugins = []
  let widgets = []
  let publicFiles = ''

  /**
   * Initialise plugins
   */
  for (const pluginFactory of config.plugins) {
    const plugin = pluginFactory({
      database,
      config: config,
      eventEmitter: eventEmitter,
      query: {
        getField,
      },
    })

    plugins.push(plugin)

    if (typeof plugin.widget === 'function') {
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

    if (plugin.app) {
      app.route('/', plugin.app)
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

  for (const plugin of plugins) {
    if (plugin.views?.length) {
      for (const route of plugin.views) {
        app.get(route.path, (c) => c.html(SiteLayout(c, publicFiles, widgets, route.handler(c))))
      }
    }
  }

  /**
   * Studio pages
   */
  for (const route of routes) {
    app.get(route.name, (c) => c.html(SiteLayout(c, publicFiles, widgets, route.handler(c))))
  }

  app.route('/', api)

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

  app.get('*', (c) => c.html(SiteLayout(c, publicFiles, widgets, ErrorPage())))

  return app
}

export { createStudio, version, config, database, studioRoot }

export type { AuthType }

export * from './utils/define.ts'
