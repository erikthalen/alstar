import { css } from '@alstar/framework'
import { PluginArgs } from '@alstar/types'
import { html } from 'hono/html'
import sql from 'sql-template-tag'

export default async ({ api, id }: { api: PluginArgs; id: number | `${number}` }) => {
  const query = sql`select * from media`
  const medias = api.database.prepare(query.sql).all()

  const getThumbnailUrl = (filename?: string) => {
    if (!filename) return ''

    const base = '/studio/media'
    const searchParams = new URLSearchParams()

    searchParams.set('w', '200')
    searchParams.set('format', 'webp')

    return `${base}/${filename}?${searchParams.toString()}`
  }

  return html`
    <div id="media_library_dialog_content_${id}" class="media-library-dialog">
      <style>
        ${styles}
      </style>

      ${medias?.length
        ? html`<ul>
            ${medias.map(
              (media) =>
                html`<li>
                  <quiet-card orientation="horizontal">
                    <img
                      slot="media"
                      src="${getThumbnailUrl(media.filename?.toString())}"
                      alt="The image"
                    />

                    ${media.name}

                    <quiet-button
                      slot="actions"
                      type="submit"
                      icon-label="Select"
                      data-on:click="evt.target.dispatchEvent(new CustomEvent('input', { detail: '${media.filename}', bubbles: true }))"
                    >
                      <quiet-icon name="check"></quiet-icon>
                    </quiet-button>
                  </quiet-card>
                </li>`,
            )}
          </ul>`
        : html` <quiet-callout variant="neutral">
            <quiet-icon slot="icon" name="file-unknown"></quiet-icon>
            No media uploaded
          </quiet-callout>`}

      <br />

      <quiet-button
        variant="neutral"
        icon-label="Upload"
        data-on:click="document.getElementById('media_library_file_input').click()"
      >
        <quiet-icon slot="start" name="cloud-upload"></quiet-icon>
        Upload
      </quiet-button>

      <input
        data-bind:files
        data-on:input="setTimeout(() => { @post('/studio/media/upload', { filterSignals: '/files/' }); $files = null }, 100)"
        multiple
        type="file"
        id="media_library_file_input"
        style="display: none;"
      />
    </div>
  `
}

const styles = css`
  .media-library-dialog {
    ul,
    li {
      list-style: none;
      padding: 0;
      margin: 0;

      figure {
        margin: 0;
      }

      button {
        background: none;
        border: none;
        padding: 0;
        margin: 0;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    quiet-card {
      img {
        max-width: 65px;
        aspect-ratio: 1;
      }
    }
  }
`
