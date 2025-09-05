import { db } from '@alstar/db'
import { html } from 'hono/html'
import { sql } from '../utils/sql.ts'

export default () => {
  const users = db.database
    .prepare(sql`
      select
        email
      from
        users
    `)
    .all()

  return html`
    <article>
      <header>Users</header>
      <ul>
        ${users.map(user => html`<li>${user.email}</li>`)}
      </ul>
      <article>
        <header>Register user</header>
        <form
          data-on-submit="@post('/studio/api/auth/register', { contentType: 'form' })"
        >
          <label for="register_email"><small>Email</small></label>
          <input
            id="register_email"
            name="email"
            type="email"
            placeholder="Email"
          />
          <label for="register_password"><small>Password</small></label>
          <input
            id="register_password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <br />
          <button type="submit" class="ghost">Create</button>
        </form>
      </article>
    </article>
  `
}
