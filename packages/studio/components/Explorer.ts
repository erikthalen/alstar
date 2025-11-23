import { html } from 'hono/html'
import { config } from '../index.ts'
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
    {},
  )

  return settings
}

export default (c: Context) => {
  const settings = getSettings(c)

  const entries = Object.entries(config.structure)

  const singles = entries.filter(([_, block]) => block.type === 'single')
  const collections = entries.filter(
    ([_, block]) => block.type === 'collection',
  )

  const signals = {
    explorerLocked: settings.explorer_locked === 'true',
  }

  return html`
    <nav
      id="explorer"
      data-signals:usersettings="${JSON.stringify(signals)}"
      data-class:locked="$usersettings.explorerLocked"
      class="${settings.explorer_locked === 'true' ? 'locked' : ''}"
    >
      <header class="ts-label">
        <quiet-toggle-icon
          data-attr:checked="$usersettings.explorerLocked"
          data-on:quiet-change="$usersettings.explorerLocked = evt.target.checked; @post('/studio/api/user-settings', { filterSignals: 'usersettings.' })"
          id="lock_explorer_button"
          label="Open explorer settings"
          effect="scale"
          size="xs"
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

        <h1 class="ts-label ts-bold">${config.siteName}</h1>
      </header>

      <vscode-tree hide-arrows>
        <vscode-tree-item open>
          <div slot="icon-branch" class="icon">
            <quiet-icon name="folder" family="outline"></quiet-icon>
          </div>
          <div slot="icon-branch-opened" class="icon">
            <quiet-icon name="folder-open" family="outline"></quiet-icon>
          </div>

          Entries
          ${singles.length
            ? html`<vscode-tree-item open>
                <div slot="icon-branch" class="icon">
                  <quiet-icon name="folder" family="outline"></quiet-icon>
                </div>
                <div slot="icon-branch-opened" class="icon">
                  <quiet-icon name="folder-open" family="outline"></quiet-icon>
                </div>

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
                      ? html`<div slot="icon-leaf" class="icon">
                          <quiet-icon
                            name="${block.icon}"
                            variant="outline"
                          ></quiet-icon>
                        </div> `
                      : ''}
                    ${block.label}
                  </vscode-tree-item>`
                })}
              </vscode-tree-item>`
            : ''}
          ${collections.length
            ? html`<vscode-tree-item open>
                <div slot="icon-branch" class="icon">
                  <quiet-icon name="folder" family="outline"></quiet-icon>
                </div>
                <div slot="icon-branch-opened" class="icon">
                  <quiet-icon name="folder-open" family="outline"></quiet-icon>
                </div>

                Collections
                ${collections.map(([name, block]) => {
                  return html`<vscode-tree-item>
                    <a
                      href="/studio/entries?name=${name}"
                      aria-title="See all ${block.label}"
                    ></a>

                    ${block.icon
                      ? html`<div slot="icon-leaf" class="icon">
                          <quiet-icon
                            name="${block.icon}"
                            variant="outline"
                          ></quiet-icon>
                        </div>`
                      : ''}
                    ${block.label}
                  </vscode-tree-item>`
                })}
              </vscode-tree-item>`
            : ''}
        </vscode-tree-item>
        <vscode-tree-item>
          <a
            href="/studio/media-library"
            aria-title="Go to the Media Library"
          ></a>

          <div slot="icon-leaf" class="icon">
            <quiet-icon name="photo" variant="outline"></quiet-icon>
          </div>

          Media Library
        </vscode-tree-item>
      </vscode-tree>
    </nav>
  `
}
