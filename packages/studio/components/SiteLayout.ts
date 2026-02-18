import { raw, html } from 'hono/html'
import { config, studioRoot } from '../index.ts'
import { type HtmlEscapedString } from 'hono/utils/html'
import { type Context } from 'hono'
import { inlineStyles } from '#utils/inline-styles.ts'
import SiteHeader from './SiteHeader.ts'
import Widgets from './Widgets.ts'
import { css } from '@alstar/framework'
import { Widget } from '@alstar/types'

export default async (
  c: Context,
  publicFiles: string,
  widgets: Widget[],
  content: HtmlEscapedString | Promise<HtmlEscapedString>,
) => {
  const title = config.siteName ? config.siteName + ' | ' : ''

  const styles = await inlineStyles({ root: studioRoot })

  const session = c.get('session')

  return html`
    <!DOCTYPE html>
    <html lang="en" class="quiet-cloak quiet-dark quiet-zinc">
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
          src="https://cdn.jsdelivr.net/gh/starfederation/datastar@v1.0.0-RC.7/bundles/datastar.js"
        ></script>

        <!-- Quiet theme + autoloader -->
        <link rel="stylesheet" href="/studio/quiet/dist/themes/quiet.css" />
        <script type="module" src="/studio/quiet/dist/quiet.loader.js"></script>

        <script
          src="https://esm.sh/@vscode-elements/elements/dist/bundled.js"
          type="module"
          crossorigin="anonymous"
        ></script>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/vs2015.min.css"
        />

        <script type="importmap">
          {
            "imports": {
              "swup": "https://esm.sh/swup@4",
              "sortablejs": "https://esm.sh/sortablejs@1.15.6/modular/sortable.core.esm.js",
              "@quietui/quiet": "/studio/quiet/dist/quiet.js",
              "better-auth/client": "https://esm.sh/better-auth@1.3.34/client",
              "lit": "https://esm.sh/lit"
            }
          }
        </script>

        <script src="/studio/main.js" type="module"></script>
        <link href="/studio/main.css" rel="stylesheet" />

        ${raw(c.get('hot-reload'))}

        <!--  -->

        ${raw(publicFiles)}

        <style>
          ${raw(styles)}
        </style>
      </head>

      <body data-init="@get('/studio/updates')">
        <vscode-split-layout
          fixed-pane="start"
          initial-handle-position="174px"
          min-start="58px"
          style="border: none; --separator-border: transparent;"
          reset-on-dbl-click="true"
        >
          <div slot="start" class="sidebar">
            ${SiteHeader(c)}
            <!--  -->
            ${session && Widgets(c, widgets)}
          </div>

          <div slot="end">
            <main id="swup">${content}</main>
          </div>
        </vscode-split-layout>
      </body>
    </html>
  `
}
