import { html } from '@alstar/studio'
import * as icons from './Icons.ts'

export default () => {
  return html`
    <link rel="stylesheet" href="/components/Welcome/Welcome.css" />

    <section class="welcome">
      <div>
        <h1>
          <a href="/" aria-label="Go to Alsters homepage"> ${icons.Logo} </a>
        </h1>

        <ol>
          <li>Get started by editing <code>pages/index.ts</code></li>
          <li>Go to <a href="/admin">/admin</a> to add content</li>
        </ol>
      </div>
    </section>
  `
}
