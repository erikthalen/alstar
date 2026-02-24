import { html } from 'hono/html'
import { getEntry } from '../helpers/db/sql/index.ts'

export default ({ entryId }: { entryId: `${number}` | number }) => {
  console.log('id', entryId)
  const data = getEntry({ id: entryId })
  console.log('data', data?.type)

  if (!data) return html`<p>No data</p>`

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
          data-signals:${entryId}="{ status: '${data.status}' }"
          class="disable-button"
          label="Disable"
          effect="scale"
          id="tooltip-disable-${entryId}"
          data-attr:checked="$${entryId}.status === 'enabled'"
          data-on:quiet-change="$${entryId}.status = evt.target.checked ? 'enabled' : 'disabled'; @post('/studio/block/status/${entryId}/${data.name}')"
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

        ${data.type !== 'single'
          ? html`<quiet-button variant="neutral" icon-label="Remove" id="tooltip-remove-${entryId}">
                <quiet-icon name="trash"></quiet-icon>
              </quiet-button>
              <quiet-popover for="tooltip-remove-${entryId}" placement="bottom">
                <div style="display: flex; flex-direction: column; gap: 0.25rem;">
                  <quiet-button
                    class="text-label"
                    variant="destructive"
                    data-popover="close"
                    data-on:click="@delete('/studio/block/${entryId}/${data.name}'); window.history.back()"
                  >
                    Delete
                  </quiet-button>

                  <quiet-button data-popover="close">Cancel</quiet-button>
                </div>
              </quiet-popover>

              <quiet-tooltip
                distance="0"
                without-arrow
                for="tooltip-remove-${entryId}"
                class="text-label"
              >
                Remove
              </quiet-tooltip>`
          : html``}
      </aside>
    </header>
  `
}
