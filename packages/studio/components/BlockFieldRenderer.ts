import { query } from '../queries/index.ts'
import type { BlocksFieldDefStructure } from '../types.ts'
import { BlockInstance } from '../utils/define.ts'
import { getOrCreateRow } from '../utils/get-or-create-row.ts'
import { html } from 'hono/html'
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
      <header>
        <p class="truncate ts-xs">${structure.label}</p>

        <quiet-dropdown placement="bottom-end">
          <quiet-button size="xs" slot="trigger" with-caret>Add</quiet-button>

          <h3>Type</h3>

          ${entries.map(([name, block]) => {
            const signals = {
              type: block.type,
              label: block.type,
              name: name,
              parent_id: data.id,
              entry_id: entryId,
              sort_order: rows.length,
              patchElements: [
                { name: 'Entry', props: { entryId } },
                { name: 'LivePreview', props: { entryId } },
              ],
            }

            return html`
              <quiet-dropdown-item
                data-signals:select_${block.type}="${JSON.stringify(signals)}"
                value="${name}"
                class="ts-xs"
                data-on:click="@post('/studio/api/block', {
                  filterSignals: { include: 'select_${block.type}' }
                })"
              >
                ${'icon' in block && block.icon
                  ? html` <quiet-icon
                      slot="icon"
                      name=${block.icon}
                    ></quiet-icon>`
                  : ''}
                ${block.label}
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

          const signals = {
            id: row.id,
            options: JSON.parse(row.options || '{}'),
            status: row.status,
            patchElements: [
              {
                name: 'LivePreview',
                props: { entryId },
              },
            ],
          }

          return html`
            <article
              data-id="${row.id}"
              data-signals:${row.id}="${JSON.stringify(signals)}"
            >
              <header>
                <div class="truncate title">
                  ${'icon' in struct && struct.icon
                    ? html` <quiet-icon name=${struct.icon}></quiet-icon>`
                    : ''}
                  <p class="truncate ts-xs">${struct.label}</p>
                </div>

                <aside>
                  <quiet-toggle-icon
                    class="disable-button"
                    label="Disable"
                    effect="scale"
                    id="tooltip-disable-${row.id}"
                    size="xs"
                    data-attr:checked="$${row.id}.status === 'enabled'"
                    data-on:quiet-change="$${row.id}.status = evt.target.checked ? 'enabled' : 'disabled'; @patch('/studio/api/block/${row.id}', {
                      filterSignals: { include: '/${row.id}/' }
                    })"
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

                  <quiet-tooltip
                    distance="0"
                    without-arrow
                    class="ts-label"
                    for="tooltip-disable-${row.id}"
                  >
                    Disable
                  </quiet-tooltip>

                  <quiet-toggle-icon
                    class="collapse-button"
                    label="Collapse"
                    effect="scale"
                    id="tooltip-collapse-${row.id}"
                    size="xs"
                    data-attr:checked="$${row.id}.options?.collapsed === true"
                    data-on:quiet-change="$${row.id}.options.collapsed = !!evt.target.checked; @patch('/studio/api/block/${row.id}', {
                      filterSignals: { include: '/${row.id}/' }
                    })"
                  >
                    <quiet-icon slot="unchecked" name="eye"></quiet-icon>
                    <quiet-icon slot="checked" name="eye-off"></quiet-icon>
                  </quiet-toggle-icon>

                  <quiet-tooltip
                    distance="0"
                    without-arrow
                    class="ts-label"
                    for="tooltip-collapse-${row.id}"
                    data-text="$${row.id}.options.collapsed ? 'Expand' : 'Collapse'"
                  >
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

                  <quiet-button
                    type="submit"
                    variant="neutral"
                    icon-label="Remove"
                    size="xs"
                    id="tooltip-remove-${row.id}"
                    data-signals:delete_${row.id}="{
                      id: ${row.id},
                      patchElements: [
                        { name: 'Entry', props: { entryId: ${entryId} } },
                        { name: 'LivePreview', props: { entryId: ${entryId} } }
                      ]
                    }"
                    data-on:click="@delete('/studio/api/block/${row.id}', {
                      filterSignals: { include: '/delete_${row.id}/' }
                    })"
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
                </aside>
              </header>

              <div
                class="blocks-field-content"
                data-show="$${row.id}.options?.collapsed !== true"
              >
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
