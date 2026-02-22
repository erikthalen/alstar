import { css } from '@alstar/framework'
import { Context } from 'hono'
import { html } from 'hono/html'

export default (c: Context) => {
  return html` <div class="login-page">
      <section class="intro">
        <h1>Welcome to Alstar Studio</h1>

        <p class="py-3">Login to access your studio.</p>

        <login-form>
          <form>
            <quiet-text-field
              required
              label="Email"
              name="email"
              type="email"
              placeholder="email@alstar.com"
            >
            </quiet-text-field>

            <quiet-text-field
              required
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
            >
            </quiet-text-field>

            <quiet-button type="submit" style="width: 100%; margin-top: 1rem;" variant="primary">
              Login
            </quiet-button>
          </form>
        </register-form>
      </section>
    </div>`
}

export const styles = css`
  .login-page {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .intro {
      width: 100%;
      max-width: 320px;
    }

    h1,
    p {
      margin-block: 0.5em;
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`
