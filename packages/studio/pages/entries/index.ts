import { html } from 'hono/html'
import { factory } from '#factory.ts'
import { defineEventHandler } from '#event-emitter.ts'
import { createBlock, getUserSettings } from '#helpers/db/sql/index.ts'
import SiteLayout from '#components/SiteLayout.ts'
import SiteHeader from '#components/SiteHeader.ts'
import Entries from '#components/Entries.ts'
import Explorer from '#components/Explorer.ts'
import Tabs from '#components/Tabs.ts'
import EntriesTypes from '#components/EntriesTypes.ts'
import type { BlockFieldInstanceType, FieldInstanceType } from '#helpers/structure/types.ts'
import { type StudioConfig } from '#types.ts'

export default (config: StudioConfig) =>
  factory.createHandlers((c) => {
    const name = c.req.query('name')

    const structure = config.structure[name || '']

    const onNewEntryClick = defineEventHandler(() => {
      if (!name || !structure.instanceOf.description) return

      createBlock({
        type: structure.instanceOf.description,
        name: name,
        label: structure?.label,
        parent_id: null,
      })

      return [Entries({ page: 1, name })]
    })

    const fields = Object.entries(structure?.fields || {}) as [
      string,
      FieldInstanceType | BlockFieldInstanceType,
    ][]

    const settings = getUserSettings(c.get('user')?.id)

    console.log(settings)

    const tableColumns = {}

    return c.html(
      SiteLayout(html`
        <!--  -->

        ${Explorer(c)}

        <!--  -->

        <section class="page">
          ${SiteHeader(c)}

          <!--  -->

          ${Tabs()}

          <!--  -->

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
                  <!-- <quiet-button-group>
                    <vscode-textfield placeholder="Search entries">
                      <quiet-icon slot="content-before" name="search"></quiet-icon>
                    </vscode-textfield>
                  </quiet-button-group> -->

                  <quiet-button-group>
                    <quiet-button
                      id="new_entry_button"
                      size="xs"
                      icon-label="New entry"
                      data-on:click=${onNewEntryClick}
                    >
                      <quiet-icon name="file-plus"></quiet-icon>
                    </quiet-button>

                    <quiet-tooltip
                      open-delay="0"
                      close-delay="0"
                      distance="0"
                      without-arrow
                      for="new_entry_button"
                      class="ts-xs"
                    >
                      New entry
                    </quiet-tooltip>

                    <!-- <quiet-button size="xs" icon-label="Redo">
                  <quiet-icon name="arrow-forward-up"></quiet-icon>
                </quiet-button> -->
                  </quiet-button-group>

                  <!-- <quiet-button-group>
                    <quiet-dropdown
                      id="dropdown__checkboxes"
                      data-on:quiet-select="evt.preventDefault(); console.log(evt.detail.item.value, evt.detail.item.checked)"
                    >
                      <quiet-button size="xs" slot="trigger" with-caret>View</quiet-button>

                      ${fields?.map(([name, field]) => {
                        return html`<quiet-dropdown-item
                          class="ts-xs"
                          type="checkbox"
                          value="${name}"
                          checked
                        >
                          ${field.label}
                        </quiet-dropdown-item>`
                      })}
                    </quiet-dropdown>
                  </quiet-button-group> -->
                </quiet-toolbar>

                ${Entries({ page: 1, name: name })}
              </div>`
            : EntriesTypes(config.structure)}
        </section>
      `),
    )
  })
