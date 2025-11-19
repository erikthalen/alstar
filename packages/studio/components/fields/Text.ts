import { getOrCreateRow } from '../../utils/get-or-create-row.ts'
import { html } from '@alstar/studio/html'
import type { FieldDefStructure } from '../../types.ts'

export default (props: {
  entryId: number | string
  parentId: number | string
  name: string
  id?: number
  structure: FieldDefStructure
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

  const signals = {
    id: data.id,
    value: data.value,
    patchElements: [
      { name: 'EntryHeader', props: entryId },
      { name: 'LivePreview', props: { entryId } },
    ],
  }

  return html`
    <form
      class="field-text"
      data-signals:${data.id}="${JSON.stringify(signals)}"
      data-on:input="@patch('/studio/api/block/${data.id}', {
        filterSignals: { include: '/${data.id}/' }
      })"
    >
      <vscode-form-container responsive>
        <vscode-form-group>
          <vscode-label for="block-${data.id}">
            ${structure.label}
          </vscode-label>
          <vscode-textfield
            data-bind:${data.id}.value
            id="block-${data.id}"
            name="value"
          ></vscode-textfield>
          <vscode-form-helper>
            <p class="ts-xs">${structure.description}</p>
          </vscode-form-helper>
        </vscode-form-group>
      </vscode-form-container>
    </form>
  `
}
