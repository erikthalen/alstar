import { db } from '@alstar/db'
import { html } from 'hono/html'
import { sql } from '../utils/sql.ts'
import * as icons from './icons.ts'

export default () => {
  const apiKeys = db.database
    .prepare(sql`
      select
        *
      from
        api_keys
    `)
    .all()

  return html`
  <div id="settings" data-signals="{ apiKey: '', copied: false }">
      <!-- <h1>Settings</h1> -->
      <article>
        <header>API Keys</header>

        <ul>
          ${apiKeys.map((apiKey) => {
            return html`<li>
                <p>${apiKey.name}</p>
                <input type="text" disabled value="${apiKey.hint}" />
                <form
                  data-on-submit="@delete('/admin/api/api-key', { contentType: 'form' })"
                >
                  <button
                    data-tooltip="Delete API key"
                    data-placement="left"
                    type="submit"
                    class="ghost"
                  >
                    ${icons.trash}
                  </button>

                  <input type="hidden" name="value" value="${apiKey.value}" />
                </form>
              </li>`
          })}
        </ul>

        <form
          data-on-submit="@post('/admin/api/api-key', { contentType: 'form' })"
        >
          <label for="api_key_name">Generate API Key</label>

          <input
            data-bind="name"
            type="text"
            name="name"
            id="api_key_name"
            placeholder="Name"
          />

          <button type="submit" class="ghost">Generate key</button>
        </form>

        <dialog data-attr="{ open: $apiKey !== '' }">
          <article>
            <header>
              <p>API Key</p>
            </header>
            <p>Be sure to save this key, as it wont be shown again.</p>

            <div style="display: flex; gap: 1rem; align-items: center;">
              <h3 style="margin: 0;">
                <code data-text="$apiKey"></code>
              </h3>

              <button
                style="display: flex; align-items: center;"
                data-attr="{ id: $apiKey }"
                data-on-click="navigator.clipboard.writeText($apiKey); $copied = true"
                class="ghost"
                aria-label="Copy key to clipboard"
              >
                ${icons.clipboard}
                <span style="display: none; margin-left: 0.5rem; color: green;" data-style="{ display: $copied && 'block' }">Copied</span>
              </button>
            </div>

            <footer>
              <button
                class="ghost"
                data-on-click="$apiKey = ''; $copied = false; evt.target.closest('dialog')?.close()"
              >
                Close
              </button>
            </footer>
          </article>
        </dialog>
      </article>
    </div>
  `
}
