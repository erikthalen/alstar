import { query } from '../../queries/index.ts'
import type { Field, Block as BlockType, BlocksField } from '../../types.ts'
import { getOrCreateRow } from '../../utils/get-or-create-row.ts'
import { html } from '../../utils/html.ts'
import Block from '../Block.ts'
import * as icons from '../icons.ts'

export default (props: {
  entryId: number
  parentId: number
  name: string
  field: BlocksField
  sortOrder: number
}) => {
  const { entryId, parentId, name, field, sortOrder = 0 } = props

  const data = getOrCreateRow(parentId, name, field, sortOrder)

  if (!data) return html`<p>No block</p>`

  const entries = Object.entries(field.children) as [
    string,
    BlockType | Field,
  ][]
  const rows = query.blocks({ parent_id: data.id })

  return html`
    <div class="blocks-field">
      <header>
        <p>${field.label}</p>

        <details class="dropdown">
          <summary>Add</summary>
          <ul>
            ${entries.map(([name, block]) => {
              return html`
                <li>
                  <form
                    data-on-submit="@post('/admin/api/new-block', { contentType: 'form' })"
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

      <div data-sortable="${data.id}">
        ${rows.map((row, idx) => {
          const [name, struct] = (entries.find(([name]) => name === row.name) ||
            []) as [string, BlockType]

          if (!name) return html``

          return html`
          <article>
              <header>
                ${struct.label}

                <!-- data-tooltip="Move"
                data-placement="top" -->
                <aside>
                  <button
                    data-handle="${data.id}"
                    class="ghost handle text-secondary"
                    style="cursor: grab"
                  >
                    ${icons.bars}
                  </button>

                  <form
                    data-on-submit="@delete('/admin/api/block', { contentType: 'form' })"
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
                    <input type="hidden" name="entry_id" value="${entryId}" />
                  </form>
                </aside>
              </header>

              ${Block({
                entryId,
                parentId: struct.fields ? row.id : data.id,
                blockStructure: struct,
                name: name,
                sortOrder: row.sort_order,
              })}

              <!-- <pre><code>{JSON.stringify(struct, null, 2)} - {row.sort_order}</code></pre> -->
            </article>
          `
        })}
      </div>
    </div>
  `
}
