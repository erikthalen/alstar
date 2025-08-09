import { html } from 'hono/html'
import type { Structure } from '../../types.ts'
import { logo } from '../icons.ts'
import { rootdir } from '../../index.ts'
import Entries from '../Entries.ts'
import * as icons from '../icons.ts'

export default (structure: Structure) => {
  return html`
    <link
      rel="stylesheet"
      href="${rootdir}/components/AdminPanel/AdminPanel.css"
    />

    <div class="admin-panel">
      <h1>
        <a href="/admin" aria-label="Go to dashboard"> ${logo} </a>
      </h1>

      <aside>
        <form
          data-on-submit="@post('/admin/api/block', { contentType: 'form' })"
        >
          <!-- <select name="type">
            ${structure.map(
            (block) => html`
              <option value="${block.type}">
                ${block.label}
              </option>
              `,
          )}
          </select>
          <input type="submit" value="Create" /> -->

          <!-- TODO: currently only handles a single entry type -->
          ${structure.length
            ? html`<input
                  type="hidden"
                  name="type"
                  value="${structure[0].type}"
                />
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
    </div>
  `
}
