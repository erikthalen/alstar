import { html } from 'hono/html'
import { query } from '../index.ts'
import * as icons from './icons.ts'

export default ({ name }: { name: string }) => {
  const entries = query.blocks({ parent_id: null, status: 'enabled', name })

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
              <a href="/studio/entry/${block.id}" id="block_link_${block.id}">
                ${title?.value || 'Untitled'}
              </a>

              <form
                data-on:submit="@delete('/studio/api/block', {
                  contentType: 'form',
                  headers: {
                    render: 'AdminPanel'
                  }
                })"
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
