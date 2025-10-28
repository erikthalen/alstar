import { query } from '../queries/index.ts'
import type { BlocksFieldDef, BlocksFieldDefStructure } from '../types.ts'
import { BlockInstance } from '../utils/define.ts'
import { getOrCreateRow } from '../utils/get-or-create-row.ts'
import { html } from '../utils/html.ts'
import * as icons from './icons.ts'
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

        <details class="dropdown">
          <summary>Add</summary>
          <ul>
            ${entries.map(([name, block]) => {
              return html`
                <li>
                  <form
                    data-on:submit="@post('/studio/api/block', {
                      contentType: 'form',
                      headers: {
                        render: 'Entry LivePreview',
                        props: '${JSON.stringify({ entryId: entryId })}'
                      }
                    })"
                  >
                    <button type="submit" class="ghost">${block.label}</button>
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
                </li>
                `
            })}
          </ul>
        </details>
      </header>

      <sortable-list data-id="${data.id}">
        ${rows.map((row) => {
          const [name, struct] =
            entries.find(([name]) => name === row.name) || []

          if (!name || !struct) return html`<p>No name</p>`

          return html`
            <article data-id="${row.id}" data-signals="{ 'expanded-${row.id}': true }">
              <header>
                ${struct.label}

                <aside>
                  <!-- <label style="margin: 0; border-bottom: none" data-tooltip="Disable" data-placement="top">
                    <input name="enable" type="checkbox" role="switch" checked />
                  </label> -->

                  <button data-on:click="$expanded-${row.id} = !$expanded-${row.id}" class="ghost handle text-secondary" data-tooltip="Collapse" data-placement="top">
                    ${icons.minus}
                  </button>

                  <button
                    data-handle-for="${data.id}"
                    class="ghost handle text-secondary"
                    style="cursor: grab"
                    data-tooltip="Reorder"
                    data-placement="top"
                  >
                    ${icons.bars}
                  </button>

                  <form
                    data-on:submit="@delete('/studio/api/block', {
                      contentType: 'form',
                      headers: {
                        render: 'Entry LivePreview',
                        props: '${JSON.stringify({ entryId: entryId })}'
                      }
                    })"
                  >
                    <button
                      type="submit"
                      class="ghost text-secondary"
                      data-tooltip="Remove"
                      data-placement="top"
                      aria-label="Delete block"
                    >
                      ${icons.x}
                    </button>
                    
                    <input type="hidden" name="id" value="${row.id}" />
                  </form>
                </aside>
              </header>

              <div data-show="$expanded-${row.id}">
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
