import { html } from 'hono/html'
import { sql } from '../utils/sql.ts'
import fsp from 'node:fs/promises'
import { mediaCachePath, mediaPath } from '@alstar/studio/media'
import path from 'node:path'
import type { MediaRow } from '../types.ts'
import MediaLibraryEditor from './MediaLibraryEditor.ts'
import { database } from '../index.ts'

const fileStats = async (filepath: string) => {
  const stats = await fsp.stat(filepath)
  return stats.size
}

const dirSize = async (directory: string) => {
  const files = await fsp.readdir(directory)
  const stats = files.map((file) => fsp.stat(path.join(directory, file)))

  return (await Promise.all(stats)).reduce(
    (accumulator, { size }) => accumulator + size,
    0,
  )
}

export default async () => {
  const medias = database
    .prepare(sql`select * from media`)
    .all() as MediaRow[]

  const getThumbnailUrl = (filename?: string) => {
    if (!filename) return ''

    const base = '/studio/media'
    const searchParams = new URLSearchParams()

    searchParams.set('w', '400')
    searchParams.set('format', 'webp')

    return `${base}/${filename}?${searchParams.toString()}`
  }

  const signals = {
    patchElements: [{ name: 'MediaLibrary' }],
  }

  const cacheFolderStats = await dirSize(mediaCachePath)

  return html`
    <div
      id="media_library"
      class="media-library"
      data-signals:medialibrary="${JSON.stringify(signals)}"
    >
      <!-- <quiet-file-input
        data-on:quiet-change="$files = evt.target.files;"
        size="xs"
        name="file"
        multiple
        accept="image/jpeg, image/png, image/gif, image/webp"
      >
      </quiet-file-input> -->

      <ul>
        ${medias.length
          ? medias.map(
              async (media) =>
                html`<li>
                  <button
                    data-dialog="open dialog_editor"
                    data-on:click="@get('/studio/api/component?name=MediaLibraryEditor&props=${JSON.stringify(
                      { filename: media.filename },
                    )}')"
                  >
                    <figure>
                      <img
                        src="${getThumbnailUrl(media.filename?.toString())}"
                      />
                      <figcaption class="ts-xs">
                        <span class="content">
                          <span>${media.name}</span>

                          <code>${media.width} x ${media.height}</code>

                          <code
                            ><quiet-bytes
                              value="${await fileStats(
                                path.join(mediaPath, media.filename),
                              )}"
                            ></quiet-bytes
                          ></code>
                        </span>

                        <quiet-button
                          variant="neutral"
                          icon-label="Remove"
                          size="xs"
                          id="tooltip-remove-${media.filename}"
                          data-on:click="@delete('/studio/media/${media.filename}', { filterSignals: { include: /medialibrary/ } })"
                        >
                          <quiet-icon name="trash"></quiet-icon>
                        </quiet-button>

                        <quiet-tooltip
                          distance="0"
                          without-arrow
                          for="tooltip-remove-${media.filename}"
                          class="ts-label"
                        >
                          Remove
                        </quiet-tooltip>
                      </figcaption>
                    </figure>
                  </button>
                </li>`,
            )
          : html`<li class="ts-xs">No media</li>`}
      </ul>

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

      <quiet-divider></quiet-divider>

      <p class="ts-xs">
        Total size of cached folder:
        <quiet-bytes value="${cacheFolderStats}"></quiet-bytes>
      </p>
    </div>

    <quiet-dialog class="media-library-editor-dialog" id="dialog_editor" light-dismiss>
      ${MediaLibraryEditor({ filename: null })}
    </quiet-dialog>
  `
}
