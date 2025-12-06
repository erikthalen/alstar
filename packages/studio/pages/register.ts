import { html } from 'hono/html'
import { factory } from '../factory.ts'
import SiteLayout from '../components/SiteLayout.ts'
import SiteHeader from '../components/SiteHeader.ts'
import { type StudioConfig } from '../types.ts'

export default (config: StudioConfig) => {
  return factory.createHandlers((c) => {
    return c.html(
      SiteLayout(
        html` ${SiteHeader(c)}

          <div class="setup background-pattern">
            <h1 class="sr-only">${config.siteName}</h1>

            <form
              class="login-form"
              data-on:submit__prevent="window.auth.register(new FormData(evt.target))"
            >
              
                <vscode-form-group variant="vertical">
                  <vscode-label> Email </vscode-label>
                  <vscode-textfield name="email" type="email">
                  </vscode-textfield>
                </vscode-form-group>

                <vscode-form-group variant="vertical">
                  <vscode-label> Password </vscode-label>
                  <vscode-textfield name="password" type="password">
                  </vscode-textfield>
                </vscode-form-group>
              </vscode-form-container>

            <quiet-button
              size="xs"
              type="submit"
              style="width: 100%; margin-top: 1rem;"
              variant="neutral"
            >
              Register
            </quiet-button>
          </form>
        </div>`,
      ),
    )
  })
}
