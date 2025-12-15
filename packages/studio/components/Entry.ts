import { html } from 'hono/html'
import { config } from '../index.ts'
import Render from './Render.ts'
import EntryHeader from './EntryHeader.ts'
import { getField } from '../helpers/sql/index.ts'

export default ({ entryId }: { entryId: number | string }) => {
  const data = getField({ id: entryId })

  if (!data) return html`<p>No entry with id: "${entryId}"</p>`

  const structure = config.structure[data.name]

  if (!structure) return html`<p>No structure of type: ${data.name}</p>`

  return html`
    <div id="entry" class="entry" data-signals:entry.id="${entryId}">
      ${EntryHeader({ entryId })}

      <div class="content">
        ${Render({
          parentId: entryId,
          structure: structure,
          name: data.name,
        })}
      </div>
    </div>
  `
}
