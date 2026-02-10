import { html } from 'hono/html'

export default () => {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Alstar Docs</title>
      </head>
      <body>
        <p>Hello world, from docs</p>
      </body>
    </html>
  `
}
