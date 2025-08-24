import type { FieldDefStructure } from '../../types.ts'
import { getOrCreateRow } from '../../utils/get-or-create-row.ts'
import { html } from '../../utils/html.ts'

export default (props: {
  entryId: number
  parentId: number
  name: string
  id?: number
  structure: FieldDefStructure
}) => {
  const { entryId, parentId, name, structure, id } = props

  const data = getOrCreateRow({ parentId, name, field: structure, id })

  if (!data) return html`<p>No block</p>`

  return html`
  <form
      data-on-input="@patch('/admin/api/block', { contentType: 'form' })"
    >
      <hgroup>
        <label for="block-${data.id}">${structure.label}</label>
        <p><small>${structure.description}</small></p>
      </hgroup>

      <markdown-editor
        data-content="${data.value?.trim()}"
        data-id="${data.id}"
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
