import { html } from 'hono/html'
import { db } from '@alstar/db'
import { sql } from '../utils/sql.ts'
import { config } from '@alstar/studio'

export default async () => {
  const medias = db.database.prepare(sql`select * from media`).all()

  const getThumbnailUrl = (filename?: string) => {
    if (!filename) return ''

    const base = '/studio/media'
    const searchParams = new URLSearchParams()

    searchParams.set('w', '200')
    searchParams.set('format', 'webp')

    // return `${base}/${filename}`
    return `${base}/${filename}?${searchParams.toString()}`
  }

  return html`
    <div id="media_library" class="media-library">
      <ul>
        ${medias.map(
          (media) => html`<li>
            <figure>
              <img src="${getThumbnailUrl(media.filename?.toString())}" />
              <figcaption class="ts-xs">${media.name}</figcaption>
            </figure>
          </li>`
        )}
      </ul>

      <br />

      <quiet-button
        variant="neutral"
        icon-label="Upload"
        size="xs"
        data-on:click="document.getElementById('media_library_file_input').click()"
      >
        <quiet-icon slot="start" name="cloud-upload"></quiet-icon>
        Upload
      </quiet-button>

      <input
        data-bind:files
        data-on:input="setTimeout(() => { @post('/studio/api/media', { filterSignals: '/files/' }); $files = null }, 100)"
        multiple
        type="file"
        id="media_library_file_input"
        style="display: none;"
      />
    </div>
  `
}
