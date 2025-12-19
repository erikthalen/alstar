import { html } from 'hono/html'
import { config } from '../index.ts'
import Render from './Render.ts'
import EntryHeader from './EntryHeader.ts'
import { getField } from '../helpers/sql/index.ts'

export default ({ entryId }: { entryId: `${number}` | number }) => {
  const data = getField({ id: entryId })

  if (!data)
    return html`<div id="entry" style="padding: var(--unit)">
      <quiet-callout variant="destructive" class="ts-xs">
        <quiet-icon slot="icon" name="file-unknown"></quiet-icon>
        No entry with id: <code>${entryId}</code>
      </quiet-callout>
    </div>`

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
