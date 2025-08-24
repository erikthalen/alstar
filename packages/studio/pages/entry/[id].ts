import { html } from 'hono/html'
import { defineEntry } from '../../utils/define.ts'

import SiteLayout from '../../components/SiteLayout.ts'
import Entry from '../../components/Entry.ts'

export default defineEntry((c) => {
  const id = c.req.param('id')

  if (!id) {
    return html`<p>Entry page url needs an ID param: "${id}"</p>`
  }

  return SiteLayout({
    content: Entry({ entryId: parseInt(id) }),
  })
})
