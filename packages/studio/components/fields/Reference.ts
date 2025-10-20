import { getOrCreateRow } from '../../utils/get-or-create-row.ts'
import { html } from '../../utils/html.ts'
import type { FieldDefStructure, ReferenceFieldStructure } from '../../types.ts'
import { query } from '../../queries/index.ts'

export default (props: {
  entryId: number | string
  parentId: number | string
  name: string
  id?: number
  structure: ReferenceFieldStructure
  sortOrder?: number
}) => {
  const { entryId, parentId, name, structure, sortOrder = 0, id } = props

  const data = getOrCreateRow({
    parentId,
    name,
    field: structure,
    sortOrder,
    id,
  })

  if (!data) return html`<p>No block</p>`

  const entries = query.blocks({ type: structure.to })

  return html`
    <form
      data-on-input="@patch('/studio/api/block', {
        contentType: 'form',
        headers: {
          render: ''
        }
      })"
    >
      <hgroup>
        <label for="block-${data.id}">${structure.label}</label>
        ${structure.description &&
        html`
          <p><small>${structure.description}</small></p>
        `}
      </hgroup>

      <input
        list="entries-${data.id}"
        id="block-${data.id}"
        name="value"
        value="${data.value}"
      />
      <datalist id="entries-${data.id}">
        ${entries.map((entry) => {
          const slug = query.block({ name: 'slug', parent_id: entry.id })
          const title = query.block({ name: 'title', parent_id: entry.id })

          return html`<option value="${slug.value}">
              ${title.value}
            </option>`
        })}
      </datalist>

      <input type="hidden" name="id" value="${data.id}" />
      
      <!-- <input type="hidden" name="type" value="{structure.type}" />
      <input type="hidden" name="entryId" value="{entryId}" />
      <input type="hidden" name="parentId" value="{parentId}" />
      <input type="hidden" name="name" value="{name}" /> -->
    </form>
`
}
