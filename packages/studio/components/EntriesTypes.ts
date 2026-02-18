import { html } from 'hono/html'
import { getOrCreateRow } from '../utils/get-or-create-row.ts'
import { CollectionInstance, SingleInstance, StructureInstanceType } from '@alstar/types/structure.ts'

export default (structure: StructureInstanceType) => {
  const entries = Object.entries(structure)
  const singles = entries.filter(([_, block]) => block.instanceOf === SingleInstance)
  const collections = entries.filter(([_, block]) => block.instanceOf === CollectionInstance)

  return html`
    <div style="display: flex; flex-direction: column; gap: var(--unit)">
      <vscode-table zebra bordered-rows>
        <vscode-table-header slot="header">
          <vscode-table-header-cell>Singles</vscode-table-header-cell>
          <vscode-table-header-cell></vscode-table-header-cell>
        </vscode-table-header>
        <vscode-table-body slot="body">
          ${singles.map(([name, block]) => {
            const data = getOrCreateRow({
              parentId: null,
              name,
              field: block,
            })

            return html`
              <vscode-table-row>
                <vscode-table-cell>
                  <quiet-icon name="${block.icon || 'file'}" variant="outline"></quiet-icon>
                  
                  ${block.label}
                </vscode-table-cell>
                <vscode-table-cell>
                  <a href="/studio/entries/${data?.id}" aria-title="Go to ${block.label}">
                    Go to entry
                  </a>
                </vscode-table-cell>
              </vscode-table-row>
            `
          })}
        </vscode-table-body>
      </vscode-table>
      <vscode-table zebra bordered-rows>
        <vscode-table-header slot="header">
          <vscode-table-header-cell>Collections</vscode-table-header-cell>
          <vscode-table-header-cell></vscode-table-header-cell>
        </vscode-table-header>
        <vscode-table-body slot="body">
          ${collections.map(([name, block]) => {
            return html` <vscode-table-row>
                <vscode-table-cell>
                  <quiet-icon name="${block.icon || 'files'}" variant="outline"></quiet-icon>

                  ${block.label}
                </vscode-table-cell>
                <vscode-table-cell>
                  <a href="/studio/entries?name=${name}" aria-title="See all ${block.label}">
                    See all ${block.label}
                  </a>
                </vscode-table-cell>
              </vscode-table-row>

              <vscode-tree-item> </vscode-tree-item>`
          })}
        </vscode-table-body>
      </vscode-table>
    </div>
  `
}
