import { html } from '@alstar/studio/html'
import { query } from '../queries/index.ts'
import { studioStructure } from '../index.ts'
import Render from './Render.ts'

export default (props: { entryId: number | string }) => {
  const data = query.block({ id: props.entryId?.toString() })

  if (!data) return html`<p>No entry with id: "${props.entryId}"</p>`

  const structure = studioStructure[data.name]

  if (!structure) return html`<p>No structure of type: ${data.name}</p>`

  return html`
    <div id="entry" class="entry">
      <header>
        <h1>Entry content</h1>
      </header>

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
