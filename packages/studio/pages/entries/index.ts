import { html } from 'hono/html'
import SiteLayout from '../../components/SiteLayout.ts'
import SiteHeader from '../../components/SiteHeader.ts'
import Entries from '../../components/Entries.ts'
import Explorer from '../../components/Explorer.ts'
import Tabs from '../../components/Tabs.ts'
import { type StudioConfig } from '../../types.ts'
import { factory } from '../../factory.ts'

export default (config: StudioConfig) =>
  factory.createHandlers((c) => {
    const pageType = c.req.query('name')

    return c.html(
      SiteLayout(
        html`
          ${Explorer(c)}
          <section class="page">
            ${SiteHeader(c)} ${Tabs()}

            <div class="entries-container">
              ${pageType ? Entries({ name: pageType }) : ''}
            </div>
          </section>
        `
      )
    )
  })
