import { html } from 'hono/html'
import { query } from '../queries/index.ts'

export default (entryId: string | number) => {
  const data = query.root({ id: entryId?.toString() })

  if (!data) return ''

  const parseDate = (date: string) => {
    const english = new Intl.DateTimeFormat('en', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })

    return english.format(new Date(date))
  }

  return html`
    <header id="entry_header_${entryId}" class="entry-header">
      <!-- <h1 class="ts-label">Entry content</h1> -->

      <p class="ts-xs">
        <span>Modified:</span>
        <quiet-relative-time date="${data.updated_at}"></quiet-relative-time>
        <!-- <b>${parseDate(data.updated_at)}</b> -->
        &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;
        <span>Created:</span>
        <quiet-date
          date-style="medium"
          time-style="medium"
          hour-format="24"
          date="${data.created_at}"
        ></quiet-date>
        <!-- <b>${parseDate(data.created_at)}</b> -->
      </p>

      <aside>
        <quiet-toggle-icon
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
          data-on:click="@delete('/studio/api/block/${entryId}'); window.history.back()"
        >
          <quiet-icon name="trash"></quiet-icon>
        </quiet-button>

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
