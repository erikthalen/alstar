import { html } from 'hono/html'
import {
  createBlock,
  deleteBlock,
  getFields,
  setBlockOption,
  setBlockStatus,
  setUpdatedAt,
} from '../../helpers/sql/index.ts'
import { getStructureOfField } from '../../utils/get-structure-of-field.ts'
import { defineEventHandler } from '../../event-emitter.ts'
import Render from '../Render.ts'
import type { BlockFieldInstanceType } from '../../helpers/structure/types.ts'
import EntryHeader from '../EntryHeader.ts'
import LivePreviewContent from '../LivePreviewContent.ts'

const Component = ({ id }: { id: number | string }) => {
  const structure = getStructureOfField(id) as BlockFieldInstanceType
  const entries = Object.entries(structure.blocks)
  const rows = getFields({ parent_id: id })

  return html` <div id="field_${id}" class="blocks-field">
    <header>
      <p class="truncate ts-xs">${structure.label}</p>

      <quiet-dropdown placement="bottom-end">
        <quiet-button size="xs" slot="trigger" with-caret>Add</quiet-button>

        <h3>Type</h3>

        ${entries.map(([name, block]) => {
          const createNewBlock = defineEventHandler(
            ({ signals }) => {
              const entry = signals?.entry as { id: string }

              createBlock({
                name: name,
                label: block.label,
                type: block.instanceOf.description as string,
                parent_id: id,
                sort_order: rows.length,
              })

              setUpdatedAt(entry.id)

              return [
                Component({ id }),
                EntryHeader({ entryId: entry.id }),
                LivePreviewContent({ entryId: entry.id }),
              ]
            },
            { id: name + rows.length, once: true },
          )

          return html`
            <quiet-dropdown-item class="ts-xs" data-on:click=${createNewBlock}>
              ${'icon' in block && block.icon
                ? html` <quiet-icon slot="icon" name=${block.icon}></quiet-icon>`
                : ''}
              ${block.label}
            </quiet-dropdown-item>
          `
        })}
      </quiet-dropdown>
    </header>

    <sortable-list data-id="${id}">
      ${rows.map((row) => {
        const [name, blockStructure] = entries.find(([name]) => name === row.name) || []

        if (!name || !blockStructure) return html`<p>No name</p>`

        const deleteItem = defineEventHandler(
          ({ signals }) => {
            if (!signals) return

            const entry = signals?.entry as { id: string }

            deleteBlock(row.id)
            setUpdatedAt(entry?.id)

            return [
              Component({ id }),
              EntryHeader({ entryId: entry.id }),
              LivePreviewContent({ entryId: entry.id }),
            ]
          },
          { id: row.id },
        )

        const setStatus = defineEventHandler(
          ({ signals }) => {
            if (!signals) return

            const entry = signals?.entry as { id: string }

            setUpdatedAt(entry?.id)
            setBlockStatus(row.id, signals[row.id].status)

            return [EntryHeader({ entryId: entry.id })]
          },
          { id: row.id },
        )

        const setCollapsed = defineEventHandler(
          ({ signals }) => {
            if (!signals) return

            const entry = signals?.entry as { id: string }

            setUpdatedAt(entry?.id)
            setBlockOption(row.id, signals[row.id].options)

            return [EntryHeader({ entryId: entry.id }), Component({ id })]
          },
          { id: row.id },
        )

        return html`
          <article
            data-id="${row.id}"
            data-signals:${row.id}="${JSON.stringify({
              options: JSON.parse(row.options || '{}'),
              status: row.status,
            })}"
          >
            <header>
              <div class="truncate title">
                ${'icon' in blockStructure && blockStructure.icon
                  ? html` <quiet-icon name=${blockStructure.icon}></quiet-icon>`
                  : ''}
                <p class="truncate ts-xs">${blockStructure.label}</p>
              </div>

              <aside>
                <quiet-toggle-icon
                  class="disable-button"
                  label="Disable"
                  effect="scale"
                  id="tooltip-disable-${row.id}"
                  size="xs"
                  data-attr:checked="$${row.id}.status === 'enabled'"
                  data-on:quiet-change="$${row.id}.status = evt.target.checked ? 'enabled' : 'disabled'; ${setStatus}"
                >
                  <quiet-icon slot="unchecked" name="circle" family="filled"></quiet-icon>
                  <quiet-icon slot="checked" name="circle" family="filled"></quiet-icon>
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
                  data-on:quiet-change="$${row.id}.options.collapsed = !!evt.target.checked; ${setCollapsed}"
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
                  data-handle-for="${id}"
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
                  data-on:click=${deleteItem}
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

            <div class="blocks-field-content" data-show="$${row.id}.options?.collapsed !== true">
              ${Render({
                parentId: 'instanceOf' in blockStructure ? row.id : id,
                id: row.id,
                structure: blockStructure,
                name: name,
              })}
            </div>
          </article>
        `
      })}
    </sortable-list>
  </div>`
}

export default Component
