import { html } from 'hono/html'
import SVGOutput from '../utils/SVGOutput.ts'
import { getField, setUpdatedAt, updateBlockValue } from '../../helpers/sql/index.ts'
import { defineEventHandler } from '../../event-emitter.ts'
import EditedBy from '../utils/EditedBy.ts'
import EntryHeader from '../EntryHeader.ts'
import LivePreviewContent from '../LivePreviewContent.ts'

const Component = ({ id }: { id: number | `${number}` }) => {
  const onInput = defineEventHandler(({ signals, patchElements }) => {
    const entryId = signals.entry.id
    const signal = signals[id]

    if (typeof signal === 'string') {
      updateBlockValue(id.toString(), signal)
    }

    setUpdatedAt(entryId)

    patchElements(Component({ id }), { me: false })

    return [EntryHeader({ entryId }), LivePreviewContent({ entryId })]
  })

  const onFocus = defineEventHandler(({ user }) => EditedBy({ id, userId: user?.id }))
  const onBlur = defineEventHandler(() => EditedBy({ id }))

  const data = getField({ id })

  if (!data) return html`<p>No block</p>`

  return html`
    <div>
      ${SVGOutput({ id })}

      <vscode-textfield
        id="id_${id}"
        placeholder="<svg> ..."
        data-signals:${id}="'${data.value}'"
        data-on:input=${onInput}
        data-on:focus=${onFocus}
        data-on:blur=${onBlur}
        data-bind:${id}
      >
      </vscode-textfield>
    </div>
  `
}

export default Component
