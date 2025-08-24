import { html } from 'hono/html'
import { defineEntry } from '../utils/define.ts'

import SiteLayout from '../components/SiteLayout.ts'
import { studioStructure } from '../index.ts'

const codeBlock = html`<code><span style="color: #c678dd;">await</span> <span style="color: #61aeee;">createStudio</span>([
  {
    <span style="color: #d19a66;">name</span>: <span style="color: #98c379;">'entry'</span>,
    <span style="color: #d19a66;">label</span>: <span style="color: #98c379;">'Entry'</span>,
    <span style="color: #d19a66;">type</span>: <span style="color: #98c379;">'entry'</span>,
    <span style="color: #d19a66;">fields</span>: [
      {
        <span style="color: #d19a66;">name</span>: <span style="color: #98c379;">'title'</span>,
        <span style="color: #d19a66;">label</span>: <span style="color: #98c379;">'Title'</span>,
        <span style="color: #d19a66;">type</span>: <span style="color: #98c379;">'text'</span>,
      }
    ]
  }
])</code>`

export default defineEntry(() => {
  const Discamer = html`
    <div class="disclamer">
      <article>
        <header>No structure found</header>
        <p>The Studio needs to be initialized with a structure:</p>
        <pre>${codeBlock}</pre>
      </article>
    </div>`

  return SiteLayout({ content: !Object.values(studioStructure).length ? Discamer : '' })
})
