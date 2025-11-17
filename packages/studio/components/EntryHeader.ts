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
        <b>${parseDate(data.updated_at)}</b>&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;
        <span>Created:</span>
        <b>${parseDate(data.created_at)}</b>
      </p>
    </header>
  `
}
