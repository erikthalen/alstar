import { html } from 'hono/html'
import type { MediaRow } from '../types.ts'
// import { database } from '#index.ts'
import sql from 'sql-template-tag'

export default (props: { filename: string | null }) => {
  if (!props?.filename)
    return html`<div id="media_library_editor">
        <quiet-callout variant="destructive">
          <quiet-icon slot="icon" name="photo-circle-minus"></quiet-icon>

          No filename supplied: <code>${JSON.stringify(props)}</code>
        </quiet-callout>
      </div>`

  const query = sql`
    select
      *
    from
      media
    where
      filename = ${props.filename}
  `
  const media: any = [] // database.prepare(query.sql).get(...query.values) as MediaRow

  return html` <div id="media_library_editor" class="media-library-editor">
      <img src="/studio/media/${media.filename}" />
      <pre><code>${JSON.stringify(media, null, 2)}</code></pre>
    </div>`
}
