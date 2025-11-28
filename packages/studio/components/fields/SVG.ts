import { html } from 'hono/html'
import SVGOutput from '../utils/SVGOutput.ts'
import { query } from '../../queries/index.ts'

export default (props: { id: number }) => {
  const data = query.block({ id: props.id })

  if (!data) return html`<p>No block</p>`

  const entry = query.root({ id: props.id })

  const signals = {
    id: data.id,
    value: data.value,
    patchElements: [
      { name: 'fields/SVG', props: { id: props.id } },
      { name: 'EntryHeader', props: entry?.id },
      { name: 'utils/SVGOutput', props: data.id },
      { name: 'LivePreview', props: { entryId: entry?.id } },
    ],
  }

  return html`
    ${SVGOutput(data.id)}

    <vscode-textfield
      placeholder="<svg> ..."
      data-signals:${data.id}="${JSON.stringify(signals)}"
      data-on:input="@patch('/studio/api/block', {
        filterSignals: { include: '/${data.id}/' }
      })"
      data-bind:${data.id}.value
      id="id_${data.id}"
      name="value"
    ></vscode-textfield>
  `
}
