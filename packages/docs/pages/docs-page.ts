import { defineEntry, html, query } from '@alstar/studio'
import SiteLayout from '../components/SiteLayout.ts'
import { marked } from 'marked'
import { raw } from '@alstar/studio/utils/html.ts'
import MainMenu from '../components/MainMenu.ts'

export default defineEntry(async c => {
  const slug = c.req.url.split('/').at(-1)

  try {
    const page = query.root({ type: 'slug', value: slug })

    if (!page) return html`<p>404 - not found</p>`

    const value = page?.fields?.markdown.value
    const output = value ? raw(marked.parse(value)) : ''

    return SiteLayout(
      html` <main class="layout">
        <section class="side-panel">${MainMenu()}</section>
        <div class="scroll">
          <section class="canvas">${output}</section>
        </div>
      </main>`,
      page.fields.title?.value
    )
  } catch (error) {
    return html`<p>Noope</p>`
  }
})
