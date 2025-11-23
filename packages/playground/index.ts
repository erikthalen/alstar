import { Hono } from 'hono'
import { createStudio } from '@alstar/studio'
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'

import Index from './pages/index.ts'

const app = new Hono()

const { app: studio } = createStudio()

app.route('/studio', studio)

app.use('*', serveStatic({ root: './public' }))
app.get('/', (c) => c.html(Index()))

serve(app, () => console.log('http://localhost:3000'))
