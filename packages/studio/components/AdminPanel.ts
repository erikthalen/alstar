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
      <header>
        <h1 class="title">
          <a href="/studio" aria-label="Go to dashboard">
            ${studioConfig.admin?.logo ?? logo}
          </a>
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
              <input type="hidden" name="name" value="${name}" />
              <input type="hidden" name="label" value="${block.label}" />
              <input type="hidden" name="type" value="${block.type}" />

              <quiet-button
                type="submit"
                size="sm"
                id="admin_panel_new_${name}"
                icon-label="New ${name}"
                appearance="text"
              >
                <quiet-icon name="file-plus"></quiet-icon>
              </quiet-button>

              <quiet-tooltip for="admin_panel_new_${name}">
                Create new ${name}
              </quiet-tooltip>

              <p style="user-select: none;"><small>${block.label}</small></p>
            </form>

            ${Entries({ name })}
          `
        })}
      </aside>

      <footer>
        <quiet-button
          href="/studio/settings"
          id="settings_link"
          icon-label="Settings"
          appearance="text"
        >
          <quiet-icon name="settings"></quiet-icon>
        </quiet-button>

        <quiet-tooltip for="settings_link"> Settings </quiet-tooltip>

        <quiet-button
          data-barba-prevent
          href="/"
          id="leave_studio_link"
          icon-label="Leave Studio"
          appearance="text"
        >
          <quiet-icon name="logout-2"></quiet-icon>
        </quiet-button>

        <quiet-tooltip for="leave_studio_link">
          Leave the studio
        </quiet-tooltip>
      </footer>
    </div>
  `
}
