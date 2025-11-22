import { getOrCreateRow } from '../../utils/get-or-create-row.ts'
import { html } from 'hono/html'
import type { ReferenceFieldStructure } from '../../types.ts'
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

  const entries = query.blocks({ name: structure.to })

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
      <vscode-form-container responsive>
        <vscode-form-group>
          <vscode-label for="block-${data.id}">
            ${structure.label}
          </vscode-label>
          <vscode-single-select id="block-${data.id}" combobox>
            ${entries.map((entry) => {
              const slug = query.block({ name: 'slug', parent_id: entry.id })
              const title = query.block({ name: 'title', parent_id: entry.id })

              return html`<vscode-option
                ${slug.value === data.value ? 'selected' : ''}
                description="/${slug.value}"
              >
                ${title.value}
              </vscode-option>`
            })}
          </vscode-single-select>

          <vscode-form-helper>
            <p class="ts-xs">${structure.description}</p>
          </vscode-form-helper>
        </vscode-form-group>
      </vscode-form-container>

      <input type="hidden" name="id" value="${data.id}" />
    </form>
  `
}
