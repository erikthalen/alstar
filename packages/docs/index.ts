import { Hono } from 'hono'
import { createStudio } from '@alstar/studio'
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import frontpage from './pages/index.ts'

import { showRoutes } from 'hono/dev'
import SiteLayout from './components/SiteLayout.ts'
import SlugPage from './pages/docs/:slug.ts'

const app = new Hono()

app.route('/studio', createStudio({ enableHotReload: true }))

app.use('*', serveStatic({ root: './public' }))

app.get('/', (c) => c.html(SiteLayout(frontpage())))

app.get('/docs/:slug', (c) => {
  const slug = c.req.param('slug')
  return c.html(SiteLayout(SlugPage(slug)))
})

serve(app, () => console.log('http://localhost:3000'))

// showRoutes(app, { verbose: true })
