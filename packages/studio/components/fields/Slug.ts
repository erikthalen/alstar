import { html } from 'hono/html'
import { getEntry, getField, setUpdatedAt, updateBlockValue } from '../../helpers/sql/index.ts'
import EditedBy from '../utils/EditedBy.ts'
import { defineEventHandler } from '../../event-emitter.ts'
import { slugify } from '../../utils/slugify.ts'
import EntryHeader from '../EntryHeader.ts'
import LivePreview from '../LivePreview.ts'
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

  const onAutoSlug = defineEventHandler(() => {
    const entry = getEntry({ id }) as any

    if (!entry) return

    const data = entry?.data

    if (entry && 'title' in data && typeof data.title === 'string') {
      updateBlockValue(id, slugify(data.title))
      setUpdatedAt(entry?.id)
    }

    return [
      Component({ id }),
      EntryHeader({ entryId: entry.id }),
      LivePreviewContent({ entryId: entry.id }),
    ]
  })

  const data = getField({ id })

  if (!data) return html`<p>No block</p>`

  return html`
    <vscode-textfield
      id="id_${id}"
      data-bind:${id}
      data-signals="{ ${id}: '${data.value}' }"
      data-on:input=${onInput}
      data-on:focus=${onFocus}
      data-on:blur=${onBlur}
    >
      ${EditedBy({ id })}

      <quiet-button
        slot="content-after"
        id="generate_slug_field"
        appearance="text"
        icon-label="Reload"
        size="xs"
        data-on:click=${onAutoSlug}
      >
        <quiet-icon name="refresh"></quiet-icon>
      </quiet-button>

      <quiet-tooltip distance="0" without-arrow class="ts-label" for="generate_slug_field">
        Generate slug
      </quiet-tooltip>
    </vscode-textfield>
  `
}

export default Component
