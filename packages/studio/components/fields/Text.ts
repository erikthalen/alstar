import { html } from 'hono/html'
import EditedBy from '../utils/EditedBy.ts'
import { getField, setUpdatedAt, updateBlockValue } from '../../helpers/db/sql/index.ts'
import { defineEventHandler } from '#event-emitter.ts'
import EntryHeader from '../EntryHeader.ts'
import LivePreviewContent from '../live-preview/LivePreviewContent.ts'

const Component = ({ id }: { id: number | `${number}` }) => {
  const onInput = defineEventHandler(
    ({ signals, patchElements }) => {
      const entryId = signals.entry.id
      const signal = signals[id]

      if (typeof signal === 'string') {
        updateBlockValue(id.toString(), signal)
      }

      setUpdatedAt(entryId)

      patchElements(Component({ id }), { me: false })

      return [EntryHeader({ entryId }), LivePreviewContent({ entryId })]
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
