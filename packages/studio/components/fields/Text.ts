import { html } from 'hono/html'
import EditedBy from '../utils/EditedBy.ts'
import { getField, setUpdatedAt, updateBlockValue } from '../../helpers/sql/index.ts'
import { defineEventHandler } from '@alstar/studio/events'
import EntryHeader from '../EntryHeader.ts'
import LivePreview from '../LivePreview.ts'
import LivePreviewContent from '../LivePreviewContent.ts'

const Component = ({ id }: { id: number | string }) => {
  const onInput = defineEventHandler(
    ({ signals, patchElements }) => {
      const entry = signals?.entry as { id: string }

      updateBlockValue(id.toString(), signals?.[id] as string)
      setUpdatedAt(entry?.id)

      patchElements(Component({ id }), false)

      return [EntryHeader({ entryId: entry.id }), LivePreviewContent({ entryId: entry.id })]
    },
    { dependency: id },
  )

  const onFocus = defineEventHandler(({ user }) => EditedBy({ id, userId: user?.id }), {
    dependency: id,
  })
  const onBlur = defineEventHandler(() => EditedBy({ id }), { dependency: id })

  const data = getField({ id })

  if (!data) return html`<p>No block</p>`

  return html`
    <vscode-textfield
      id="field_${id}"
      data-signals="{ ${id}: '${data.value}' }"
      data-bind:${id}
      data-on:input=${onInput}
      data-on:focus=${onFocus}
      data-on:blur=${onBlur}
    >
      ${EditedBy({ id })}
    </vscode-textfield>
  `
}

export default Component
