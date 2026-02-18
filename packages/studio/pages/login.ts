import { Context } from 'hono'
import { html } from 'hono/html'

export default (c: Context) => {
  return html`<div class="setup background-pattern">
    <form class="login-form" data-on:submit__prevent="window.auth.login(new FormData(evt.target))">
      <vscode-form-container>
        <vscode-form-group variant="vertical">
          <vscode-label> Email </vscode-label>
          <vscode-textfield name="email" type="email"> </vscode-textfield>
        </vscode-form-group>

        <vscode-form-group variant="vertical">
          <vscode-label> Password </vscode-label>
          <vscode-textfield name="password" type="password"> </vscode-textfield>
        </vscode-form-group>
      </vscode-form-container>

      <quiet-button
        size="xs"
        type="submit"
        style="width: 100%; margin-top: 1rem;"
        variant="primary"
      >
        Login
      </quiet-button>
    </form>
  </div>`
}
