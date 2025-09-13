import { query } from '../queries/index.ts'
import type { BlocksFieldDefStructure } from '../types.ts'
import { BlockInstance } from '../utils/define.ts'
import { getOrCreateRow } from '../utils/get-or-create-row.ts'
import { html } from '../utils/html.ts'
import * as icons from './icons.ts'
import Render from './Render.ts'

export default (props: {
  entryId: number
  parentId: number
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

  const entries = Object.entries(structure.children)

  const rows = query.blocks({ parent_id: data.id })

  return html`
    <div class="blocks-field">
      <header>
        <p>${structure.label}</p>

        <details class="dropdown">
          <summary>Add</summary>
          <ul>
            ${entries.map(([name, block]) => {
              return html`
                <li>
                  <form
                    data-on-submit="@post('/studio/api/block', {
                      contentType: 'form',
                      headers: {
                        render: 'Entry',
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

      <hr style="margin-top: 0;" />

      <sortable-list data-id="${data.id}">
        ${rows.map((row) => {
          const [name, struct] =
            entries.find(([name]) => name === row.name) || []

          if (!name || !struct) return html`<p>No name</p>`

          return html`
          <article data-id="${row.id}">
              <header>
                ${struct.label}

                <aside>
                  <!-- <label style="margin: 0; border-bottom: none" data-tooltip="Disable" data-placement="top">
                    <input name="enable" type="checkbox" role="switch" checked />
                  </label> -->

                  <button
                    data-handle-for="${data.id}"
                    class="ghost handle text-secondary"
                    style="cursor: grab"
                  >
                    ${icons.bars}
                  </button>

                  <form
                    data-on-submit="@delete('/studio/api/block', {
                      contentType: 'form',
                      headers: {
                        render: 'Entry',
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

              ${Render({
                entryId,
                parentId:
                  struct.instanceOf === BlockInstance ? row.id : data.id,
                id: row.id,
                structure: struct,
                name: name,
              })}
            </article>
          `
        })}
      </sortable-list>
    </div>
  `
}
