import { html } from 'hono/html'
import { deleteBlock, getEntry, setBlockStatus, setUpdatedAt } from '../helpers/db/sql/index.ts'
import { defineEventHandler } from '../event-emitter.ts'
import LivePreviewContent from './live-preview/LivePreviewContent.ts'

export default ({ entryId }: { entryId: `${number}` | number }) => {
  const data = getEntry({ id: entryId })

  if (!data) return html`<p>No data</p>`

  const handleSetStatus = defineEventHandler(
    ({ signals }) => {
      setBlockStatus(entryId, signals.entry.status)
      setUpdatedAt(entryId)

      return [LivePreviewContent({ entryId })]
    },
    { dependency: entryId },
  )

  const handleDeleteEntry = defineEventHandler(
    () => {
      deleteBlock(entryId)
    },
    { dependency: entryId },
  )

  return html`
    <header id="entry_header_${entryId}" class="entry-header">
      <p>
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
          data-signals:entry="{ status: '${data.status}' }"
          class="disable-button"
          label="Disable"
          effect="scale"
          id="tooltip-disable-${entryId}"
          size="xs"
          data-attr:checked="$entry.status === 'enabled'"
          data-on:quiet-change="$entry.status = evt.target.checked ? 'enabled' : 'disabled'; ${handleSetStatus}"
        >
          <quiet-icon slot="unchecked" name="circle" family="filled"></quiet-icon>

          <quiet-icon slot="checked" name="circle" family="filled"></quiet-icon>
        </quiet-toggle-icon>

        <quiet-tooltip
          distance="2"
          without-arrow
          class="text-label"
          for="tooltip-disable-${entryId}"
          data-text="$entry.status === 'enabled' ? 'Unpublish' : 'Publish'"
        >
        </quiet-tooltip>

        <quiet-button
          variant="neutral"
          icon-label="Remove"
          size="xs"
          id="tooltip-remove-${entryId}"
        >
          <quiet-icon name="trash"></quiet-icon>
        </quiet-button>

        <quiet-popover for="tooltip-remove-${entryId}" placement="bottom">
          <div style="display: flex; flex-direction: column; gap: 0.25rem;">
            <quiet-button
              size="xs"
              class="text-label"
              variant="destructive"
              data-popover="close"
              data-on:click="${handleDeleteEntry}; window.history.back()"
            >
              Delete
            </quiet-button>
            <quiet-button size="xs" data-popover="close">Cancel</quiet-button>
          </div>
        </quiet-popover>

        <quiet-tooltip distance="0" without-arrow for="tooltip-remove-${entryId}" class="text-label">
          Remove
        </quiet-tooltip>
      </aside>
    </header>
  `
}
