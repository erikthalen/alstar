import { html } from '@alstar/studio/html'
import { query, studioStructure } from '../index.ts'

export default ({ name }: { name: string }) => {
  const entries = query.blocks({ parent_id: null, status: 'enabled', name })
  const structure = studioStructure[name]

  const signals = {
    type: structure.type,
    name: name,
    label: structure.label,
    patchElements: [{ name: 'Entries', props: { name } }],
  }

  return html`
    <section id="entries" class="entries">
      <vscode-single-select id="combobox-example" combobox>
        <vscode-option>Afghanistan</vscode-option>
        <vscode-option>Albania</vscode-option>
      </vscode-single-select>

      <quiet-button
        data-signals:new-entry="${JSON.stringify(signals)}"
        data-on:click="@post('/studio/api/block', { filterSignals: { include: 'newEntry' } })"
        size="xs"
        variant="primary"
      >
        New ${name}
      </quiet-button>

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
                  ${slug?.value
                    ? `/${slug?.value}`
                    : html`<span style="color: var(--quiet-text-muted)">
                        [no slug]
                      </span>`}
                </vscode-table-cell>
              </vscode-table-row>
            `
          })}
        </vscode-table-body>
      </vscode-table>
    </section>
  `
}
