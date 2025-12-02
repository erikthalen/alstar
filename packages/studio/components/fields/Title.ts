import { html } from 'hono/html'
import { slugify } from '../../utils/slugify.ts'
import { query } from '../../queries/index.ts'
import EditedBy from '../utils/EditedBy.ts'

export default (props: { id: number }) => {
  const data = query.block({ id: props.id })

  if (!data) return html`<p>No block</p>`

  const entry = query.root({ id: data.id })

  const signals = {
    id: data.id,
    value: data.value || '',
    patchElements: [
      { name: 'fields/Title', props: { id: data.id } },
      { name: 'EntryHeader', props: entry?.id },
      { name: 'LivePreview', props: { entryId: entry?.id } },
    ],
  }

  return html`
    <vscode-textfield
      data-bind:entry.title.value
      data-signals:${data.id}="${JSON.stringify(signals)}"
      data-signals:entry.title="${JSON.stringify(signals)}"
      data-signals:entry.slug.recommended="'${slugify(signals.value)}'"
      data-on:input="@patch('/studio/api/block-title', {
        filterSignals: { include: '/entry/' }
      })"
      data-on:focus="@post('/studio/cqrs/editing', {
        filterSignals: { include: '/${data.id}/' }
      })"
      data-on:blur="@post('/studio/cqrs/not-editing', {
        filterSignals: { include: '/${data.id}/' }
      })"
      id="id_${data.id}"
      name="value"
    >
      ${EditedBy({ id: data.id })}
    </vscode-textfield>
  `
}
