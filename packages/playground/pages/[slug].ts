import { defineEntry, html, query } from '@alstar/studio'
import SiteLayout from '../components/SiteLayout.ts'

export default defineEntry(c => {
  const slug = c.req.param('slug')
  const entry = query.root({ type: 'slug', value: slug })

  return SiteLayout(html`
    <h1>Hello!</h1>
    <p>${slug}</p>
    <pre><code>${JSON.stringify(entry, null, 2)}</code></pre>
  `)
})
