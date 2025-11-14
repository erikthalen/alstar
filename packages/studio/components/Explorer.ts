import { html } from 'hono/html'
import { studioConfig, studioStructure } from '../index.ts'
import { getOrCreateRow } from '../utils/get-or-create-row.ts'
import { type Context } from 'hono'
import { db } from '@alstar/db'
import { sql } from '../utils/sql.ts'

function getSettings(c: Context) {
  const user = c.get('user')

  const settingRows = user
    ? db.database
        .prepare(sql`select type, value from setting where user_id = ?`)
        .all(user.id)
    : []

  const settings = settingRows.reduce(
    (acc, row) => ({ ...acc, [row.type as string]: row.value }),
    {}
  )

  return settings
}

export default (c: Context) => {
  const settings = getSettings(c)

  const entries = Object.entries(studioStructure)

  const singles = entries.filter(([_, block]) => block.type === 'single')
  const collections = entries.filter(
    ([_, block]) => block.type === 'collection'
  )

  return html`
    <nav
      id="explorer"
      class="${settings.explorer_locked === 'true' ? 'locked' : ''}"
    >
      <header class="ts-label">
        <form
          data-on:change="setTimeout(() => @post('/studio/api/user-settings', { contentType: 'form' }))"
        >
          <input type="hidden" name="type" value="explorer_locked" />

          <quiet-toggle-icon
            id="lock_explorer_button"
            name="value"
            value="true"
            label="Open explorer settings"
            effect="scale"
            size="xs"
            ${settings.explorer_locked === 'true' ? 'checked' : ''}
            style="--unchecked-color: var(--quiet-text-body); --checked-color: var(--quiet-text-body);"
          >
            <quiet-icon slot="unchecked" name="lock-open"></quiet-icon>
            <quiet-icon slot="checked" name="lock"></quiet-icon>
          </quiet-toggle-icon>
        </form>

        <quiet-tooltip
          open-delay="0"
          close-delay="0"
          distance="0"
          without-arrow
          for="lock_explorer_button"
        >
          Keep explorer open
        </quiet-tooltip>

        <!-- <form
          style="display: contents;"
          data-on:change="@post('/studio/api/user-settings', { contentType: 'form' })"
        >
          <alstar-toggle-icon
            name="locked"
            value="true"
            ${settings.explorer_locked === 'true' ? 'checked' : ''}
          ></alstar-toggle-icon>

          <input type="hidden" name="type" value="explorer_locked" />
        </form> -->

        <h1 class="ts-label ts-bold">${studioConfig.siteName}</h1>
      </header>

      <vscode-tree hide-arrows>
        <vscode-tree-item open>
          <wa-icon name="folder" variant="regular" slot="icon-branch"></wa-icon>
          <wa-icon
            name="folder-open"
            variant="regular"
            slot="icon-branch-opened"
          ></wa-icon>

          Entries
          <vscode-tree-item open>
            <wa-icon
              name="folder"
              variant="regular"
              slot="icon-branch"
            ></wa-icon>
            <wa-icon
              name="folder-open"
              variant="regular"
              slot="icon-branch-opened"
            ></wa-icon>
            Singles
            ${singles.map(([name, block]) => {
              const data = getOrCreateRow({
                parentId: null,
                name,
                field: block,
              })

              return html`<vscode-tree-item>
                <a
                  href="/studio/entries/${data.id}"
                  aria-title="Go to ${block.label}"
                ></a>

                ${block.icon
                  ? html`<wa-icon
                      slot="icon-leaf"
                      name="${block.icon}"
                      variant="regular"
                    ></wa-icon> `
                  : ''}
                ${block.label}
              </vscode-tree-item>`
            })}
          </vscode-tree-item>

          <vscode-tree-item open>
            <wa-icon
              name="folder"
              variant="regular"
              slot="icon-branch"
            ></wa-icon>
            <wa-icon
              name="folder-open"
              variant="regular"
              slot="icon-branch-opened"
            ></wa-icon>

            Collections
            ${collections.map(([name, block]) => {
              return html`<vscode-tree-item>
                <a
                  href="/studio/entries?name=${name}"
                  aria-title="See all ${block.label}"
                ></a>

                ${block.icon
                  ? html`<wa-icon
                      slot="icon-leaf"
                      name="${block.icon}"
                      variant="regular"
                    ></wa-icon> `
                  : ''}
                ${block.label}
              </vscode-tree-item>`
            })}
          </vscode-tree-item>
        </vscode-tree-item>
      </vscode-tree>
    </nav>
  `
}
