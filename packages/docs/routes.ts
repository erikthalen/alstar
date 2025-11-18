import { Hono } from 'hono'
import Index from './pages/index.ts'
import DocsPage from './pages/docs-page.ts'
import { type HtmlEscapedString } from '@alstar/studio/html'
import { type HttpBindings } from '@hono/node-server'

type Page<C> = (c?: C) => HtmlEscapedString | Promise<HtmlEscapedString>

const routes = new Hono<{ Bindings: HttpBindings }>()

const routeMap = {
  '/': Index,
  '/getting-started': DocsPage,
  '/content-structure': DocsPage,
  '/frontend': DocsPage,
  '/quick-start': DocsPage,
  '/query': DocsPage,
  '/configuration': DocsPage,
}

for (const route in routeMap) {
  const handler = routeMap[route as keyof typeof routeMap]

  routes.get(route, c => c.html((handler as Page<typeof c>)(c)))
}

export { routes }
