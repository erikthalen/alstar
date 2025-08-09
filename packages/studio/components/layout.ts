import adminPanel from './AdminPanel/AdminPanel.ts'
import { html } from 'hono/html'
import { type HtmlEscapedString } from 'hono/utils/html'
import { rootdir, studioConfig } from '../index.ts'
import { type Structure } from '../types.ts'

export default (props: {
  content:
    | string
    | Promise<string>
    | HtmlEscapedString
    | Promise<HtmlEscapedString>
  structure: Structure
}) => {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          ${studioConfig.siteName ? studioConfig.siteName + ' | ' : ''}Alstar
          Studio
        </title>

        <link
          rel="icon"
          type="image/svg"
          href="${rootdir}/public/favicon.svg"
        />

        <meta name="color-scheme" content="light dark" />

        <link rel="stylesheet" href="${rootdir}/public/main.css" />

        <script
          type="module"
          src="https://cdn.jsdelivr.net/gh/starfederation/datastar@main/bundles/datastar.js"
        ></script>

        <script type="importmap">
          {
            "imports": {
              "@barba/core": "https://esm.sh/@barba/core@2.10.3/dist/barba.mjs",
              "sortablejs": "https://esm.sh/sortablejs@1.15.6/modular/sortable.core.esm.js",
              "ink-mde": "https://esm.sh/ink-mde@0.34.0"
            }
          }
        </script>
      </head>

      <body data-barba="wrapper">
        <section>${adminPanel(props.structure)}</section>

        <main>
          <section data-barba="container" data-barba-namespace="default">
            ${props.content}
          </section>
        </main>

        <script src="${rootdir}/public/main.js" type="module"></script>
      </body>
    </html>
  `
}
