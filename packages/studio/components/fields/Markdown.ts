import { getEntry, getField } from '../../helpers/sql/index.ts'
import { query } from '../../queries/index.ts'
import { html } from 'hono/html'

export default (props: { id: number }) => {
  if (!props.id) {
    return html`<p>No id provided</p>`
  }

  const data = getField({ id: props.id })

  if (!data) {
    return html`<p>No block</p>`
  }

  const entry = getEntry({ id: props.id })

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
      id="id_${data.id}"
      class="ts-xs"
      data-id="${data.id}"
      data-signals:${data.id}="${JSON.stringify(signals)}"
      data-on:update="$${data.id}.value = evt.detail; @patch('/studio/api/block/${data.id}', { filterSignals: { include: /${data.id}/ } })"
    >
    </markdown-editor>
  `
}
