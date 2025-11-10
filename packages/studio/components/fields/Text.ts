import { getOrCreateRow } from '../../utils/get-or-create-row.ts'
import { html } from '@alstar/studio/html'
import type { FieldDefStructure } from '../../types.ts'

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
      ${structure.presentation === 'svg'
        ? html`<quiet-text-area
            class="text-wrap-pre"
            label="${structure.label}"
            value="${data.value}"
            resize="auto"
            rows="4"
            size="xs"
          >
            ${structure.description
              ? html`<span slot="description"> ${structure.description} </span>`
              : ''}</quiet-text-area
          >`
        : html`<quiet-text-field
            id="block-${data.id}"
            name="value"
            label="${structure.label}"
            value="${data.value}"
            size="xs"
          >
            ${structure.description
              ? html`<span slot="description"> ${structure.description} </span>`
              : ''}
          </quiet-text-field>`}

      <input type="hidden" name="type" value="${structure.type}" />
      <input type="hidden" name="id" value="${data.id}" />
      <input type="hidden" name="entryId" value="${entryId}" />
      <input type="hidden" name="parentId" value="${parentId}" />
      <input type="hidden" name="name" value="${name}" />
    </form>
  `
}
