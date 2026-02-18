import { Hono } from 'hono'
import { createStudio } from '@alstar/studio'
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import frontpage from './pages/index.ts'

import { showRoutes } from 'hono/dev'

const app = new Hono()

app.route('/studio', createStudio({ enableHotReload: true }))

app.use('*', serveStatic({ root: './public' }))

app.get('/', (c) => c.html(frontpage()))

serve(app, () => console.log('http://localhost:3000'))

// showRoutes(app, { verbose: true })
