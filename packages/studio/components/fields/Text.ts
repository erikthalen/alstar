import { getOrCreateRow } from '../../utils/get-or-create-row.ts'
import { html } from '../../utils/html.ts'
import type { FieldDefStructure } from '../../types.ts'
import { raw } from 'hono/html'

export default (props: {
  entryId: number | string
  parentId: number | string
  name: string
  id?: number
  structure: FieldDefStructure
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

  const isEntryTitle = entryId === parentId && name === 'title'

  return html`
    <form
      class="field-text"
      data-on:input="@patch('/studio/api/block', {
        contentType: 'form',
        headers: {
          render: '${isEntryTitle ? 'AdminPanel' : ''} LivePreview',
          props: '${JSON.stringify({ entryId: entryId })}'
        }
      })"
    >
      <hgroup>
        <label for="block-${data.id}">${structure.label}</label>
        ${structure.description ?
          html`
            <p><small>${structure.description}</small></p>
          ` : null}
      </hgroup>

      ${structure.presentation === 'svg' ? html`<output>${raw(data.value)}</output>`: ''}

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
