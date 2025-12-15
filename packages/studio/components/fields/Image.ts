import { html } from 'hono/html'
import { getField, setUpdatedAt, updateBlockValue } from '../../helpers/sql/index.ts'
import { defineEventHandler } from '../../event-emitter.ts'
import EntryHeader from '../EntryHeader.ts'
import EditedBy from '../utils/EditedBy.ts'
import MediaLibraryDialogContent from '../MediaLibraryDialogContent.ts'
import LivePreviewContent from '../LivePreviewContent.ts'

const Component = ({ id }: { id: number | string }) => {
  if (!id) {
    return html`<p>No id provided</p>`
  }

  const onInput = defineEventHandler(({ signals, patchElements }) => {
    const entry = signals?.entry as { id: string }

    updateBlockValue(id.toString(), signals?.[id] as string)
    setUpdatedAt(entry?.id)

    patchElements(Component({ id }))

    return [EntryHeader({ entryId: entry.id }), LivePreviewContent({ entryId: entry.id })]
  })

  const onFocus = defineEventHandler(({ user }) => EditedBy({ id, userId: user?.id }))
  const onBlur = defineEventHandler(() => EditedBy({ id }))

  const renderDialog = defineEventHandler(() => MediaLibraryDialogContent())

  const data = getField({ id })

  if (!data) return html`<p>No block</p>`

  return html`
    <vscode-textfield
      placeholder="No image"
      data-bind:${id}
      id="id_${id}"
      readonly
      data-signals="{ ${id}: '${data.value}' }"
      data-on:input=${onInput}
      data-on:focus=${onFocus}
      data-on:blur=${onBlur}
    >
      <quiet-button
        slot="content-after"
        data-on:click="$${id} = ''; ${onInput}"
        appearance="text"
        id="remove_${id}"
        icon-label="Remove"
        size="xs"
      >
        <quiet-icon name="x"></quiet-icon>
      </quiet-button>

      <quiet-button
        slot="content-after"
        data-dialog="open dialog__overview"
        data-on:click=${renderDialog}
        appearance="text"
        id="change_${id}"
        icon-label="Change image"
        size="xs"
      >
        <quiet-icon name="photo"></quiet-icon>
      </quiet-button>
    </vscode-textfield>

    <quiet-tooltip distance="0" without-arrow class="ts-label" for="remove_${id}">
      Clear
    </quiet-tooltip>

    <quiet-tooltip distance="0" without-arrow class="ts-label" for="change_${id}">
      Change
    </quiet-tooltip>

    <quiet-dialog
      id="dialog__overview"
      light-dismiss
      data-on:input="$${id} = evt.detail; ${onInput}; document.getElementById('dialog__overview').open = false"
    >
      <div id="media_library_dialog_content"></div>
    </quiet-dialog>
  `
}

export default Component
