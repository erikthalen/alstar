import { html } from 'hono/html'
import { type Context } from 'hono'

import { config } from '#index.ts'

export default (c: Context) => {
  return html` <section class="page">
    ${!Object.values(config.structure).length
      ? html`<div class="background-pattern">
          <quiet-empty-state style="min-height: 400px;">
            <quiet-icon slot="illustration" name="file-code-2"></quiet-icon>

            <h3>No structure found</h3>
            <p>The Studio needs to be initialized with a structure</p>

            <quiet-button size="xs" variant="primary"> Documentation </quiet-button>
          </quiet-empty-state>
        </div>`
      : html`<div class="background-pattern"></div> `}
  </section>`
}
