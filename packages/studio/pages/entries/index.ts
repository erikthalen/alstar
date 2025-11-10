import { html } from '@alstar/studio/html'
import { defineEntry } from '../../utils/define.ts'

import SiteLayout from '../../components/SiteLayout.ts'
import SiteHeader from '../../components/SiteHeader.ts'
import { studioStructure } from '../../index.ts'
import { getOrCreateRow } from '../../utils/get-or-create-row.ts'
import Entries from '../../components/Entries.ts'
import Explorer from '../../components/Explorer.ts'

export default defineEntry((c) => {
  const entries = Object.entries(studioStructure)

  const pageType = c.req.query('name')

  return SiteLayout(
    html`
      ${Explorer(c)}
      <section class="page">
        ${SiteHeader(c)}

        <div class="entries-container">
          ${pageType ? Entries({ name: pageType }) : ''}
        </div>
      </section>
    `
  )
})
