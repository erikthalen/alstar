import { html, type HtmlEscapedString } from '@alstar/studio'
import MainMenu from './MainMenu.ts'

export default (
  content: string | HtmlEscapedString | Promise<HtmlEscapedString>
) => {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Alstar Docs</title>

        <link rel="icon" type="image/svg" href="favicon.svg" />

        <meta name="color-scheme" content="light dark" />

        <link
          rel="stylesheet"
          href="https://unpkg.com/@highlightjs/cdn-assets@11.11.1/styles/github.min.css"
        />
        <script src="https://unpkg.com/@highlightjs/cdn-assets@11.11.1/highlight.min.js"></script>
        <script src="https://unpkg.com/@highlightjs/cdn-assets@11.11.1/languages/xml.min.js"></script>

        <script src="refresh-client.js"></script>
        <link rel="stylesheet" href="main.css" />

        <script defer>
          hljs.highlightAll()
        </script>
      </head>
      <body>
        <main class="layout">
          <section class="side-panel">${MainMenu()}</section>
          <div class="scroll">
            <section class="canvas">${content}</section>
          </div>
        </main>
      </body>
    </html>
  `
}
