import { query } from '../queries/index.ts'
import type { BlocksFieldDefStructure } from '../types.ts'
import { BlockInstance } from '../utils/define.ts'
import { getOrCreateRow } from '../utils/get-or-create-row.ts'
import { html } from '@alstar/studio/html'
import Render from './Render.ts'

export default (props: {
  entryId: number | string
  parentId: number | string
  name: string
  structure: BlocksFieldDefStructure
  id?: number
  sortOrder?: number
}) => {
  const { entryId, parentId, name, structure, id, sortOrder = 0 } = props

  const data = getOrCreateRow({
    parentId,
    name,
    field: structure,
    sortOrder,
    id,
  })

  if (!data) return html`<p>No block</p>`

  const entries = Object.entries(structure.blocks)

  const rows = query.blocks({ parent_id: data.id })

  return html`
    <div class="blocks-field">
      <header data-on:click="console.log('hehehe')">
        <p>${structure.label}</p>

        <quiet-dropdown placement="bottom-end" id="dropdown__selected">
          <quiet-button size="sm" slot="trigger" with-caret>Add</quiet-button>

          ${entries.map(([name, block]) => {
            return html`
              <quiet-dropdown-item value="${name}">
                <form
                  data-on:submit="@post('/studio/api/block', {
                    contentType: 'form',
                    headers: {
                      render: 'Entry LivePreview',
                      props: '${JSON.stringify({ entryId: entryId })}'
                    }
                  })"
                >
                  <quiet-button size="sm" type="submit" appearance="text">
                    ${block.label}
                  </quiet-button>

                  <input type="hidden" name="type" value="${block.type}" />
                  <input type="hidden" name="name" value="${name}" />
                  <input type="hidden" name="label" value="${block.label}" />
                  <input type="hidden" name="parent_id" value="${data.id}" />
                  <input type="hidden" name="entry_id" value="${entryId}" />
                  <input
                    type="hidden"
                    name="sort_order"
                    value="${rows.length}"
                  />
                </form>
              </quiet-dropdown-item>
            `
          })}
        </quiet-dropdown>

        <!-- <script>
          const dropdown = document.getElementById('dropdown__selected')

          dropdown.addEventListener('quiet-select', (event) => {
            console.log(event.detail.item.value)
          })
        </script> -->
      </header>

      <sortable-list data-id="${data.id}">
        ${rows.map((row) => {
          const [name, struct] =
            entries.find(([name]) => name === row.name) || []

          if (!name || !struct) return html`<p>No name</p>`

          return html`
            <article
              data-id="${row.id}"
              data-signals="{ 'expanded-${row.id}': true }"
            >
              <header>
                ${struct.label}

                <aside>
                  <!-- <label style="margin: 0; border-bottom: none" data-tooltip="Disable" data-placement="top">
                    <input name="enable" type="checkbox" role="switch" checked />
                  </label> -->

                  <quiet-button
                    data-on:click="$expanded-${row.id} = !$expanded-${row.id}"
                    variant="neutral"
                    toggle="off"
                    icon-label="Expand"
                    size="xs"
                    id="tooltip-expand-${row.id}"
                  >
                    <quiet-icon name="layout-navbar-expand"></quiet-icon>
                  </quiet-button>

                  <quiet-tooltip for="tooltip-expand-${row.id}">
                    Collapse
                  </quiet-tooltip>

                  <quiet-button
                    data-handle-for="${data.id}"
                    style="cursor: grab"
                    variant="neutral"
                    icon-label="Reorder"
                    size="xs"
                    id="tooltip-reorder-${row.id}"
                  >
                    <quiet-icon name="menu"></quiet-icon>
                  </quiet-button>

                  <quiet-tooltip for="tooltip-reorder-${row.id}">
                    Reorder
                  </quiet-tooltip>

                  <form
                    data-on:submit="@delete('/studio/api/block', {
                      contentType: 'form',
                      headers: {
                        render: 'Entry LivePreview',
                        props: '${JSON.stringify({ entryId: entryId })}'
                      }
                    })"
                  >
                    <quiet-button
                      type="submit"
                      variant="neutral"
                      icon-label="Remove"
                      size="xs"
                      id="tooltip-remove-${row.id}"
                    >
                      <quiet-icon name="x"></quiet-icon>
                    </quiet-button>

                    <quiet-tooltip for="tooltip-remove-${row.id}">
                      Remove
                    </quiet-tooltip>

                    <input type="hidden" name="id" value="${row.id}" />
                  </form>
                </aside>
              </header>

              <div class="blocks-field-content" data-show="$expanded-${row.id}">
                ${Render({
                  entryId,
                  parentId:
                    struct.instanceOf === BlockInstance ? row.id : data.id,
                  id: row.id,
                  structure: struct,
                  name: name,
                })}
              </div>
            </article>
          `
        })}
      </sortable-list>
    </div>
  `
}
