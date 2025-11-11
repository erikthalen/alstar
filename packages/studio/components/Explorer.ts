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
    <nav id="explorer">
      <header class="ts-label">
        <quiet-toggle-icon
          data-signals="{ explorer_locked: false }"
          data-on:quiet-change="$explorer_locked = evt.target.checked; @post('/studio/api/user-settings')"
          id="lock_explorer_button"
          slot="trigger"
          label="Open explorer settings"
          effect="scale"
          size="xs"
          ${settings.explorer_locked === 'true' ? 'checked' : ''}
          style="--unchecked-color: var(--quiet-text-body); --checked-color: var(--quiet-text-body);"
        >
          <quiet-icon slot="unchecked" name="lock-open"></quiet-icon>
          <quiet-icon slot="checked" name="lock"></quiet-icon>
        </quiet-toggle-icon>

        <quiet-tooltip
          open-delay="0"
          close-delay="0"
          distance="0"
          without-arrow
          for="lock_explorer_button"
        >
          Keep explorer open
        </quiet-tooltip>

        <form style="display: contents;" data-on:submit="console.log('hehehe')">
          <alstar-toggle-icon
            data-on:change="evt.target.form.requestSubmit()"
            ${settings.explorer_locked === 'true' ? 'checked' : ''}
          ></alstar-toggle-icon>
        </form>

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
