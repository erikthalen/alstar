import { Hono } from 'hono'
import { createStudio } from '@alstar/studio'
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'

import { routes } from './routes.ts'
import { showRoutes } from 'hono/dev'

const app = new Hono()

app.route('/studio', createStudio({ enableHotReload: true }))

app.use('*', serveStatic({ root: './public' }))

app.route('/', routes)

serve(app, () => console.log('http://localhost:3000'))

// showRoutes(app, { verbose: true })
