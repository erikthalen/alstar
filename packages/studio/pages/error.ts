import { html } from '@alstar/studio/html'
import SiteLayout from '../components/SiteLayout.ts'
import type { HTTPResponseError } from 'hono/types'
import * as icons from '../components/icons.ts'

export default (err?: Error | HTTPResponseError) => {
  return SiteLayout(
    html`
      <div
        class="background-pattern"
        style="padding-bottom: 10vh; height: 100%; display: flex; flex-direction: column; place-content: center;"
      >
        <quiet-empty-state style="min-height: 400px;">
          <h3 class="ts-xs">Something went wrong</h3>

          <p class="ts-xs">${err?.message || '404 - Page not found'}</p>

          ${!err
            ? html`<quiet-button
                data-barba-prevent
                size="xs"
                href="/studio"
                variant="primary"
              >
                Take me home
              </quiet-button>`
            : ''}
        </quiet-empty-state>

        <!-- <pre><code>${err?.stack}</code></pre> -->
      </div>
    `
  )
}
