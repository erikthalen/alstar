import { html } from 'hono/html'
import { getField, getFields } from '../helpers/sql/index.ts'

export default ({ page = 1, name }: { page: number; name: string }) => {
  const entries = getFields({ parent_id: null, status: 'enabled', name })

  const PAGE_SIZE = 30

  const paginatedEntries = entries.slice(
    (page - 1) * PAGE_SIZE,
    (page - 1) * PAGE_SIZE + PAGE_SIZE,
  )

  const pages = Math.ceil(entries.length / PAGE_SIZE)

  return html`
    <section id="entries" class="entries">
      <vscode-table zebra bordered-rows resizable>
        <vscode-table-header slot="header">
          <vscode-table-header-cell>Check</vscode-table-header-cell>
          <vscode-table-header-cell>Title</vscode-table-header-cell>
          <vscode-table-header-cell>Slug</vscode-table-header-cell>
        </vscode-table-header>
        <vscode-table-body slot="body">
          ${paginatedEntries?.map((block) => {
            const title = getField({
              parent_id: block.id.toString(),
              name: 'title',
            })

            const slug = getField({
              parent_id: block.id.toString(),
              name: 'slug',
            })

            return html`
              <vscode-table-row>
                <vscode-table-cell>
                  <quiet-checkbox size="sm"></quiet-checkbox>
                </vscode-table-cell>
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
