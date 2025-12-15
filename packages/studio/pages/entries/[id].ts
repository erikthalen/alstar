import { html } from 'hono/html'
import SiteLayout from '../../components/SiteLayout.ts'
import Entry from '../../components/Entry.ts'
import LivePreview from '../../components/LivePreview.ts'
import SiteHeader from '../../components/SiteHeader.ts'
import Explorer from '../../components/Explorer.ts'
import Tabs from '../../components/Tabs.ts'
import { type StudioConfig } from '../../types.ts'
import { factory } from '../../factory.ts'

export default (config: StudioConfig) =>
  factory.createHandlers((c) => {
    const id = c.req.param('id')
    const user = c.get('user')

    if (!id) {
      return c.html(html`<p>Entry page url needs an ID param: "${id}"</p>`)
    }

    return c.html(
      SiteLayout(html`
        ${Explorer(c)}

        <section class="page">
          ${SiteHeader(c)} ${Tabs()}

          <div class="entry-page">
            <vscode-split-layout id="split_pane" fixed-pane="start" initial-handle-position="50%">
              <div slot="start">${Entry({ entryId: id })}</div>
              <div slot="end">${LivePreview({ userId: user?.id, entryId: id })}</div>
            </vscode-split-layout>
          </div>
        </section>
      `),
    )
  })
