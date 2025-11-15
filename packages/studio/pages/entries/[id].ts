import { html } from '@alstar/studio/html'
import { defineEntry } from '../../utils/define.ts'

import SiteLayout from '../../components/SiteLayout.ts'
import Entry from '../../components/Entry.ts'
import LivePreview from '../../components/LivePreview.ts'
import SiteHeader from '../../components/SiteHeader.ts'
import Explorer from '../../components/Explorer.ts'
import Tabs from '../../components/Tabs.ts'

export default defineEntry((c) => {
  const id = c.req.param('id')

  if (!id) {
    return html`<p>Entry page url needs an ID param: "${id}"</p>`
  }

  return SiteLayout(
    html`
      ${Explorer(c)}

      <section class="page">
        ${SiteHeader(c)}

        ${Tabs()}

        <div class="entry-page">
          <vscode-split-layout
            id="split_pane"
            fixed-pane="start"
            initial-handle-position="50%"
          >
            <div slot="start">${Entry({ entryId: id })}</div>
            <div slot="end">${LivePreview({ entryId: id })}</div>
          </vscode-split-layout>
        </div>
      </section>
    `
  )
})
