import { html } from 'hono/html'
import { query } from '../queries/index.ts'

export default (entryId: string | number) => {
  const data = query.root({ id: entryId?.toString() })

  if (!data) return ''

  return html`
    <header id="entry_header_${entryId}" class="entry-header">
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
          data-signals:${entryId}="{ status: '${data.status}' }"
          class="disable-button"
          label="Disable"
          effect="scale"
          id="tooltip-disable-${entryId}"
          size="xs"
          data-attr:checked="$${entryId}.status === 'enabled'"
          data-on:quiet-change="$${entryId}.status = evt.target.checked ? 'enabled' : 'disabled'; @patch('/studio/api/block/${entryId}', {
            filterSignals: { include: '/${entryId}/' }
          })"
        >
          <quiet-icon
            slot="unchecked"
            name="circle"
            family="filled"
          ></quiet-icon>

          <quiet-icon slot="checked" name="circle" family="filled"></quiet-icon>
        </quiet-toggle-icon>

        <quiet-tooltip
          distance="2"
          without-arrow
          class="ts-label"
          for="tooltip-disable-${entryId}"
          data-text="$${entryId}.status === 'enabled' ? 'Unpublish' : 'Publish'"
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
              class="ts-label"
              variant="destructive"
              data-popover="close"
              data-on:click="@delete('/studio/api/block/${entryId}'); window.history.back()"
            >
              Delete
            </quiet-button>
            <quiet-button size="xs" data-popover="close">Cancel</quiet-button>
          </div>
        </quiet-popover>

        <quiet-tooltip
          distance="0"
          without-arrow
          for="tooltip-remove-${entryId}"
          class="ts-label"
        >
          Remove
        </quiet-tooltip>
      </aside>
    </header>
  `
}
