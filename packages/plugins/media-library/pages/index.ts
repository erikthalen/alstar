import { html } from 'hono/html'
import fsp from 'node:fs/promises'
import path from 'node:path'
import type { MediaRow } from './../types.ts'
// import MediaLibraryEditor from '../media-library/MediaLibraryEditor.ts'
// import { database } from '#index.ts'
// import { defineEventHandler } from '#event-emitter.ts'
import { PluginArgs } from '@alstar/types'
import sql from 'sql-template-tag'
import { css } from '@alstar/framework'
import { SQLInputValue } from 'node:sqlite'
import { mediaCachePath, mediaPath } from '../api/create-media.ts'
import MediaLibraryEditor from '../components/MediaLibraryEditor.ts'

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

export default async ({ database }: PluginArgs) => {
  const query = sql`select * from media`
  const medias = database.prepare(query.sql).all(...(query.values as SQLInputValue[])) as MediaRow[]
  const cacheFolderStats = await dirSize(mediaCachePath).catch(() => null)

  return html`
    <style>
      ${styles}
    </style>
    <div id="media_library" class="media-library">
      <!-- <quiet-file-input
        data-on:quiet-change="$files = evt.target.files;"
        name="file"
        multiple
        accept="image/jpeg, image/png, image/gif, image/webp"
      >
      </quiet-file-input> -->

      ${medias?.length
        ? html`<ul>
            ${medias.map(async (media) => {
              // const handleOpenMediaEditor = defineEventHandler(
              //   ({ patchElements }) => {
              //     patchElements(MediaLibraryEditor({ filename: media.filename }), { them: false })
              //   },
              //   { id: media.filename },
              // )

              // const handleRemoveMedia = defineEventHandler(
              //   async () => {
              //     await deleteMedia(media.filename)
              //     return [Component()]
              //   },
              //   { id: media.filename },
              // )

              return html`<li>
                <quiet-card orientation="horizontal">
                  <img
                    slot="media"
                    src="${getThumbnailUrl(media.filename?.toString())}"
                    alt="The image"
                  />

                  <span class="content">
                    ${media.name}
                    <code>${media.width} x ${media.height}</code>
                    <code>
                      <quiet-bytes value="${await fileStats(path.join(mediaPath, media.filename))}">
                      </quiet-bytes>
                    </code>
                  </span>

                  <quiet-button
                    data-dialog="open dialog_editor"
                    slot="actions"
                    type="submit"
                    icon-label="Select"
                    id="tooltip-edit-${media.filename}"
                    data-on:click="evt.target.dispatchEvent(new CustomEvent('input', { detail: '${media.filename}', bubbles: true }))"
                  >
                    <quiet-icon name="edit"></quiet-icon>
                  </quiet-button>

                  <quiet-tooltip
                    distance="0"
                    without-arrow
                    for="tooltip-edit-${media.filename}"
                    class="text-label"
                  >
                    Edit
                  </quiet-tooltip>

                  <quiet-button
                    variant="neutral"
                    slot="actions"
                    icon-label="Remove"
                    id="tooltip-remove-${media.filename}"
                    data-on:click="evt.stopPropagation();"
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
                </quiet-card>
              </li>`
            })}
          </ul>`
        : html`<quiet-callout style="margin-block: 1rem;" variant="neutral">
            <quiet-icon slot="icon" name="file-unknown"></quiet-icon>
            No media uploaded
          </quiet-callout>`}

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

const styles = css`
  .media-library {
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
        max-width: 81px;
        aspect-ratio: 1;
      }

      .content {
        display: flex;
        flex-direction: column;
      }
    }
  }
`
