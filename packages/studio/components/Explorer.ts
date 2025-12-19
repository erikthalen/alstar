import { html } from 'hono/html'
import { config } from '../index.ts'
import { getOrCreateRow } from '../utils/get-or-create-row.ts'
import { type Context } from 'hono'
import { CollectionInstance, SingleInstance } from '../helpers/structure/index.ts'
import { defineEventHandler } from '../event-emitter.ts'
import { getUserSettings, updateUserSetting } from '../helpers/sql/index.ts'

export default (c: Context) => {
  const settings = getUserSettings(c.get('user')?.id)

  const entries = Object.entries(config.structure)

  const singles = entries.filter(([_, block]) => block.instanceOf === SingleInstance)
  const collections = entries.filter(([_, block]) => block.instanceOf === CollectionInstance)

  const setExplorerLocked = defineEventHandler(({ user, signals }) => {
    updateUserSetting(user, ['explorer_locked', signals.userSettings.explorer_locked])
  })

  return html`
    <nav
      id="explorer"
      data-signals:user-settings="{ explorer_locked: ${settings?.explorer_locked || 'false'} }"
      data-class:locked="$userSettings.explorer_locked"
      class="${settings?.explorer_locked === 'true' ? 'locked' : ''}"
      data-init="@get('/studio/updates')"
    >
      <header class="ts-label">
        <quiet-toggle-icon
          data-attr:checked="$userSettings.explorer_locked"
          data-on:quiet-change="$userSettings.explorer_locked = evt.target.checked; ${setExplorerLocked}"
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
                    <a href="/studio/entries/${data?.id}" aria-title="Go to ${block.label}"></a>

                    <div slot="icon-leaf" class="icon">
                      <quiet-icon name="${block.icon || 'file'}" variant="outline"></quiet-icon>
                    </div>

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
                    <a href="/studio/entries?name=${name}" aria-title="See all ${block.label}"></a>

                    <div slot="icon-leaf" class="icon">
                      <quiet-icon name="${block.icon || 'files'}" variant="outline"></quiet-icon>
                    </div>

                    ${block.label}
                  </vscode-tree-item>`
                })}
              </vscode-tree-item>`
            : ''}
        </vscode-tree-item>
        <vscode-tree-item>
          <a href="/studio/media-library" aria-title="Go to the Media Library"></a>

          <div slot="icon-leaf" class="icon">
            <quiet-icon name="photo" variant="outline"></quiet-icon>
          </div>

          Media Library
        </vscode-tree-item>
      </vscode-tree>
    </nav>
  `
}
