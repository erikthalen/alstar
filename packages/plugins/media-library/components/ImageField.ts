import { html } from 'hono/html'
import DialogContent from './DialogContent.ts'
import { PluginArgs } from '@alstar/types'
// import { getField, setUpdatedAt, updateBlockValue } from '../../helpers/db/sql/index.ts'
// import { defineEventHandler } from '../../event-emitter.ts'
// import MediaLibraryDialogContent from '../media-library/MediaLibraryDialogContent.ts'
// import LivePreviewContent from '../live-preview/LivePreviewContent.ts'

export default (api: PluginArgs) => (id: number | `${number}`) => {
  if (!id) {
    return html`<p>No id provided</p>`
  }

  // const renderDialog = defineEventHandler(() => MediaLibraryDialogContent())

  const data = api.query.getField({ id })

  if (!data) return html`<p>No block</p>`

  return html`
    <vscode-textfield
      placeholder="No image"
      id="id_${id}"
      readonly
      data-signals="{ ${id}: '${data.value}' }"
      data-bind:${id}
    >
      <quiet-button
        slot="content-after"
        appearance="text"
        id="remove_${id}"
        icon-label="Remove"
        size="xs"
        data-on:click="$${id} = ''; @post('/studio/media/update/${id}')"
      >
        <quiet-icon name="x"></quiet-icon>
      </quiet-button>

      <quiet-button
        slot="content-after"
        data-dialog="open dialog__overview"
        appearance="text"
        id="change_${id}"
        icon-label="Change image"
        size="xs"
      >
        <quiet-icon name="photo"></quiet-icon>
      </quiet-button>
    </vscode-textfield>

    <quiet-tooltip distance="0" without-arrow class="text-label" for="remove_${id}">
      Clear
    </quiet-tooltip>

    <quiet-tooltip distance="0" without-arrow class="text-label" for="change_${id}">
      Change
    </quiet-tooltip>

    <quiet-dialog
      id="dialog__overview"
      light-dismiss
      data-on:input="$${id} = evt.detail; @post('/studio/media/update/${id}'); document.getElementById('dialog__overview').open = false"
    >
      ${DialogContent({ api, id })}
    </quiet-dialog>
  `
}
