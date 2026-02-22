import { html } from 'hono/html'
import DialogContent from './DialogContent.ts'
import { FieldTypeMap, PluginArgs } from '@alstar/types'
import sql from 'sql-template-tag'
import { type SQLInputValue } from 'node:sqlite'

export default (api: PluginArgs) =>
  (id: number | `${number}`, structure: FieldTypeMap['image']['props']) => {
    if (!id) {
      return html`<p>No id provided</p>`
    }

    // const renderDialog = defineEventHandler(() => MediaLibraryDialogContent())

    const data = api.query.getField({ id })

    // console.log('data', data)

    const query = sql`select * from media where filename = ${data.value}`
    const media = api.database.prepare(query.sql).get(...(query.values as SQLInputValue[]))

    const getThumbnailUrl = (filename?: string) => {
      if (!filename) return ''

      const base = '/studio/media'
      const searchParams = new URLSearchParams()

      searchParams.set('w', '200')
      searchParams.set('format', 'webp')

      return `${base}/${filename}?${searchParams.toString()}`
    }

    // console.log(media)

    if (!data) return html`<p>No block</p>`

    return html`
      <div class="image-field" id="id_${id}">
        <span class="field-label">${structure.label}</span>
        <span class="field-description">${structure.description}</span>

        <quiet-card
          data-signals="{ ${id}: '${data.value}' }"
          data-bind:${id}
          orientation="horizontal"
        >
          ${media
            ? html`<img
                slot="media"
                src="${getThumbnailUrl(media?.filename?.toString())}"
                alt="Two white kittens laying in a cozy basket"
              />`
            : html`<div slot="media" class="placeholder">
                <div>
                  <quiet-icon name="photo-off" style="font-size: 2.5em;"></quiet-icon>
                </div>
              </div>`}

          <div>
            <span class="filename">${data.value || 'No image'}</span>
          </div>

          <quiet-button-group slot="actions">
            <quiet-button
              id="remove_${id}"
              icon-label="Remove"
              data-on:click="$${id} = ''; @post('/studio/media/update/${id}')"
            >
              <quiet-icon name="x"></quiet-icon>
            </quiet-button>

            <quiet-button
              data-dialog="open dialog__overview_${id}"
              id="change_${id}"
              icon-label="Change image"
            >
              <quiet-icon name="photo"></quiet-icon>
            </quiet-button>
          </quiet-button-group>
        </quiet-card>

        <quiet-tooltip distance="0" without-arrow class="text-label" for="remove_${id}">
          Clear
        </quiet-tooltip>

        <quiet-tooltip distance="0" without-arrow class="text-label" for="change_${id}">
          Change
        </quiet-tooltip>

        <quiet-dialog
          id="dialog__overview_${id}"
          light-dismiss
          data-on:input="$${id} = evt.detail; @post('/studio/media/update/${id}'); document.getElementById('dialog__overview_${id}').open = false"
        >
          ${DialogContent({ api, id })}
        </quiet-dialog>

        <style>
          .image-field {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 0.25em;
            line-height: 1.25;

            quiet-card {
              container-type: inline-size;

              border: var(--quiet-border-style) var(--quiet-border-width)
                var(--quiet-neutral-stroke-soft);

              *[slot='media'] {
                width: 50px;
                aspect-ratio: 1;
              }

              &::part(body),
              &::part(actions) {
                display: flex;
                align-items: center;
                padding: 1rem;
              }

              .placeholder {
                div {
                  display: grid;
                  place-items: center;
                  width: 50px;
                  height: 100%;
                }
              }
            }
          }
        </style>
      </div>
    `
  }
