import { html } from '@alstar/studio/html'
import { defineEntry } from '../utils/define.ts'

import SiteLayout from '../components/SiteLayout.ts'
import SiteHeader from '../components/SiteHeader.ts'
import Explorer from '../components/Explorer.ts'

export default defineEntry((c) => {
  return SiteLayout(html`${Explorer(c)}
    <section class="page">
      ${SiteHeader(c)}

      <div>
        <input
          type="checkbox"
          data-bind="locked"
          data-on:change="$locked ? document.getElementById('pane').setAttribute('locked', '') : document.getElementById('pane').removeAttribute('locked')"
        />

        <alstar-split-pane fixed="start" id="pane">
          <div style="padding: 2rem" slot="start">
            <p>Start</p>
          </div>
          <div style="padding: 2rem" slot="end">
            <p>End</p>
          </div>
        </alstar-split-pane>
      </div>
    </section>`)
})
