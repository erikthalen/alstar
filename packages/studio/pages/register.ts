import { html } from '@alstar/studio/html'
import { factory } from '../factory.ts'
import SiteLayout from '../components/SiteLayout.ts'
import { type StudioConfig } from '../types.ts'
import * as icons from '../components/icons.ts'

export default (config: StudioConfig) =>
  factory.createHandlers((c) =>
    c.html(
      SiteLayout(
        html`<div class="setup background-pattern">
          <header>
            <div class="logo">${config.admin?.logo || icons.logo}</div>
          </header>

          <h1 class="sr-only">${config.siteName}</h1>

          <br />

          <vscode-form-container responsive>
            <vscode-form-group>
              <vscode-label for="register-name"> Name </vscode-label>
              <vscode-textfield
                id="register-name"
                name="value"
              ></vscode-textfield>
              <vscode-form-helper>
                <p class="ts-xs">What's your name?</p>
              </vscode-form-helper>
            </vscode-form-group>
          </vscode-form-container>

          <form
            class="login-form"
            style="display: grid;"
            data-on:submit__prevent="window.auth.register(new FormData(evt.target))"
          >
            <quiet-text-field required name="email" label="Email">
            </quiet-text-field>

            <p class="validation-message">Required</p>

            <br />

            <quiet-text-field
              required
              name="password"
              label="Password"
              type="password"
            >
            </quiet-text-field>

            <p class="validation-message">Required</p>

            <br />

            <quiet-button style="width: 100%" type="submit" variant="primary">
              Register
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
        </div>`
      )
    )
  )
