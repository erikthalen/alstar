import { getOrCreateRow } from '../../utils/get-or-create-row.ts'
import { html } from 'hono/html'
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
            placeholder="No image"
            data-bind:${data.id}.value
            id="block-${data.id}"
            name="value"
            readonly
          >
            <quiet-button
              slot="content-after"
              data-on:click="$${data.id}.value = ''; @patch('/studio/api/block/${data.id}', {
                filterSignals: { include: '/${data.id}/' }
              })"
              appearance="text"
              id="remove_${data.id}"
              icon-label="Remove"
              size="xs"
            >
              <quiet-icon name="x"></quiet-icon>
            </quiet-button>

            <quiet-button
              slot="content-after"
              data-dialog="open dialog__overview"
              data-on:click="@get('/studio/api/component?name=MediaLibraryDialogContent')"
              appearance="text"
              id="change_${data.id}"
              icon-label="Change image"
              size="xs"
            >
              <quiet-icon name="photo"></quiet-icon>
            </quiet-button>
          </vscode-textfield>
          <vscode-form-helper>
            <p class="ts-xs">${structure.description}</p>
          </vscode-form-helper>
        </vscode-form-group>
      </vscode-form-container>
    </form>

    <quiet-tooltip
      distance="0"
      without-arrow
      class="ts-label"
      for="remove_${data.id}"
    >
      Clear
    </quiet-tooltip>

    <quiet-tooltip
      distance="0"
      without-arrow
      class="ts-label"
      for="change_${data.id}"
    >
      Change
    </quiet-tooltip>

    <quiet-dialog id="dialog__overview" light-dismiss>
      <div id="media_library_dialog_content"></div>
    </quiet-dialog>
  `
}
