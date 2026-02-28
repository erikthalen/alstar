import { html } from 'hono/html'
import { getEntry, getField, getFields } from '../../database/sql/index.ts'

export default (props: { id: number | string }) => {
  const data = getField({ id: props.id })

  if (!data) return html`<p>No block</p>`

  const entry = getEntry({ id: props.id })
  const entries = getFields({ parent_id: null })

  return html`
    <vscode-single-select
      id="block-${data.id}"
      combobox
      data-on:input="@patch('/studio/api/block', {
        contentType: 'form',
        headers: {
          render: 'LivePreview',
          props: '${JSON.stringify({ entryId: entry?.id })}'
        }
      })"
    >
      ${entries.map((entry) => {
        const slug = getField({ name: 'slug', parent_id: entry.id })
        const title = getField({ name: 'title', parent_id: entry.id })

        return html`<vscode-option
            ${slug.value === data.value ? 'selected' : ''}
            description="/${slug.value}"
          >
            ${title.value}
          </vscode-option>`
      })}
    </vscode-single-select>
  `
}
