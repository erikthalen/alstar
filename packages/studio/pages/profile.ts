import { html } from '@alstar/studio/html'
import { defineEntry } from '../utils/define.ts'

import SiteLayout from '../components/SiteLayout.ts'
import SiteHeader from '../components/SiteHeader.ts'
import Explorer from '../components/Explorer.ts'

export default defineEntry((c) => {
  return SiteLayout(
    html` ${Explorer(c)}
      <section class="page">
        ${SiteHeader(c)}

        <div class="profile">
          <h1 class="sr-only">Profile</h1>
          
          <p class="ts-xs">Welcome to the Studio.</p>

          <quiet-switch
            data-on:change="document.documentElement.classList.toggle('quiet-dark')"
            name="mode"
            checked
            value="kitten"
            size="xs"
          >
            Toggle dark mode
          </quiet-switch>

          <br />
          <br />

          <quiet-button size="xs" data-on:click="window.auth.logout()">
            <quiet-icon slot="start" name="logout-2"></quiet-icon>
            Logout
          </quiet-button>

          <br />
          <br />

          <pre><code data-signals="{ session: null }" data-init="setTimeout(async () => $session = await window.auth.getSession(), 1000)" data-text="JSON.stringify($session, null, 2)"></code></pre>
        </div>
      </section>`
  )
})
