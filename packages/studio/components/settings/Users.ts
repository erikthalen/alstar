import { html } from 'hono/html'
import { sql } from '../../utils/sql.ts'
import { database } from '../../index.ts'

export default async () => {
  const users = database
    .prepare(
      sql`
      select
        name
      from
        user
    `,
    )
    .all()

  return html`
    <article>
      <table>
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          ${users.map(
            (user) => html`
              <tr>
                <th scope="row">${user.username}</th>
              </tr>
            `,
          )}
        </tbody>
      </table>

      <hr />

      <form data-on:submit="@post('/studio/api/auth/register', { contentType: 'form' })">
        <quiet-card style="max-width: 340px;">
          <h3>Register user</h3>

          <br />

          <quiet-text-field name="email" label="Email" with-clear></quiet-text-field>

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
