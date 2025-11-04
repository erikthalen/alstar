import fsp from 'node:fs/promises'
import path from 'node:path'
import { html } from '@alstar/studio/html'

export default async () => {
  let backups: string[] = await fsp.readdir('./backups').catch(() => [])

  async function getFilesize(filename: string) {
    try {
      const stats = await fsp.stat(path.join('./backups', filename))
      return stats.size
    } catch (error) {
      console.log(error)
      return ''
    }
  }

  return html`
    <article data-signals="{ status: null, message: '' }">
      <table class="striped">
        <thead>
          <tr>
            <th scope="col">File</th>
            <th scope="col">Filesize</th>
            <th scope="col">Download</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          ${backups.map(
            async (filename) => html`
              <tr>
                <th scope="row"><code>${filename}</code></th>

                <th scope="row">
                  <code>
                    <quiet-bytes
                      value="${await getFilesize(filename)}"
                    ></quiet-bytes>
                  </code>
                </th>

                <th>
                  <quiet-button
                    href="/studio/backups/${filename}"
                    icon-label="Download"
                    appearance="text"
                    target="_blank"
                    download
                  >
                    <quiet-icon name="download"></quiet-icon>
                  </quiet-button>
                </th>
                <th>
                  <form
                    data-on:submit="@delete('/studio/api/backup', {
                      contentType: 'form',
                      headers: {
                        render: 'Settings'
                      }
                    })"
                  >
                    <input type="hidden" name="filename" value="${filename}" />

                    <quiet-button icon-label="Delete" variant="destructive">
                      <quiet-icon name="trash"></quiet-icon>
                    </quiet-button>
                  </form>
                </th>
              </tr>
            `
          )}
        </tbody>
      </table>

      <form
        data-on:submit="@post('/studio/api/backup', {
          contentType: 'form',
          headers: {
            render: 'Settings'
          }
        })"
      >
        <quiet-button type="submit">
          <quiet-icon slot="start" name="database-export"></quiet-icon>
          Backup database
        </quiet-button>
      </form>

      <quiet-divider></quiet-divider>

      <quiet-spoiler effect="noise">
        <span slot="label">
          <quiet-icon name="crane"></quiet-icon>
          WIP
        </span>

        <form
          data-on:submit="@post('/studio/api/backup', { contentType: 'form' })"
        >
          <quiet-file-input
            name="file"
            label="Select a file"
            description="Files must be 20MB or less"
          ></quiet-file-input>

          <br />

          <quiet-button type="submit">
            <quiet-icon slot="start" name="database-import"></quiet-icon>
            Restore database
          </quiet-button>
        </form>
      </quiet-spoiler>
    </article>
  `
}
