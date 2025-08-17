import type { FieldDef } from '../../types.ts'
import { getOrCreateRow } from '../../utils/get-or-create-row.ts'
import { html } from '../../utils/html.ts'

export default (props: {
  entryId: number
  parentId: number
  name: string
  field: FieldDef
  sortOrder: number
}) => {
  const { entryId, parentId, name, field, sortOrder = 0 } = props

  const data = getOrCreateRow(parentId, name, field, sortOrder)

  if (!data) return html`<p>No block</p>`

  return html`
  <form
      data-on-input="@patch('/admin/api/block', { contentType: 'form' })"
    >
      <hgroup>
        <label for="block-${data.id}">${field.label}</label>
        <p><small>${field.description}</small></p>
      </hgroup>
     
      <input
        id="block-${data.id}"
        name="value"
        type="text"
        value="${data.value}"
      />

      <input type="hidden" name="type" value="${field.type}" />
      <input type="hidden" name="id" value="${data.id}" />
      <input type="hidden" name="entryId" value="${entryId}" />
      <input type="hidden" name="parentId" value="${parentId}" />
      <input type="hidden" name="sort_order" value="${sortOrder}" />
      <input type="hidden" name="name" value="${name}" />
    </form>
`
}
