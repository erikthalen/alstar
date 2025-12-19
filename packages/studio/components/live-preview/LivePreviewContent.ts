import { html } from 'hono/html'
import { raw } from 'hono/html'
import { getEntry } from '../../helpers/sql/index.ts'
import hljs from 'highlight.js'

export default ({ entryId }: { entryId: number | string }) => {
  const data = getEntry({ id: entryId })

  if (!data) {
    return html`<div id="entry" style="padding: var(--unit)">
      <quiet-callout variant="destructive" class="ts-xs">
        <quiet-icon slot="icon" name="file-unknown"></quiet-icon>
        No entry with id: <code>${entryId}</code>
      </quiet-callout>
    </div>`
  }

  const jsonString = JSON.stringify(data, null, 2)
  const highlightedJSON = hljs.highlight(jsonString, { language: 'json' }).value

  return html` <pre id="live_preview">${raw(highlightedJSON)}</pre> `
}
