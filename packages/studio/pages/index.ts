import { html } from '@alstar/studio/html'
import { defineEntry } from '../utils/define.ts'

import { studioStructure } from '../index.ts'
import SiteLayout from '../components/SiteLayout.ts'
import SiteHeader from '../components/SiteHeader.ts'
import Explorer from '../components/Explorer.ts'
import Tabs from '../components/Tabs.ts'

export default defineEntry((c) => {
  return SiteLayout(html`${Explorer(c)}
    <section class="page">
      ${SiteHeader(c)}

      ${Tabs()}
      
      ${!Object.values(studioStructure).length
        ? html`<div class="background-pattern">
            <quiet-empty-state style="min-height: 400px;">
              <quiet-icon slot="illustration" name="file-code-2"></quiet-icon>

              <h3>No structure found</h3>
              <p>The Studio needs to be initialized with a structure</p>

              <quiet-button size="xs" variant="primary">
                Documentation
              </quiet-button>
            </quiet-empty-state>
          </div>`
        : html`<div class="background-pattern">
            <quiet-empty-state style="min-height: 400px;">
              <quiet-icon slot="illustration" name="terminal-2"></quiet-icon>

              <h1>Alstar Studio</h1>

              <quiet-button size="xs" href="/studio/entries" variant="neutral">
                <quiet-icon slot="start" name="files"></quiet-icon>
                Entries
              </quiet-button>
            </quiet-empty-state>
          </div> `}
    </section>`)
})
