import { html } from 'hono/html'
import Entries from '#components/Entries.ts'
import EntriesTypes from '#components/EntriesTypes.ts'
import { Context } from 'hono'
import { config } from '#index.ts'
import { css } from '@alstar/framework'

export default (c: Context) => {
  const name = c.req.query('name')

  const structure = config.structure[name || '']

  const newBlockPayload = JSON.stringify({
    type: structure.instanceOf.description,
    name: name,
    label: structure?.label,
    parent_id: null,
  })

  return html`
    <section class="entries-page">
      ${name
        ? html`<div
            class="entries-container"
            data-signals="{
                  userSettings: {
                    entriesTableColumns: {
                      '${name}': ''
                    }
                  }
                }"
          >
            <quiet-toolbar class="toolbar">
              <quiet-button-group>
                <quiet-button
                  id="new_entry_button"
                  icon-label="New entry"
                  data-on:click="@post('/studio/block', { payload: ${newBlockPayload} })"
                >
                  <quiet-icon name="file-plus"></quiet-icon>
                </quiet-button>

                <quiet-tooltip
                  open-delay="0"
                  close-delay="0"
                  distance="0"
                  without-arrow
                  for="new_entry_button"
                >
                  New entry
                </quiet-tooltip>
              </quiet-button-group>
            </quiet-toolbar>

            ${Entries({ page: 1, name: name })}
          </div>`
        : EntriesTypes(config.structure)}
    </section>
  `
}

export const styles = css`
  .entries-page {
  }
`
