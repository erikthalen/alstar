import { html } from 'hono/html'
import { deleteBlock, getEntry, setBlockStatus, setUpdatedAt } from '../helpers/sql/index.ts'
import { defineEventHandler } from '../event-emitter.ts'
import type { BlockStatus } from '../types.ts'
import LivePreviewContent from './LivePreviewContent.ts'

export default ({ entryId }: { entryId: string | number }) => {
  const id = entryId.toString()
  const data = getEntry({ id })

  if (!data) return html`<p>No data</p>`

  const handleSetStatus = defineEventHandler(
    ({ signals }) => {
      const data = signals?.[id] as { status: BlockStatus }
      setBlockStatus(id.toString(), data.status)
      setUpdatedAt(id)

      return [LivePreviewContent({ entryId: id })]
    },
    { dependency: id },
  )

  const handleDeleteEntry = defineEventHandler(
    () => {
      deleteBlock(id)
    },
    { dependency: id },
  )

  return html`
    <header id="entry_header_${id}" class="entry-header">
      <p class="ts-xs">
        <span>
          Modified:
          <quiet-relative-time date="${data.updated_at}"></quiet-relative-time>
        </span>

        <span>·</span>

        <span>
          Created:
          <quiet-date
            date-style="medium"
            time-style="medium"
            hour-format="24"
            date="${data.created_at}"
          ></quiet-date>
        </span>
      </p>

      <aside>
        <quiet-toggle-icon
          data-signals:${id}="{ status: '${data.status}' }"
          class="disable-button"
          label="Disable"
          effect="scale"
          id="tooltip-disable-${id}"
          size="xs"
          data-attr:checked="$${id}.status === 'enabled'"
          data-on:quiet-change="$${id}.status = evt.target.checked ? 'enabled' : 'disabled'; ${handleSetStatus}"
        >
          <quiet-icon slot="unchecked" name="circle" family="filled"></quiet-icon>

          <quiet-icon slot="checked" name="circle" family="filled"></quiet-icon>
        </quiet-toggle-icon>

        <quiet-tooltip
          distance="2"
          without-arrow
          class="ts-label"
          for="tooltip-disable-${id}"
          data-text="$${id}.status === 'enabled' ? 'Unpublish' : 'Publish'"
        >
        </quiet-tooltip>

        <quiet-button variant="neutral" icon-label="Remove" size="xs" id="tooltip-remove-${id}">
          <quiet-icon name="trash"></quiet-icon>
        </quiet-button>

        <quiet-popover for="tooltip-remove-${id}" placement="bottom">
          <div style="display: flex; flex-direction: column; gap: 0.25rem;">
            <quiet-button
              size="xs"
              class="ts-label"
              variant="destructive"
              data-popover="close"
              data-on:click="${handleDeleteEntry}; window.history.back()"
            >
              Delete
            </quiet-button>
            <quiet-button size="xs" data-popover="close">Cancel</quiet-button>
          </div>
        </quiet-popover>

        <quiet-tooltip distance="0" without-arrow for="tooltip-remove-${id}" class="ts-label">
          Remove
        </quiet-tooltip>
      </aside>
    </header>
  `
}
