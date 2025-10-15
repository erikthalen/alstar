import { getOrCreateRow } from '../../utils/get-or-create-row.ts'
import { html } from '../../utils/html.ts'
import type { FieldDefStructure, ReferenceFieldStructure } from '../../types.ts'
import { query } from '../../queries/index.ts'

export default (props: {
  entryId: number
  parentId: number
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

  const entries = query.roots({ type: structure.to }, { depth: 1 })

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
          return html`<option value="${entry.fields.slug.value}">
              ${entry.fields.title.value}
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
