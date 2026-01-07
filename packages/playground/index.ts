import { Hono } from 'hono'
import { createStudio } from '@alstar/studio'
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'

import Index from './pages/index.ts'
import { showRoutes } from 'hono/dev'
import Slug from './pages/[slug].ts'

const app = new Hono()

app.route('/studio', createStudio({ enableHotReload: true }))

app.use('*', serveStatic({ root: './public' }))

app.get('/', (c) => c.html(Index()))
app.get(':slug', (c) => c.html(Slug(c)))

// showRoutes(app)

serve(app, () => console.log('http://localhost:3000'))
