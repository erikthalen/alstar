import { html } from 'hono/html'
import Backups from '../components/settings/Backups.ts'
import Users from '../components/settings/Users.ts'
// import ApiKeys from '../components/settings/ApiKeys.ts'

import { type Context } from 'hono'

export default (c: Context) => {
  const tab = c.req.query('tab')

  return html` <section class="page">
      <settings-tabs id="settings">
        <h1 class="sr-only">Settings</h1>

        <quiet-tab-list label="Settings" tab="${tab}">
          <!-- <quiet-tab panel="api_keys">API Keys</quiet-tab> -->
          <quiet-tab panel="backup">Backup</quiet-tab>
          <quiet-tab panel="users">Users</quiet-tab>

          <!-- <quiet-tab-panel name="api_keys">
                  {ApiKeys()}
                </quiet-tab-panel> -->
          <quiet-tab-panel name="backup"> ${Backups()} </quiet-tab-panel>
          <quiet-tab-panel name="users"> ${Users()} </quiet-tab-panel>
        </quiet-tab-list>
      </settings-tabs>
    </section>`
}
