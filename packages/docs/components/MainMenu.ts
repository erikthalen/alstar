import { query, version } from '@alstar/studio'
import { getEntry, getFields } from '@alstar/studio/sql'
import { html } from 'hono/html'
import { raw } from 'hono/html'

export default () => {
  const settings = getEntry({ name: 'settings' })
  const pages = getFields({ name: 'page' })

  return html`
    <div class="main-menu">
      <h1>
        <a href="/" aria-label="Go to Alstars homepage">
          ${raw(settings?.fields.logo.value)}
        </a>

        <span><code class="version">${version}</code></span>
      </h1>

      <aside>
        <nav>
          <ul>
            ${pages.map((page) => {
              const title = query.block({ name: 'title', parent_id: page.id })
              const slug = query.block({ name: 'slug', parent_id: page.id })

              return html`
                <li>
                  <a href="${slug?.value}"> ${title?.value} </a>
                </li>
              `
            })}
          </ul>
        </nav>
      </aside>

      <a
        class="github-link"
        href="https://github.com/erikthalen/alstar"
        aria-title="Link to github repo"
      >
        <img src="github.png" />
      </a>
    </div>
  `
}
