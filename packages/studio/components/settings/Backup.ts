import fsp from 'node:fs/promises'
import { html } from 'hono/html'
import * as icons from '../icons.ts'

export default async () => {
  const backupDir = './backups'
  const backups = await fsp.readdir(backupDir)

  return html`
    <article data-signals="{ status: null, message: '' }">
      <header>Backup</header>

      <table class="striped">
        <thead>
          <tr>
            <th scope="col">File</th>
            <th scope="col">Download</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          ${backups.map(
            (filename) => html`
              <tr>
                <th scope="row">${filename}</th>
                <th>
                  <a
                    href="/studio/backups/${filename}"
                    role="button"
                    target="_blank"
                    download
                    class="ghost square"
                    aria-label="Download backup"
                  >
                    ${icons.download}
                  </a>
                </th>
                <th>
                  <form
                    data-on-submit="@delete('/studio/api/backup', {
                      contentType: 'form',
                      headers: {
                        render: 'Settings'
                      }
                    })"
                  >
                    <input type="hidden" name="filename" value="${filename}" />
                    <button class="ghost square">${icons.trash}</button>
                  </form>
                </th>
              </tr>
          `,
          )}
        </tbody>
      </table>

      <form
        data-on-submit="@post('/studio/api/backup', {
          contentType: 'form',
          headers: {
            render: 'Settings'
          }
        })"
      >
        <button type="submit">Backup database</button>
      </form>

      <hr>

      <form
        data-on-submit="@post('/studio/api/backup', { contentType: 'form' })"
      >
        <input type="file" name="file" />
        <button type="submit" class="ghost">Restore database</button>
        <!-- <p
          data-style-color="$status === 200 ? 'green' : 'red'"
          data-text="$message || '&nbsp;'"
        ></p> -->
      </form>
    </article>
`
}
