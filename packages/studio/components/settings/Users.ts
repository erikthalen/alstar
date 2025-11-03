import { db } from '@alstar/db'
import { html } from 'hono/html'
import { sql } from '../../utils/sql.ts'

export default () => {
  const users = db.database
    .prepare(
      sql`
      select
        email
      from
        users
    `
    )
    .all()

  return html`
    <article>
      <table>
        <thead>
          <tr>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          ${users.map(
            (user) => html`
              <tr>
                <th scope="row">${user.email}</th>
              </tr>
            `
          )}
        </tbody>
      </table>

      <hr />

      <form
        data-on:submit="@post('/studio/api/auth/register', { contentType: 'form' })"
      >
        <quiet-card style="max-width: 340px;">
          <h3>Register user</h3>

          <br />

          <quiet-text-field
            name="email"
            label="Email"
            with-clear
          ></quiet-text-field>

          <br />

          <quiet-text-field
            name="password"
            type="password"
            label="Password"
            with-clear
          ></quiet-text-field>

          <br />

          <quiet-button type="submit" variant="primary"> Create </quiet-button>
        </quiet-card>
      </form>
    </article>
  `
}
