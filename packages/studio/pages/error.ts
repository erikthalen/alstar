import { html } from '@alstar/studio/html'
import SiteLayout from '../components/SiteLayout.ts'
import type { HTTPResponseError } from 'hono/types'

export default (err?: Error | HTTPResponseError) => {
  return SiteLayout(
    html`
      <div class="background-pattern" style="height: 100%; display: flex; place-content: center;">
        <quiet-empty-state style="min-height: 400px; margin-bottom: 10vh">
          <quiet-icon slot="illustration" name="unlink"></quiet-icon>

          <h3>Something went wrong</h3>

          <p>${err?.message || '404 - Page not found'}</p>

          ${!err
            ? html`<quiet-button data-barba-prevent href="/studio" variant="primary">
                Take me home
              </quiet-button>`
            : ''}
        </quiet-empty-state>
      </div>
    `,
    false
  )
}
