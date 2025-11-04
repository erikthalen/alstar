import { html } from '@alstar/studio/html'
import { query } from '../index.ts'

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

                <quiet-button
                  size="xs"
                  type="submit"
                  id="remove_${block.id}"
                  icon-label="Remove ${title?.value || 'Untitled'}"
                  appearance="text"
                >
                  <quiet-icon name="trash"></quiet-icon>
                </quiet-button>

                <quiet-tooltip for="remove_${block.id}">
                  Remove ${title?.value || 'Untitled'}
                </quiet-tooltip>
              </form>
            </li>
          `
        })}
      </ul>
    </section>
  `
}
