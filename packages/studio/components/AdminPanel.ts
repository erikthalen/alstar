import { html } from 'hono/html'
import { logo } from './icons.ts'
import Entries from './Entries.ts'
import * as icons from './icons.ts'
import { studioStructure } from '../index.ts'
import { getOrCreateRow } from '../utils/get-or-create-row.ts'

export default () => {
  const entries = Object.entries(studioStructure)

  return html`
    <div class="admin-panel" id="admin_panel">
      <h1>
        <a href="/admin" aria-label="Go to dashboard"> ${logo} </a>
      </h1>

      <aside style="width: 100%;">
        ${entries.map(([name, block]) => {
          if (block.type === 'single') {
            const data = getOrCreateRow({ parentId: null, name, field: block })

            return html`
            <section id="entries">
                <ul>
                  <li>
                    <a
                      href="/admin/entry/${data.id}"
                      id="block_link_${data.id}"
                    >
                      ${block.label}
                    </a>
                  </li>
                </ul>
              </section>
            `
          }

          return html`
          <form
              data-on-submit="@post('/admin/api/block', { contentType: 'form' })"
              style="display: flex; align-items: center; gap: 1rem;"
            >
              <input type="hidden" name="name" value="${name}" />
              <button
                class="ghost"
                style="padding: 10px; margin: 0 -13px; display: flex;"
                data-tooltip="New ${block.label}"
                data-placement="right"
              >
                ${icons.newDocument}
              </button>
              <p style="user-select: none;"><small>${block.label}</small></p>
            </form>

            ${Entries({ name })}
          `
        })}
      </aside>

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
