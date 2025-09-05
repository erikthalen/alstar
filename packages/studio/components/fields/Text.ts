import { getOrCreateRow } from '../../utils/get-or-create-row.ts'
import { html } from '../../utils/html.ts'
import type { FieldDefStructure } from '../../types.ts'

export default (props: {
  entryId: number
  parentId: number
  name: string
  id?: number
  structure: FieldDefStructure
  sortOrder?: number
}) => {
  const { entryId, parentId, name, structure, sortOrder = 0, id } = props

  const data = getOrCreateRow({ parentId, name, field: structure, sortOrder, id })

  if (!data) return html`<p>No block</p>`

  return html`
  <form
      data-on-input="@patch('/studio/api/block', { contentType: 'form' })"
    >
      <hgroup>
        <label for="block-${data.id}">${structure.label}</label>
        <p><small>${structure.description}</small></p>
      </hgroup>

      <input
        id="block-${data.id}"
        name="value"
        type="text"
        value="${data.value}"
      />

      <input type="hidden" name="type" value="${structure.type}" />
      <input type="hidden" name="id" value="${data.id}" />
      <input type="hidden" name="entryId" value="${entryId}" />
      <input type="hidden" name="parentId" value="${parentId}" />
      <input type="hidden" name="name" value="${name}" />
    </form>
`
}
