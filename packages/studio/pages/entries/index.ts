import { html } from '@alstar/studio/html'
import { defineEntry } from '../../utils/define.ts'

import SiteLayout from '../../components/SiteLayout.ts'
import SiteHeader from '../../components/SiteHeader.ts'
import Entries from '../../components/Entries.ts'
import Explorer from '../../components/Explorer.ts'
import Tabs from '../../components/Tabs.ts'

export default defineEntry((c) => {
  const pageType = c.req.query('name')

  return SiteLayout(
    html`
      ${Explorer(c)}
      <section class="page">
        ${SiteHeader(c)}

        ${Tabs()}

        <div class="entries-container">
          ${pageType ? Entries({ name: pageType }) : ''}
        </div>
      </section>
    `
  )
})
