import { html } from 'hono/html'
import { logo } from './icons.ts'
import Entries from './Entries.ts'
import * as icons from './icons.ts'
import { studioConfig, studioStructure } from '../index.ts'
import { getOrCreateRow } from '../utils/get-or-create-row.ts'

export default () => {
  const entries = Object.entries(studioStructure)

  return html`
    <div class="admin-panel" id="admin_panel">
      <!-- <button class="ghost toggle-button">
        {icons.bars}
      </button> -->

      <header>
        <h1 class="title">
          <a href="/studio" aria-label="Go to dashboard"> ${studioConfig.admin?.logo ?? logo} </a>
        </h1>
      </header>

      <aside style="width: 100%;">
        ${entries.map(([name, block]) => {
          if (block.type === 'single') {
            const data = getOrCreateRow({ parentId: null, name, field: block })

            return html`
            <section id="entries">
                <ul>
                  <li>
                    <a
                      href="/studio/entry/${data.id}"
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
              data-on:submit="@post('/studio/api/block', {
                contentType: 'form',
                headers: {
                  'render': 'AdminPanel',
                },
              })"
              style="display: flex; align-items: center; gap: 1rem;"
            >
              <input type="hidden" name="return" value="AdminPanel" />

              <input type="hidden" name="name" value="${name}" />
              <input type="hidden" name="label" value="${block.label}" />
              <input type="hidden" name="type" value="${block.type}" />

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
          href="/studio/settings"
          class="ghost"
          style="padding: 10px; margin: 0 -13px; display: flex;"
          data-tooltip="Settings"
          data-placement="right"
          aria-label="Settings"
        >
          ${icons.cog}
        </a>

        <a
          data-barba-prevent
          role="button"
          href="/"
          class="ghost"
          style="padding: 10px; margin: 0 -13px; display: flex;"
          data-tooltip="Leave Studio"
          data-placement="right"
          aria-label="Leave"
        >
          ${icons.leave}
        </a>
      </footer>
    </div>
  `
}
