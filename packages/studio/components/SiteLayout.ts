import { raw, html } from 'hono/html'
import { config } from '../index.ts'
import { hotReloadClient } from '@alstar/studio/hot-reload'
import { type HtmlEscapedString } from 'hono/utils/html'

export default (
  content:
    | string
    | Promise<string>
    | HtmlEscapedString
    | Promise<HtmlEscapedString>,
) => {
  const title = config.siteName ? config.siteName + ' | ' : ''

  return html`
    <!DOCTYPE html>
    <html
      lang="en"
      class="quiet-cloak quiet-dark quiet-zinc"
      data-init="@get('/studio/cqrs')"
    >
      <head>
        <!-- <script>
          const darkModeMedia = window.matchMedia(
            '(prefers-color-scheme: dark)'
          )

          const setTheme = (darkTheme) => {
            document.documentElement.classList.toggle('quiet-dark', darkTheme)
          }

          setTheme(darkModeMedia.matches)

          window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (e) => setTheme(e.matches))
        </script> -->

        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}Alstar Studio</title>

        <link rel="icon" type="image/svg" href="/studio/favicon.svg" />

        <meta name="color-scheme" content="light dark" />

        <script
          type="module"
          src="https://cdn.jsdelivr.net/gh/starfederation/datastar@v1.0.0-RC.6/bundles/datastar.js"
        ></script>

        <!-- Quiet theme + autoloader -->
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@quietui/quiet-browser@1.6.1/dist/themes/quiet.css"
        />
        <script
          type="module"
          src="https://cdn.jsdelivr.net/npm/@quietui/quiet-browser@1.6.1/dist/quiet.loader.js"
        ></script>

        <!-- Optional CSS reset -->
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@quietui/quiet-browser@1.6.1/dist/themes/restyle.css"
        />

        <script
          src="https://esm.sh/@vscode-elements/elements/dist/bundled.js"
          type="module"
          crossorigin="anonymous"
        ></script>

        <script type="importmap">
          {
            "imports": {
              "swup": "https://esm.sh/swup@4",
              "sortablejs": "https://esm.sh/sortablejs@1.15.6/modular/sortable.core.esm.js",
              "ink-mde": "https://esm.sh/ink-mde@0.34.0",
              "@quietui/quiet": "https://esm.sh/@quietui/quiet-browser@1.6.1/dist/quiet.js",
              "better-auth/client": "https://esm.sh/better-auth@1.3.34/client",
              "lit": "https://esm.sh/lit"
            }
          }
        </script>

        <script src="/studio/main.js" type="module"></script>
        <link href="/studio/main.css" rel="stylesheet" />

        ${raw(hotReloadClient(8787))}
      </head>

      <body
        data-signals:cursor="[0, 0]"
        data-on:pointermove__throttle.50ms="$cursor = [evt.clientX, evt.clientY]; @post('/studio/cqrs/cursor')"
      >
        <div id="cursors"></div>

        <main id="swup">${content}</main>
      </body>
    </html>
  `
}
