import adminPanel from './AdminPanel.ts'
import { html } from 'hono/html'
import { type HtmlEscapedString } from 'hono/utils/html'
import { studioConfig } from '../index.ts'

export default (
  content:
    | string
    | Promise<string>
    | HtmlEscapedString
    | Promise<HtmlEscapedString>,
  includeAdminPanel = true,
) => {
  const title = studioConfig.siteName ? studioConfig.siteName + ' | ' : ''

  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}Alstar Studio</title>

        <link rel="icon" type="image/svg" href="/studio/favicon.svg" />

        <meta name="color-scheme" content="light dark" />

        <script type="module" src="https://cdn.jsdelivr.net/gh/starfederation/datastar@v1.0.0-RC.6/bundles/datastar.js"></script>

        <script type="importmap">
          {
            "imports": {
              "@barba/core": "https://esm.sh/@barba/core@2.10.3/dist/barba.mjs",
              "sortablejs": "https://esm.sh/sortablejs@1.15.6/modular/sortable.core.esm.js",
              "ink-mde": "https://esm.sh/ink-mde@0.34.0"
            }
          }
        </script>

        <script src="/studio/main.js" type="module"></script>
        <link href="/studio/main.css" rel="stylesheet" />
      </head>

      <body data-barba="wrapper">
        ${includeAdminPanel
          ? html`<section style="margin-bottom: 0;">${adminPanel()}</section>`
          : html`<div></div>`}

        <main>
          <section data-barba="container" data-barba-namespace="default">
            ${content}
          </section>
        </main>
      </body>
    </html>
  `
}
