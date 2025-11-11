import type { FieldDefStructure } from '../../types.ts'
import { getOrCreateRow } from '../../utils/get-or-create-row.ts'
import { html } from '@alstar/studio/html'

export default (props: {
  entryId: number | string
  parentId: number | string
  name: string
  id?: number
  structure: FieldDefStructure
}) => {
  const { entryId, parentId, name, structure, id } = props

  const data = getOrCreateRow({ parentId, name, field: structure, id })

  if (!data) return html`<p>No block</p>`

  return html`
    <form
      data-on:input="@patch('/studio/api/block', {
        contentType: 'form',
        headers: {
          render: 'LivePreview',
          props: '${JSON.stringify({ entryId: entryId })}'
        }
      })"
    >
      <hgroup>
        <label for="block-${data.id}">${structure.label}</label>
        <p><small>${structure.description}</small></p>
      </hgroup>

      <markdown-editor
        data-content="${data.value?.trim()}"
        data-id="${data.id}"
        data-entry-id="${entryId}"
      >
        <!-- <textarea id="block-{data.id}" name="value" class="markdown">
          {data.value}
        </textarea
        > -->
      </markdown-editor>

      <input type="hidden" name="type" value="${structure.type}" />
      <input type="hidden" name="id" value="${data.id}" />
      <input type="hidden" name="entryId" value="${entryId}" />
      <input type="hidden" name="parentId" value="${parentId}" />
      <input type="hidden" name="name" value="${name}" />
    </form>
  `
}
