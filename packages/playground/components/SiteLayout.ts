import { html, type HtmlEscapedString } from '@alstar/studio/html'

export default (
  content: string | HtmlEscapedString | Promise<HtmlEscapedString>
) => {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Alstar</title>

        <link rel="icon" type="image/svg" href="/favicon.svg" />
        
        <meta name="color-scheme" content="light dark" />
        
        <script src="refresh-client.js"></script>
        <link rel="stylesheet" href="/main.css" />
      </head>
      <body>
        ${content}
      </body>
    </html>
  `
}
