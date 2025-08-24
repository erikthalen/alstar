import { defineEntry, html, query } from '@alstar/studio'
import SiteLayout from '../components/SiteLayout.ts'
import { marked } from 'marked'
import { raw } from '@alstar/studio/utils/html.ts'

export default defineEntry(async c => {
  const page = query.root({ type: 'slug', value: c.req.param('slug') })

  if (!page) return html`<p>404 - not found</p>`

  const value = page?.fields?.markdown.value
  const output = value ? raw(marked.parse(value)) : ''

  return SiteLayout(output)
})
