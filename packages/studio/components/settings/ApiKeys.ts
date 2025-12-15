import { html } from 'hono/html'
import * as icons from '../icons.ts'
import { sql } from '../../utils/sql.ts'
import { database } from '../../index.ts'

export default () => {
  const apiKeys = database
    .prepare(
      sql`
      select
        *
      from
        api_keys
    `,
    )
    .all()

  return html`
    <article id="api_keys" data-signals="{ apiKey: '', copied: false }">
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Value</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          ${apiKeys.map((apiKey, idx) => {
            return html` <tr>
              <th scope="row">${apiKey.name}</th>
              <td>
                <quiet-text-field disabled value="${apiKey.hint}"></quiet-text-field>
              </td>
              <td>
                <form
                  data-on:submit="@delete('/studio/api/api-key', {
                    contentType: 'form',
                    headers: {
                      render: 'Settings'
                    }
                  })"
                >
                  <quiet-button
                    id="api_key_delete_${idx}"
                    type="submit"
                    icon-label="Delete"
                    variant="destructive"
                  >
                    <quiet-icon name="trash"></quiet-icon>
                  </quiet-button>

                  <quiet-tooltip for="api_key_delete_${idx}"> Delete API key </quiet-tooltip>

                  <input type="hidden" name="value" value="${apiKey.value}" />
                </form>
              </td>
            </tr>`
          })}
        </tbody>
      </table>

      <quiet-divider>
        <span slot="symbol" style="font-size: .875rem;">New</span>
      </quiet-divider>

      <quiet-card style="max-width: 340px;">
        <form
          data-on:submit="@post('/studio/api/api-key', {
            contentType: 'form',
            headers: {
              render: 'Settings'
            }
          })"
        >
          <!-- data-bind="name" -->
          <quiet-text-field name="name" label="Generate API Key" placeholder="Name">
            <span slot="description"> Enter a name for the API key. </span>
          </quiet-text-field>

          <br />

          <quiet-button style="width: 100%" type="submit" variant="primary">
            Generate key
          </quiet-button>
        </form>
      </quiet-card>

      <quiet-dialog id="dialog__overview">
        <h3 slot="header" style="font-size: 1.25rem; margin-block: 0;">Dialog</h3>

        <p>
          Curious cats explore every corner of their domain, gracefully leaping from windowsills to
          countertops, always seeking new adventures.
        </p>

        <quiet-button slot="footer" data-dialog="close" variant="primary"> Close </quiet-button>
      </quiet-dialog>

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
              data-on:click="navigator.clipboard.writeText($apiKey); $copied = true"
              class="ghost"
              aria-label="Copy key to clipboard"
            >
              ${icons.clipboard}
              <span
                style="display: none; margin-left: 0.5rem; color: green;"
                data-style="{ display: $copied && 'block' }"
              >
                Copied
              </span>
            </button>
          </div>

          <footer>
            <button
              class="ghost"
              data-on:click="$apiKey = ''; $copied = false; evt.target.closest('dialog')?.close()"
            >
              Close
            </button>
          </footer>
        </article>
      </dialog>
    </article>
  `
}
