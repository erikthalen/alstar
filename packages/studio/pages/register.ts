import { html } from 'hono/html'
import { defineEntry } from '../utils/define.ts'
import SiteLayout from '../components/SiteLayout.ts'

export default defineEntry((c) => {
  return SiteLayout(
    html`
      <div class="register-form" style="width: 300px; margin: auto;">
        <article>
          <header>Register user</header>
          <form
            data-signals="{ status: 0 }"
            data-on:submit="@post('/studio/api/auth/register', { contentType: 'form' })"
            data-on:signal-patch="patch.status === 200 && window.location.reload()"
          >
            <label for="email">Email</label>
            <input id="email" name="email" type="text" placeholder="Email" style="width: 100%" />
            <label for="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              style="width: 100%"
            />
            <br />
            <button style="width: 100%;">Register</button>
          </form>
        </article>
      </div>
  `,
    false,
  )
})
