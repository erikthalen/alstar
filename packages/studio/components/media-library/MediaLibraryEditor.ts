import { html } from 'hono/html'
import { sql } from '../../utils/sql.ts'
import type { MediaRow } from '../../types.ts'
import { database } from '../../index.ts'

export default (props: { filename: string | null }) => {
  if (!props?.filename)
    return html`<div id="media_library_editor">
      <quiet-callout variant="destructive" class="ts-xs">
        <quiet-icon slot="icon" name="photo-circle-minus"></quiet-icon>

        No filename supplied: <code>${JSON.stringify(props)}</code>
      </quiet-callout>
    </div>`

  const media = database
    .prepare(sql`select * from media where filename = ?`)
    .get(props.filename) as MediaRow

  return html` <div id="media_library_editor" class="media-library-editor ts-xs">
    <img src="/studio/media/${media.filename}" />
    <pre><code>${JSON.stringify(media, null, 2)}</code></pre>
  </div>`
}
