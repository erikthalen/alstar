import { html } from '@alstar/studio/html'
import { defineEntry } from '../utils/define.ts'

import SiteLayout from '../components/SiteLayout.ts'

export default defineEntry(() => {
  return SiteLayout(
    html`<div style="padding: 2rem; height: 100%;">
      <h1>Profile</h1>
      <p>Welcome to the Studio.</p>

      <quiet-button data-on:click="window.auth.logout()">
        <quiet-icon slot="start" name="logout-2"></quiet-icon>
        Logout
      </quiet-button>

      <br />
      <br />

      <pre><code data-signals="{ session: null }" data-init="setTimeout(async () => $session = await window.auth.getSession(), 1000)" data-text="JSON.stringify($session, null, 2)"></code></pre>
    </div> `
  )
})
