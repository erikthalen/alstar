import { defineEventHandler } from '../../event-emitter.ts'
import { getField, setUpdatedAt, updateBlockValue } from '../../helpers/sql/index.ts'
import { html } from 'hono/html'
import EntryHeader from '../EntryHeader.ts'
import EditedBy from '../utils/EditedBy.ts'
import LivePreviewContent from '../LivePreviewContent.ts'

const Component = ({ id }: { id: number | string }) => {
  const onInput = defineEventHandler(({ signals, patchElements }) => {
    const entry = signals?.entry as { id: string }

    updateBlockValue(id.toString(), signals?.[id] as string)
    setUpdatedAt(entry?.id)

    patchElements(Component({ id }), false)

    return [EntryHeader({ entryId: entry.id }), LivePreviewContent({ entryId: entry.id })]
  })

  const onFocus = defineEventHandler(({ user }) => EditedBy({ id, userId: user?.id }))
  const onBlur = defineEventHandler(() => EditedBy({ id }))

  if (!id) {
    return html`<p>No id provided</p>`
  }

  const data = getField({ id })

  if (!data) {
    return html`<p>No block</p>`
  }

  return html`
    <markdown-editor
      id="id_${id}"
      class="ts-xs"
      data-value="${data.value}"
      data-signals="{ ${id}: '${data.value}' }"
      data-on:input="$${id} = evt.detail; ${onInput}"
      data-on:focus=${onFocus}
      data-on:blur=${onBlur}
    >
    </markdown-editor>
  `
}

export default Component
