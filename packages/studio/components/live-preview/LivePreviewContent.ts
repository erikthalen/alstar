import { html } from 'hono/html'
import { raw } from 'hono/html'
import { getEntry } from '../../helpers/db/sql/index.ts'
import { codeToHtml } from 'shiki'
import { css } from '@alstar/framework'

export default async ({ entryId }: { entryId: number | string }) => {
  const data = getEntry({ id: entryId })

  if (!data) {
    return html`<div id="live_preview">
        <div style="padding: 1rem;">
          <quiet-callout variant="destructive">
            <quiet-icon slot="icon" name="file-unknown"></quiet-icon>
            No entry with id: "<code>${entryId}</code>"
          </quiet-callout>
        </div>
      </div>`
  }

  const code = JSON.stringify(data, null, 2)

  const highlighted = await codeToHtml(code, {
    lang: 'json',
    themes: {
      light: 'github-light',
      dark: 'dark-plus',
    },
  })

  return html`<div id="live_preview">${raw(highlighted)}</div>`
}

export const styles = css`
  #live_preview {
    display: contents;

    > pre {
      margin: 0;
      padding-block: 1rem;
    }
  }

  .quiet-dark {
    .shiki,
    .shiki span {
      color: var(--shiki-dark) !important;
      background-color: var(--shiki-dark-bg) !important;
      /* Optional, if you also want font styles */
      font-style: var(--shiki-dark-font-style) !important;
      font-weight: var(--shiki-dark-font-weight) !important;
      text-decoration: var(--shiki-dark-text-decoration) !important;
    }
  }
`
