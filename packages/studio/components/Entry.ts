import { html } from '@alstar/studio/html'
import { query } from '../queries/index.ts'
import { config } from '../index.ts'
import Render from './Render.ts'
import EntryHeader from './EntryHeader.ts'

export default (props: { entryId: number | string }) => {
  const data = query.root({ id: props.entryId?.toString() })

  if (!data) return html`<p>No entry with id: "${props.entryId}"</p>`

  const structure = config.structure[data.name]

  if (!structure) return html`<p>No structure of type: ${data.name}</p>`

  return html`
    <div id="entry" class="entry" data-signals:entry.id="${props.entryId}">
      ${EntryHeader(props.entryId)}

      <div class="content">
        ${Render({
          entryId: props.entryId,
          parentId: props.entryId,
          structure: structure,
          name: data.name,
        })}
      </div>
    </div>
  `
}
