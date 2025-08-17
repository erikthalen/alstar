import { html } from 'hono/html'
import { query } from '../index.ts'
import * as icons from './icons.ts'

export default () => {
  const entries = query.blocks({ parent_id: null, status: 'enabled' })

  return html`
    <section id="entries">
      <ul>
        ${entries?.map((block) => {
          const title = query.block({
            parent_id: block.id.toString(),
            name: 'title',
          })

          return html`
            <li>
              <a href="/admin/entry/${block.id}" id="block_link_${block.id}">
                ${title?.value || 'Untitled'}
              </a>

              <form
                data-on-submit="@delete('/admin/api/block', { contentType: 'form' })"
              >
                <input type="hidden" name="id" value="${block.id}" />
                <button
                  data-tooltip="Remove"
                  data-placement="right"
                  class="ghost text-secondary"
                  style="padding: 0"
                  type="submit"
                >
                  ${icons.trash}
                </button>
              </form>
            </li>
          `
        })}
      </ul>
    </section>

  `
}
