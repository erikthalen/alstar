import { html } from 'hono/html'
import Backup from './settings/Backup.ts'
import Users from './settings/Users.ts'
import ApiKeys from './settings/ApiKeys.ts'

export default () => {
  return html`
    <div id="settings">
      <h1>Settings</h1>

      <quiet-tab-list label="Settings">
        <quiet-tab panel="api_keys">API Keys</quiet-tab>
        <quiet-tab panel="backup">Backup</quiet-tab>
        <quiet-tab panel="users">Users</quiet-tab>

        <quiet-tab-panel name="api_keys"> ${ApiKeys()} </quiet-tab-panel>
        <quiet-tab-panel name="backup"> ${Backup()} </quiet-tab-panel>
        <quiet-tab-panel name="users"> ${Users()} </quiet-tab-panel>
      </quiet-tab-list>

      <script type="module">
        const params = new URLSearchParams(window.location.search)
        const initTab = params.get('tab')

        if (initTab) {
          document.querySelector('quiet-tab-list').setAttribute('tab', initTab)
        }

        window.addEventListener('quiet-tab-shown', (e) => {
          const activeTab = e.detail.tab.getAttribute('panel')
          const url = new URL(window.location.href, window.location.origin)
          url.searchParams.set('tab', activeTab)
          window.history.replaceState(null, '', url.toString())
        })
      </script>
    </div>
  `
}
