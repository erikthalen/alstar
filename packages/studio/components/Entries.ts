import { html } from '@alstar/studio/html'
import { query } from '../index.ts'

export default ({ name }: { name: string }) => {
  const entries = query.blocks({ parent_id: null, status: 'enabled', name })

  return html`
    <section id="entries" class="entries">
      <vscode-single-select id="combobox-example" combobox>
        <vscode-option>Afghanistan</vscode-option>
        <vscode-option>Albania</vscode-option>
      </vscode-single-select>

      <!-- <quiet-text-field size="xs" name="search" label="Search">
        <quiet-icon slot="start" name="search"></quiet-icon>
      </quiet-text-field> -->

      <vscode-table class="resizable-example" zebra bordered-columns resizable>
        <vscode-table-header slot="header">
          <vscode-table-header-cell>Title</vscode-table-header-cell>
          <vscode-table-header-cell>Slug</vscode-table-header-cell>
        </vscode-table-header>
        <vscode-table-body slot="body">
          ${entries?.map((block) => {
            const title = query.block({
              parent_id: block.id.toString(),
              name: 'title',
            })

            const slug = query.block({
              parent_id: block.id.toString(),
              name: 'slug',
            })

            return html`
              <vscode-table-row>
                <vscode-table-cell>
                  <a href="/studio/entries/${block.id}">
                    <h4 class="ts-xs name">${title?.value || 'Untitled'}</h4>
                  </a>
                </vscode-table-cell>
                <vscode-table-cell>
                  ${slug?.value ? `/${slug?.value}` : ''}
                </vscode-table-cell>
              </vscode-table-row>
            `
          })}
        </vscode-table-body>
      </vscode-table>
    </section>
  `
}
