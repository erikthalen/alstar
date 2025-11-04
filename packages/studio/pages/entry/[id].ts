import { html } from '@alstar/studio/html'
import { defineEntry } from '../../utils/define.ts'

import SiteLayout from '../../components/SiteLayout.ts'
import Entry from '../../components/Entry.ts'
import LivePreview from '../../components/LivePreview.ts'

export default defineEntry((c) => {
  const id = c.req.param('id')

  if (!id) {
    return html`<p>Entry page url needs an ID param: "${id}"</p>`
  }

  return SiteLayout(
    html`<div class="entry-page">
      <quiet-splitter>
        <div slot="start">${Entry({ entryId: id })}</div>
        <div slot="end">${LivePreview({ entryId: id })}</div>
      </quiet-splitter>

      <script type="module">
        window.addEventListener('quiet-resize', e => {
          console.log(e)
        })
      </script>
    </div> `
  )
})
