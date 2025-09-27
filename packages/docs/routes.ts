import { Hono } from 'hono'
import Index from './pages/index.ts'
import Page from './pages/page.ts'
import { type HtmlEscapedString } from '@alstar/studio'
import { type HttpBindings } from '@hono/node-server'

type Page<C> = (c?: C) => HtmlEscapedString | Promise<HtmlEscapedString>

const routes = new Hono<{ Bindings: HttpBindings }>()

const map = {
  '/': Index,
  '/getting-started': Page,
  '/content-structure': Page,
  '/frontend': Page,
  '/quick-start': Page,
  '/query': Page,
  '/configuration': Page,
}

Object.entries(map).forEach(([route, handler]) => {
  routes.get(route, c => c.html((handler as Page<typeof c>)(c)))
})

export { routes }
