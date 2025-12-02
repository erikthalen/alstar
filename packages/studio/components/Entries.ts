import { html } from 'hono/html'
import { query, config } from '../index.ts'

export default ({ page = 1, name }: { page: number; name: string }) => {
  const entries = query.blocks({ parent_id: null, status: 'enabled', name })
  const structure = config.structure[name]

  const signals = {
    type: structure.type,
    name: name,
    label: structure.label,
    patchElements: [{ name: 'Entries', props: { name } }],
  }

  const PAGE_SIZE = 30

  const paginatedEntries = entries.slice(
    (page - 1) * PAGE_SIZE,
    (page - 1) * PAGE_SIZE + PAGE_SIZE,
  )

  const pages = Math.ceil(entries.length / PAGE_SIZE)

  return html`
    <section id="entries" class="entries">
      <quiet-button
        data-signals:new-entry="${JSON.stringify(signals)}"
        data-on:click="@post('/studio/api/block', { filterSignals: { include: 'newEntry' } })"
        size="xs"
        variant="primary"
      >
        New ${name}
      </quiet-button>

      <vscode-single-select id="combobox-example" combobox>
        <vscode-option>Afghanistan</vscode-option>
        <vscode-option>Albania</vscode-option>
      </vscode-single-select>

      <vscode-table zebra bordered-columns resizable>
        <vscode-table-header slot="header">
          <vscode-table-header-cell>Title</vscode-table-header-cell>
          <vscode-table-header-cell>Slug</vscode-table-header-cell>
        </vscode-table-header>
        <vscode-table-body slot="body">
          ${paginatedEntries?.map((block) => {
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

      <div class="pagination">
        <!-- data-on:quiet-before-page-change="console.log(evt.detail.requestedPage); @get('/studio/api/component?name=Entries&props={name:{page}, page:evt.detail.requestedPage}')" -->
        <quiet-pagination
          total-pages="${pages}"
          page="${page}"
          class="ts-xs"
        ></quiet-pagination>
      </div>
    </section>
  `
}
