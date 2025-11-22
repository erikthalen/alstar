import { html } from 'hono/html'
import SiteLayout from '../components/SiteLayout.ts'
import { type StudioConfig } from '../types.ts'
import { factory } from '../factory.ts'

export default (config: StudioConfig) =>
  factory.createHandlers((c) => {
    return c.html(
      SiteLayout(
        html`
          <div
            class="background-pattern"
            style="padding-bottom: 10vh; height: 100%; display: flex; flex-direction: column; place-content: center;"
          >
            <quiet-empty-state style="min-height: 400px;">
              <h3 class="ts-xs">Something went wrong</h3>

              <p class="ts-xs">404 - Page not found</p>

              <quiet-button
                data-barba-prevent
                size="xs"
                href="/studio"
                variant="primary"
              >
                Take me home
              </quiet-button>
            </quiet-empty-state>
          </div>
        `
      )
    )
  })
