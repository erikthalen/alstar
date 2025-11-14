import crypto from 'node:crypto'
import { html } from '@alstar/studio/html'
import { defineEntry } from '../utils/define.ts'
import SiteLayout from '../components/SiteLayout.ts'
import { getEnv } from '@alstar/studio/env'

export default defineEntry(async () => {
  const env = await getEnv()

  const randomPassword = crypto.randomBytes(8).toString('hex')

  return SiteLayout(
    html` <div class="setup">
      <quiet-card style="width: 100%; max-width: 480px;">
        <h3>Create admin user</h3>

        <p>
          The Studio requires an admin user. The credentials for the admin user
          is stored in the <code>.env</code> file.
        </p>

        <form
          style="display: grid;"
          data-on:submit="@post('/studio/api/auth/create-admin', { contentType: 'form' })"
        >
          <quiet-text-field
            required
            name="username"
            label="Username"
            value="${env.ALSTAR_ADMIN_USER || 'admin'}"
            ${env.ALSTAR_ADMIN_USER ? 'disabled' : ''}
          >
            <span slot="description">
              <code>ALSTAR_ADMIN_USER</code> in the <code>.env</code> file.
            </span>
          </quiet-text-field>

          <br />

          <quiet-text-field
            required
            name="password"
            label="Password"
            value="${env.ALSTAR_ADMIN_PASSWORD || randomPassword}"
            ${env.ALSTAR_ADMIN_PASSWORD ? 'disabled' : ''}
          >
            <span slot="description">
              <code>ALSTAR_ADMIN_PASSWORD</code> in the <code>.env</code> file.
            </span>
          </quiet-text-field>

          <br />

          <quiet-button
            style="margin-left: auto"
            type="submit"
            variant="primary"
          >
            Create admin user
          </quiet-button>
        </form>
      </quiet-card>
    </div>`
  )
})
