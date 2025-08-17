import { html } from 'hono/html'
import { query } from '../queries/index.ts'
import { rootdir, structure } from '../index.ts'
import Block from './Block.ts'

export default (props: { entryId: number }) => {
  const data = query.block({ id: props.entryId?.toString() })

  if (!data) return html`<p>No entry with id: "${props.entryId}"</p>`

  const blockStructure = structure[data.name]

  return html`
    <div id="entry">
      <div class="entry">
        ${blockStructure &&
        Block({
          entryId: props.entryId,
          parentId: props.entryId,
          blockStructure: blockStructure,
          name: data.name,
        })}
      </div>

      <!-- <pre><code>{JSON.stringify(blockStructure, null, 2)}</code></pre> -->
    </div>
  `
}
