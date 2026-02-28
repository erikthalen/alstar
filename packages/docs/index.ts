import { Hono } from 'hono'
import { createStudio } from '@alstar/studio'
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import frontpage from './pages/index.ts'

import { showRoutes } from 'hono/dev'
import SiteLayout from './components/SiteLayout.ts'

import { loadDocs, docs, search } from './render/loader.ts'
import { docsPage } from './render/render.ts'

await loadDocs()

const app = new Hono()

app.route('/studio', createStudio({ enableHotReload: true }))

app.use('*', serveStatic({ root: './public' }))

app.get('/', (c) => c.html(SiteLayout(frontpage())))

app.get('/docs/*', (c) => {
  const slug = c.req.path.replace('/docs', '') || '/'
  const doc = docs.get(slug)

  if (!doc) return c.notFound()

  return c.html(SiteLayout(docsPage(doc.html)))
})

app.get('/search', (c) => {
  const q = c.req.query('q') || ''
  return c.json(search.search(q))
})

serve(app, () => console.log('http://localhost:3000'))

// showRoutes(app, { verbose: true })
