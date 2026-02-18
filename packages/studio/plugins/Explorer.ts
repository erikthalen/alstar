import { CollectionInstance, SingleInstance } from '@alstar/types'
import { config } from '#index.ts'
import { getOrCreateRow } from '#utils/get-or-create-row.ts'
import { css, definePlugin } from '@alstar/framework'
import { html } from 'hono/html'

const widget = () => {
  const entries = Object.entries(config.structure)

  const singles = entries.filter(([_, block]) => block.instanceOf === SingleInstance)
  const collections = entries.filter(([_, block]) => block.instanceOf === CollectionInstance)

  return html`
    <div id="explorer_widget">
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
      </vscode-tree>
    </div>
  `
}

export const styles = css`
  #explorer_widget {
    border: 1px solid #270f0f;
    background-color: #140b0b;

    vscode-tree {
      padding: 0.25rem;
    }

    vscode-tree-item {
      position: relative;

      a {
        position: absolute;
        inset: 0;
      }
    }

    wa-tree-item:not(:has(wa-tree-item)) {
      quiet-icon {
        margin-right: 0.5rem;
      }
    }

    wa-tree-item::part(expand-button) {
      rotate: none;
      height: 1rem;
    }

    wa-tree-item:not(:has(wa-tree-item))::part(item) {
      padding-left: 0.5rem;
    }

    wa-tree-item:not(:has(wa-tree-item))::part(expand-button) {
      display: none;
    }
  }
`

export default definePlugin(() => ({
  widget,
}))
