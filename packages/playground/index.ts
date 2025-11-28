import { Hono } from 'hono'
import { createStudio } from '@alstar/studio'
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'

import Index from './pages/index.ts'
import { showRoutes } from 'hono/dev'

const app = new Hono()

app.route('/studio', createStudio())

app.use('*', serveStatic({ root: './public' }))

app.get('/', (c) => c.html(Index()))

// showRoutes(app)

serve(app, () => console.log('http://localhost:3000'))
