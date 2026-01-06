import { html } from 'hono/html'
import SiteLayout from '../components/SiteLayout.ts'
import SiteHeader from '../components/SiteHeader.ts'
import Explorer from '../components/Explorer.ts'
import { type StudioConfig } from '../types.ts'
import { factory } from '../factory.ts'

export default (config: StudioConfig) =>
  factory.createHandlers((c) =>
    c.html(
      SiteLayout(
        html`${Explorer(c)}
          <section class="page">
            ${SiteHeader(c)}

            <div>
              <input
                type="checkbox"
                data-bind="locked"
                data-on:change="$locked ? document.getElementById('pane').setAttribute('locked', '') : document.getElementById('pane').removeAttribute('locked')"
              />

              <alstar-split-pane fixed="start" id="pane">
                <div style="padding: 2rem; background: grey" slot="start">
                  <p>Start</p>
                </div>
                <div style="padding: 2rem; background: lightgrey; color: black" slot="end">
                  <p>End</p>
                </div>
              </alstar-split-pane>
            </div>
          </section>`,
      ),
    ),
  )
