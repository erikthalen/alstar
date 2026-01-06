import { html } from 'hono/html'
import { getField } from '../helpers/db/sql/index.ts'

export default ({ entryId }: { entryId: number | string }) => {
  const data = getField({ parent_id: entryId, name: 'title' })

  return html`<span id="breadcrumb_title">${data?.value || 'Untitled'}</span>`
}
