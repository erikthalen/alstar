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
        <p class="ts-xs">${structure.label}</p>

        <quiet-dropdown placement="bottom-end" id="dropdown__selected">
          <quiet-button size="xs" slot="trigger" with-caret>Add</quiet-button>

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
                  <quiet-button size="xs" type="submit" appearance="text">
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
                <p class="ts-xs">${struct.label}</p>

                <aside>
                  <form
                    class="contents"
                    data-on:change="setTimeout(() => @patch('/studio/api/disable-block', { contentType: 'form', headers: { render: 'LivePreview', props: '${JSON.stringify({ entryId: entryId })}' } }))"
                  >
                    <input type="hidden" name="id" value="${row.id}" />

                    <quiet-toggle-icon
                      label="Disable"
                      effect="scale"
                      ${row.status === 'enabled' ? 'checked' : ''}
                      style="--unchecked-color: var(--quiet-destructive-text-colorful); --checked-color: var(--quiet-constructive-text-colorful);"
                      id="tooltip-disable-${row.id}"
                      size="xs"
                      name="value"
                      value="enabled"
                    >
                      <quiet-icon
                        slot="unchecked"
                        name="circle"
                        family="filled"
                      ></quiet-icon>

                      <quiet-icon
                        slot="checked"
                        name="circle"
                        family="filled"
                      ></quiet-icon>
                    </quiet-toggle-icon>

                    <wa-tooltip
                      distance="3"
                      without-arrow
                      for="tooltip-disable-${row.id}"
                      class="ts-label"
                    >
                      Disable
                    </wa-tooltip>
                  </form>

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

                  <quiet-tooltip
                    distance="0"
                    without-arrow
                    class="ts-label"
                    for="tooltip-expand-${row.id}"
                  >
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

                  <quiet-tooltip
                    distance="0"
                    without-arrow
                    for="tooltip-reorder-${row.id}"
                    class="ts-label"
                  >
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

                    <quiet-tooltip
                      distance="0"
                      without-arrow
                      for="tooltip-remove-${row.id}"
                      class="ts-label"
                    >
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
