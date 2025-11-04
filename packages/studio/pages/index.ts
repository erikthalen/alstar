import { html } from '@alstar/studio/html'
import { defineEntry } from '../utils/define.ts'

import SiteLayout from '../components/SiteLayout.ts'
import { studioStructure } from '../index.ts'

export default defineEntry(() => {
  return SiteLayout(
    !Object.values(studioStructure).length
      ? html`<div style="height: 100%;" class="background-pattern">
          <quiet-empty-state style="min-height: 400px;">
            <quiet-icon slot="illustration" name="file-code-2"></quiet-icon>

            <h3>No structure found</h3>
            <p>The Studio needs to be initialized with a structure</p>

            <quiet-button size="sm" variant="primary">
              Documentation
            </quiet-button>
          </quiet-empty-state>
        </div>`
      : html`<div style="height: 100%;" class="background-pattern">
          <quiet-empty-state style="min-height: 400px;">
            <quiet-icon slot="illustration" name="terminal-2"></quiet-icon>

            <h1>Alstar Studio</h1>
            <!-- <p>Welcome to the Studio.</p> -->
            <!-- <quiet-button variant="primary" pill>Add podcasts</quiet-button> -->
          </quiet-empty-state>
        </div> `
  )
})
