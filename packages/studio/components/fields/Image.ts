import { html } from 'hono/html'
import { query } from '../../queries/index.ts'

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
      { name: 'fields/Image', props: { id: entry?.id } },
      { name: 'EntryHeader', props: entry?.id },
      { name: 'LivePreview', props: { entryId: entry?.id } },
    ],
  }

  return html`
    <vscode-textfield
      placeholder="No image"
      data-bind:${data.id}.value
      id="block-${data.id}"
      name="value"
      readonly
      data-signals:${data.id}="${JSON.stringify(signals)}"
      data-on:input="@patch('/studio/api/block/${data.id}', {
        filterSignals: { include: '/${data.id}/' }
      })"
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
