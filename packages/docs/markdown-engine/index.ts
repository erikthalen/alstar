import { Hono } from 'hono'
import { loadDocs, docs, search } from './loader.ts'
import { renderPage } from './render.ts'

const app = new Hono()

await loadDocs()

app.get('/docs/*', (c) => {
  const slug = c.req.path.replace('/docs', '') || '/'
  const doc = docs.get(slug)

  if (!doc) return c.notFound()

  return c.html(renderPage(doc.html))
})

app.get('/search', (c) => {
  const q = c.req.query('q') || ''
  return c.json(search.search(q))
})

export default app
