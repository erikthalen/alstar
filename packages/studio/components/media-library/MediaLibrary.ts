import { html } from 'hono/html'
import { sql } from '#utils/sql.ts'
import fsp from 'node:fs/promises'
import {
  createMedia,
  type DatastarFileUpload,
  deleteMedia,
  mediaCachePath,
  mediaPath,
} from './index.ts'
import path from 'node:path'
import type { MediaRow } from '#types.ts'
import MediaLibraryEditor from './MediaLibraryEditor.ts'
import { database } from '#index.ts'
import { defineEventHandler } from '#event-emitter.ts'

const fileStats = async (filepath: string) => {
  try {
    const stats = await fsp.stat(filepath)
    return stats.size
  } catch (error) {
    return null
  }
}

const dirSize = async (directory: string) => {
  const files = await fsp.readdir(directory)
  const stats = files.map((file) => fsp.stat(path.join(directory, file)))

  return (await Promise.all(stats)).reduce((accumulator, { size }) => accumulator + size, 0)
}

const getThumbnailUrl = (filename?: string) => {
  if (!filename) return ''

  const base = '/studio/media'
  const searchParams = new URLSearchParams()

  searchParams.set('w', '400')
  searchParams.set('format', 'webp')

  return `${base}/${filename}?${searchParams.toString()}`
}

const Component = async () => {
  const medias = database.prepare(sql`select * from media`).all() as MediaRow[]
  const cacheFolderStats = await dirSize(mediaCachePath).catch(() => null)

  const handleUploadMedia = defineEventHandler(async ({ signals }) => {
    await createMedia(signals.files as DatastarFileUpload[])
    return [Component()]
  })

  return html`
    <div id="media_library" class="media-library">
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
          ? medias.map(async (media) => {
              const handleOpenMediaEditor = defineEventHandler(
                ({ patchElements }) => {
                  patchElements(MediaLibraryEditor({ filename: media.filename }), { them: false })
                },
                { id: media.filename },
              )

              const handleRemoveMedia = defineEventHandler(
                async () => {
                  await deleteMedia(media.filename)
                  return [Component()]
                },
                { id: media.filename },
              )

              return html`<li>
                <button data-dialog="open dialog_editor" data-on:click=${handleOpenMediaEditor}>
                  <figure>
                    <img src="${getThumbnailUrl(media.filename?.toString())}" />
                    <figcaption>
                      <span class="content">
                        <span>${media.name}</span>

                        <code>${media.width} x ${media.height}</code>

                        <code
                          ><quiet-bytes
                            value="${await fileStats(path.join(mediaPath, media.filename))}"
                          ></quiet-bytes
                        ></code>
                      </span>

                      <quiet-button
                        variant="neutral"
                        icon-label="Remove"
                        size="xs"
                        id="tooltip-remove-${media.filename}"
                        data-on:click="evt.stopPropagation(); ${handleRemoveMedia}"
                      >
                        <quiet-icon name="trash"></quiet-icon>
                      </quiet-button>

                      <quiet-tooltip
                        distance="0"
                        without-arrow
                        for="tooltip-remove-${media.filename}"
                        class="text-label"
                      >
                        Remove
                      </quiet-tooltip>
                    </figcaption>
                  </figure>
                </button>
              </li>`
            })
          : html`<li>No media</li>`}
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
        data-on:input="setTimeout(() => { ${handleUploadMedia}; $files = null }, 100)"
        multiple
        type="file"
        id="media_library_file_input"
        style="display: none;"
      />

      <quiet-divider></quiet-divider>

      <p>
        Total size of cached folder:
        <quiet-bytes value="${cacheFolderStats}"></quiet-bytes>
      </p>
    </div>

    <quiet-dialog class="media-library-editor-dialog" id="dialog_editor" light-dismiss>
      ${MediaLibraryEditor({ filename: null })}
    </quiet-dialog>
  `
}

export default Component
