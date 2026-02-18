import { css } from '@alstar/framework'
import { html } from 'hono/html'

export default () => {
  return html` <div class="register-page">
    <section class="intro">
      <h1>Welcome to Alstar Studio</h1>

      <p class="py-3">Setup the studio by creating an admin user.</p>

      <register-form>
        <form>
          <vscode-form-container>
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
              <vscode-textfield name="password_2" type="password" placeholder="Password">
              </vscode-textfield>
            </vscode-form-group>
          </vscode-form-container>

          <quiet-button type="submit" style="width: 100%; margin-top: 1rem;" variant="primary">
            Register
          </quiet-button>
        </form>
      </register-form>
    </section>
  </div>`
}

export const styles = css`
  .register-page {
    height: 100%;
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
`
