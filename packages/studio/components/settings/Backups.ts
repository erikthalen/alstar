import fsp from 'node:fs/promises'
import path from 'node:path'
import { html } from 'hono/html'

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
    <article id="backup" data-signals="{ status: null, message: '' }">
      <vscode-table
        zebra
        bordered-rows
        columns='["auto", "180px", "120px", "80px"]'
        min-column-width="5"
      >
        <vscode-table-header slot="header">
          <vscode-table-header-cell>File</vscode-table-header-cell>
          <vscode-table-header-cell>Filesize</vscode-table-header-cell>
          <vscode-table-header-cell>Download</vscode-table-header-cell>
          <vscode-table-header-cell>Delete</vscode-table-header-cell>
        </vscode-table-header>
        <vscode-table-body slot="body">
          ${backups.map(
            async (filename) => html`
              <vscode-table-row>
                <vscode-table-cell scope="row"
                  ><code>${filename}</code></vscode-table-cell
                >

                <vscode-table-cell scope="row">
                  <code>
                    <quiet-bytes
                      value="${await getFilesize(filename)}"
                    ></quiet-bytes>
                  </code>
                </vscode-table-cell>

                <vscode-table-cell>
                  <quiet-button
                    href="/studio/backups/${filename}"
                    icon-label="Download"
                    appearance="text"
                    target="_blank"
                    download
                    size="xs"
                  >
                    <quiet-icon name="download"></quiet-icon>
                  </quiet-button>
                </vscode-table-cell>
                <vscode-table-cell>
                  <form
                    data-on:submit="@delete('/studio/api/backup', {
                      contentType: 'form',
                      headers: {
                        render: 'settings/Backups'
                      }
                    })"
                  >
                    <input type="hidden" name="filename" value="${filename}" />

                    <quiet-button
                      type="submit"
                      icon-label="Delete"
                      variant="destructive"
                      size="xs"
                    >
                      <quiet-icon name="trash"></quiet-icon>
                    </quiet-button>
                  </form>
                </vscode-table-cell>
              </vscode-table-row>
            `,
          )}
        </vscode-table-body>
      </vscode-table>

      <form
        data-on:submit="@post('/studio/api/backup', {
          contentType: 'form',
          headers: {
            render: 'settings/Backups'
          }
        })"
      >
        <quiet-button type="submit" size="xs">
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

          <quiet-button type="submit" size="xs">
            <quiet-icon slot="start" name="database-import"></quiet-icon>
            Restore database
          </quiet-button>
        </form>
      </quiet-spoiler>
    </article>
  `
}
