import { html } from '@alstar/studio/html'
import { defineEntry } from '../utils/define.ts'
import SiteLayout from '../components/SiteLayout.ts'
import { studioConfig } from '../index.ts'
import * as icons from '../components/icons.ts'
import SiteHeader from '../components/SiteHeader.ts'

export default defineEntry(async (c) => {
  return SiteLayout(
    html` ${SiteHeader(c)}

      <div class="setup background-pattern">
        <quiet-card style="width: 100%; max-width: 300px;" class="ts-label">
          <h1 class="sr-only">${studioConfig.siteName}</h1>

          <form
            class="login-form"
            style="display: grid;"
            data-on:submit__prevent="window.auth.login(new FormData(evt.target))"
          >
            <quiet-text-field size="xs" required name="email" label="Email">
            </quiet-text-field>

            <p class="validation-message">Required</p>

            <br />

            <quiet-text-field
              size="xs"
              required
              name="password"
              label="Password"
              type="password"
            >
            </quiet-text-field>

            <p class="validation-message">Required</p>

            <br />

            <quiet-button
              size="xs"
              style="width: 100%"
              type="submit"
              variant="primary"
            >
              Login
            </quiet-button>

            <style>
              .login-form {
                .validation-message {
                  display: none;

                  color: var(--quiet-destructive-stroke-mid);
                  font-size: 0.825rem;
                }

                quiet-text-field:state(user-invalid) {
                  + .validation-message {
                    display: block;
                  }
                }
              }
            </style>
          </form>
        </quiet-card>
      </div>`
  )
})
