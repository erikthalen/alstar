import { html } from 'hono/html'
import SVGOutput from '../utils/SVGOutput.ts'
import { getEntry, getField } from '../../helpers/sql/index.ts'

export default (props: { id: number }) => {
  const data = getField({ id: props.id })

  if (!data) return html`<p>No block</p>`

  const entry = getEntry({ id: props.id })

  const signals = {
    id: data.id,
    value: data.value || '',
    patchElements: [
      { name: 'fields/SVG', props: { id: props.id } },
      { name: 'EntryHeader', props: entry?.id },
      { name: 'utils/SVGOutput', props: data.id },
      { name: 'LivePreview', props: { entryId: entry?.id } },
    ],
  }

  return html`
    <div>
      ${SVGOutput(data.id)}

      <vscode-textfield
        id="id_${data.id}"
        placeholder="<svg> ..."
        data-signals:${data.id}="${JSON.stringify(signals)}"
        data-on:input="@patch('/studio/api/block/${data.id}', {
        filterSignals: { include: '/${data.id}/' }
      })"
        data-bind:${data.id}.value
        name="value"
      >
      </vscode-textfield>
    </div>
  `
}
