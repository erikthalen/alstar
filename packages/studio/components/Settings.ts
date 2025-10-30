import { html } from 'hono/html'
import Backup from './settings/Backup.ts'
import Users from './settings/Users.ts'
import ApiKeys from './settings/ApiKeys.ts'

export default () => {
  return html`
  <div id="settings">
      <!-- <h1>Settings</h1> -->
      ${ApiKeys()} ${Backup()} ${Users()}
    </div>
  `
}
