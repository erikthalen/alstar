import { html } from 'hono/html'
import { factory } from '../factory.ts'
import SiteLayout from '../components/SiteLayout.ts'
import SiteHeader from '../components/SiteHeader.ts'
import { type StudioDefaultConfig } from '../types.ts'
import { css } from '#utils/css.ts'
import IconLogo from '#components/icons/IconLogo.ts'

export default (config: StudioDefaultConfig) => {
  return factory.createHandlers((c) => {
    return c.html(
      SiteLayout(
        c,
        html`
        <div class="register-page">
        <header class="p-2">
          ${IconLogo}
        </header>

          <div class="register px-2 pb-2">
            <section class="intro">
                <h1>Welcome to Alstar Studio</h1>
                
                <p class="py-3">Setup the studio by creating an admin user.</p>
                
                <form
                  class="register-form"
                  data-on:submit__prevent="window.auth.register(new FormData(evt.target))"
                >
                  
                    <vscode-form-group variant="vertical">
                      <vscode-label> Email </vscode-label>
                      <vscode-textfield name="email" type="email" placeholder="email@alstar.com">
                      </vscode-textfield>
                    </vscode-form-group>
    
                    <vscode-form-group variant="vertical">
                      <vscode-label> Password </vscode-label>
                      <vscode-textfield name="password" type="password" placeholder="Password">
                      </vscode-textfield>
                    </vscode-form-group>
    
                    <vscode-form-group variant="vertical">
                      <vscode-label> Confirm password </vscode-label>
                      <vscode-textfield name="password" type="password" placeholder="Password">
                      </vscode-textfield>
                    </vscode-form-group>
                  </vscode-form-container>
    
                <quiet-button
                  type="submit"
                  style="width: 100%; margin-top: 1rem;"
                  variant="neutral"
                >
                  Register
                </quiet-button>
              </form>
        

            </section>
        </div>
        </div>
        `,
      ),
    )
  })
}

export const styles = css`
  .register-page {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;

    .register {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1,
      p {
        margin-block: 0.5em;
      }

      form {
        max-width: 320px;
      }
    }
  }
`
