import { html } from 'hono/html'
import { sql } from '#utils/sql.ts'
import { database } from '#index.ts'

export default async () => {
  const medias = database.prepare(sql`select * from media`).all()

  const getThumbnailUrl = (filename?: string) => {
    if (!filename) return ''

    const base = '/studio/media'
    const searchParams = new URLSearchParams()

    searchParams.set('w', '200')
    searchParams.set('format', 'webp')

    return `${base}/${filename}?${searchParams.toString()}`
  }

  const signals = {
    patchElements: [{ name: 'MediaLibraryDialogContent' }],
  }

  return html`
    <div
      id="media_library_dialog_content"
      class="media-library"
      data-signals:medialibrary="${JSON.stringify(signals)}"
    >
      <ul>
        ${medias.length
          ? medias.map(
              (media) =>
                html`<li>
                  <button
                    type="submit"
                    name="filename"
                    value="${media.filename}"
                    data-on:click="evt.target.dispatchEvent(new CustomEvent('input', { detail: '${media.filename}', bubbles: true }))"
                  >
                    <figure>
                      <img src="${getThumbnailUrl(media.filename?.toString())}" />
                      <figcaption class="ts-xs">
                        <span>${media.name}</span>
                      </figcaption>
                    </figure>
                  </button>
                </li>`,
            )
          : html`<li class="ts-xs">No media</li>`}
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
        data-on:input="setTimeout(() => { @post('/studio/media', { filterSignals: '/files|medialibrary/' }); $files = null }, 100)"
        multiple
        type="file"
        id="media_library_file_input"
        style="display: none;"
      />
    </div>
  `
}
