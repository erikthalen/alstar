import { html } from '@alstar/studio/html'
import * as icons from './Icons.ts'

export default () => {
  return html`
    <section class="welcome">
      <div>
        <h1>
          <a href="/" aria-label="Go to Alsters homepage"> ${icons.Logo} </a>
        </h1>

        <ol>
          <li>Get started by editing <code>pages/index.ts</code></li>
          <li>Go to <a href="/studio">/studio</a> to add content</li>
        </ol>
      </div>
    </section>
  `
}
