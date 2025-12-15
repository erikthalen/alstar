import { html } from 'hono/html'
import { raw } from 'hono/html'
import { getEntry } from '../helpers/sql/index.ts'
import hljs from 'highlight.js'

export default ({ entryId }: { entryId: number | string }) => {
  const data = getEntry({ id: entryId })

  if (!data) return html`<p>No entry with id: "${entryId}"</p>`

  const jsonString = JSON.stringify(data, null, 2)
  const highlightedJSON = hljs.highlight(jsonString, { language: 'json' }).value

  return html` <pre id="live_preview">${raw(highlightedJSON)}</pre> `
}
