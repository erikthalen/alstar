import { html } from 'hono/html'
import { getField, getFields } from '../helpers/db/sql/index.ts'
// import { defineEventHandler } from '#event-emitter.ts'

const Component = ({ page = 1, name }: { page?: number; name: string }) => {
  const entries = getFields({ parent_id: null, name })

  const PAGE_SIZE = 30

  const paginatedEntries = entries.slice((page - 1) * PAGE_SIZE, (page - 1) * PAGE_SIZE + PAGE_SIZE)

  const pages = Math.ceil(entries.length / PAGE_SIZE)

  return html`
    <section id="entries" class="entries">
      <vscode-table zebra bordered-rows resizable>
        <vscode-table-header slot="header">
          <vscode-table-header-cell>Title</vscode-table-header-cell>
          <vscode-table-header-cell>Slug</vscode-table-header-cell>
          <vscode-table-header-cell>
            <span style="padding-right: 10px;">Action</span>
          </vscode-table-header-cell>
        </vscode-table-header>
        <vscode-table-body slot="body">
          ${paginatedEntries?.map((block) => {
            const title = getField({ parent_id: block.id, name: 'title' })
            const slug = getField({ parent_id: block.id, name: 'slug' })

            return html`
              <vscode-table-row>
                <vscode-table-cell>
                  <a href="/studio/entries/${block.id}">
                    <h4 class="name">${title?.value || 'Untitled'}</h4>
                  </a>
                </vscode-table-cell>
                <vscode-table-cell>
                  ${slug?.value
                    ? `/${slug?.value}`
                    : html`<span style="color: var(--quiet-text-muted)"> [no slug] </span>`}
                </vscode-table-cell>
                <vscode-table-cell>
                  <div
                    style="display: flex; align-items: center; justify-content: flex-end; gap: 0.25rem;"
                  >
                    <quiet-toggle-icon
                      data-signals="{
                        ${block.id}: {
                          type: 'entry',
                          status: '${block.status}',
                        }
                      }"
                      class="disable-button"
                      label="Disable"
                      effect="scale"
                      id="tooltip-disable-${block.id}"
                      size="xs"
                      data-attr:checked="$${block.id}.status === 'enabled'"
                      data-on:quiet-change="$${block.id}.status = evt.target.checked ? 'enabled' : 'disabled'; @post('/studio/block/status/${block.id}')"
                    >
                      <quiet-icon slot="unchecked" name="circle" family="filled"></quiet-icon>
                      <quiet-icon slot="checked" name="circle" family="filled"></quiet-icon>
                    </quiet-toggle-icon>

                    <quiet-tooltip
                      distance="3"
                      without-arrow
                      class="text-label"
                      for="tooltip-disable-${block.id}"
                      data-text="$${block.id}.status === 'enabled' ? 'Unpublish' : 'Publish'"
                    >
                    </quiet-tooltip>

                    <quiet-button
                      variant="neutral"
                      icon-label="Remove"
                      size="xs"
                      id="tooltip-remove-${block.id}"
                    >
                      <quiet-icon name="trash"></quiet-icon>
                    </quiet-button>

                    <quiet-tooltip
                      distance="0"
                      without-arrow
                      for="tooltip-remove-${block.id}"
                      class="text-label"
                    >
                      Remove
                    </quiet-tooltip>

                    <quiet-popover for="tooltip-remove-${block.id}" placement="bottom">
                      <div style="display: flex; flex-direction: column; gap: 0.25rem;">
                        <quiet-button
                          size="xs"
                          class="text-label"
                          variant="destructive"
                          data-popover="close"
                          data-on:click="@delete('/studio/block/${block.id}')"
                        >
                          Delete
                        </quiet-button>

                        <quiet-button size="xs" data-popover="close"> Cancel </quiet-button>
                      </div>
                    </quiet-popover>
                  </div>
                </vscode-table-cell>
              </vscode-table-row>
            `
          })}
        </vscode-table-body>
      </vscode-table>

      <!-- <div class="pagination"> -->
      <!-- data-on:quiet-before-page-change="console.log(evt.detail.requestedPage); @get('/studio/api/component?name=Entries&props={name:{page}, page:evt.detail.requestedPage}')" -->
      <!-- <quiet-pagination total-pages="${pages}" page="${page}"></quiet-pagination> -->
      <!-- </div> -->
    </section>
  `
}

export default Component
