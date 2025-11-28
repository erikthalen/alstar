import { query } from '../../queries/index.ts'
import { html } from 'hono/html'

export default (props: { id: number }) => {
  if (!props.id) {
    return html`<p>No id provided</p>`
  }

  const data = query.block({ id: props.id })

  if (!data) return html`<p>No block</p>`

  const entry = query.root({ id: props.id })

  const signals = {
    id: data.id,
    value: data.value,
    patchElements: [
      { name: 'fields/Markdown', props: { id: data.id } },
      { name: 'EntryHeader', props: entry?.id },
      { name: 'LivePreview', props: { entryId: entry?.id } },
    ],
  }

  return html`
    <markdown-editor
      data-signals="${JSON.stringify(signals)}"
      data-content="${data.value?.trim()}"
      data-id="${data.id}"
      data-entry-id="${entry?.id}"
      data-on:input="@patch('/studio/api/block', { filterSignals: { include: /${data.id}/ } })"
    >
      <!-- <textarea id="block-{data.id}" name="value" class="markdown">
          {data.value}
        </textarea
        > -->
    </markdown-editor>
  `
}
