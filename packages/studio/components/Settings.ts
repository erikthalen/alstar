import { html } from '@alstar/studio/html'
import Backup from './settings/Backup.ts'
import Users from './settings/Users.ts'
import ApiKeys from './settings/ApiKeys.ts'

export default () => {
  return html`
    <settings-tabs id="settings">
      <h1>Settings</h1>

      <quiet-tab-list label="Settings">
        <quiet-tab panel="api_keys">API Keys</quiet-tab>
        <quiet-tab panel="backup">Backup</quiet-tab>
        <quiet-tab panel="users">Users</quiet-tab>

        <quiet-tab-panel name="api_keys"> ${ApiKeys()} </quiet-tab-panel>
        <quiet-tab-panel name="backup"> ${Backup()} </quiet-tab-panel>
        <quiet-tab-panel name="users"> ${Users()} </quiet-tab-panel>
      </quiet-tab-list>
    </settings-tabs>
  `
}
