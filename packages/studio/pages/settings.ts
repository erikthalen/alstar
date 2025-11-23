import { html } from 'hono/html'
import SiteLayout from '../components/SiteLayout.ts'
import SiteHeader from '../components/SiteHeader.ts'
import Explorer from '../components/Explorer.ts'

import Backups from '../components/settings/Backups.ts'
import Users from '../components/settings/Users.ts'
// import ApiKeys from '../components/settings/ApiKeys.ts'
import Tabs from '../components/Tabs.ts'
import { type StudioConfig } from '../types.ts'
import { factory } from '../factory.ts'

export default (config: StudioConfig) =>
  factory.createHandlers((c) => {
    const tab = c.req.query('tab')

    return c.html(
      SiteLayout(
        html` ${Explorer(c)}
          <section class="page">
            ${SiteHeader(c)} ${Tabs()}

            <settings-tabs id="settings">
              <h1 class="sr-only">Settings</h1>

              <quiet-tab-list label="Settings" tab="${tab}">
                <!-- <quiet-tab panel="api_keys" class="ts-xs">API Keys</quiet-tab> -->
                <quiet-tab panel="backup" class="ts-xs">Backup</quiet-tab>
                <quiet-tab panel="users" class="ts-xs">Users</quiet-tab>

                <!-- <quiet-tab-panel name="api_keys">
                  {ApiKeys()}
                </quiet-tab-panel> -->
                <quiet-tab-panel name="backup"> ${Backups()} </quiet-tab-panel>
                <quiet-tab-panel name="users"> ${Users()} </quiet-tab-panel>
              </quiet-tab-list>
            </settings-tabs>
          </section>`,
      ),
    )
  })
