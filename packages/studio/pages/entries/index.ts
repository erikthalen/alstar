import { html } from 'hono/html'
import SiteLayout from '../../components/SiteLayout.ts'
import SiteHeader from '../../components/SiteHeader.ts'
import Entries from '../../components/Entries.ts'
import Explorer from '../../components/Explorer.ts'
import Tabs from '../../components/Tabs.ts'
import { type StudioConfig } from '../../types.ts'
import { factory } from '../../factory.ts'
import { defineEventHandler } from '../../event-emitter.ts'
import { createBlock } from '../../helpers/sql/index.ts'

export default (config: StudioConfig) =>
  factory.createHandlers((c) => {
    const name = c.req.query('name')

    const structure = config.structure[name || '']

    const onNewEntryClick = defineEventHandler(() => {
      createBlock({
        type: structure.instanceOf.description as string,
        name: name as string,
        label: structure?.label,
        parent_id: null,
      })

      return [Entries({ page: 1, name: name as string })]
    })

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
            ? html`<div class="entries-container">
                <quiet-toolbar class="toolbar">
                  <quiet-button-group>
                    <vscode-textfield placeholder="Search entries">
                      <quiet-icon slot="content-before" name="search"></quiet-icon>
                    </vscode-textfield>
                  </quiet-button-group>

                  <quiet-button-group>
                    <quiet-button
                      id="new_entry_button"
                      size="xs"
                      icon-label="New entry"
                      data-on:click=${onNewEntryClick}
                    >
                      <quiet-icon name="file-plus"></quiet-icon>
                    </quiet-button>

                    <!-- <quiet-button size="xs" icon-label="Redo">
                  <quiet-icon name="arrow-forward-up"></quiet-icon>
                </quiet-button> -->
                  </quiet-button-group>
                </quiet-toolbar>

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

                ${Entries({ page: 1, name: name })}
              </div>`
            : html`<p>No name parameter</p>`}
        </section>
      `),
    )
  })
