import { html } from 'hono/html'
import type { Structure } from '../types.ts'
import { logo } from './icons.ts'
import Entries from './Entries.ts'
import * as icons from './icons.ts'

export default (structure: Structure) => {
  const entries = Object.entries(structure)
  const type = typeof entries[0][1] !== 'string' ? entries[0][1].type : null

  return html`
    <div class="admin-panel">
      <h1>
        <a href="/admin" aria-label="Go to dashboard"> ${logo} </a>
      </h1>

      <aside>
        <form
          data-on-submit="@post('/admin/api/block', { contentType: 'form' })"
        >
          <!-- TODO: currently only handles a single entry type -->
          ${entries.length
            ? html`<input type="hidden" name="name" value="${type}" />
                <button
                  class="ghost"
                  style="padding: 10px; margin: 0 -13px; display: flex;"
                  data-tooltip="New entry"
                  data-placement="right"
                >
                  ${icons.newDocument}
                </button>`
            : ''}
        </form>
      </aside>

      ${Entries()}

      <footer>
        <a
          role="button"
          href="/admin/settings"
          class="ghost"
          style="padding: 10px; margin: 0 -13px; display: flex;"
          data-tooltip="Settings"
          data-placement="right"
        >
          ${icons.cog}
        </a>
      </footer>
    </div>
  `
}
