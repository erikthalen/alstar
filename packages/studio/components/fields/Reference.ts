import { html } from 'hono/html'
import { query } from '../../queries/index.ts'

export default (props: { id: number }) => {
  const data = query.block({ id: props.id })

  if (!data) return html`<p>No block</p>`

  const entry = query.root({ id: props.id })
  const entries = query.blocks({ parent_id: null })

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
  `
}
