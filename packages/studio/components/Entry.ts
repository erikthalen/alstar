import { html } from 'hono/html'
import { query } from '../queries/index.ts'
import { rootdir } from '../index.ts'
import { type Structure } from '../types.ts'
import Fields from './Fields.ts'
import { buildStructurePath } from '../utils/build-structure-path.ts'

export default (props: { entryId: number | string; structure: Structure }) => {
  const data = query.block({ id: props.entryId?.toString() })

  if (!data) return html`<p>No entry with id: "${props.entryId}"</p>`

  const blockStructure = props.structure.find(
    (block) => block.name === data.name,
  )

  const structurePath = buildStructurePath(blockStructure)

  return html`
    <div id="entry">
      <link rel="stylesheet" href="${rootdir}/components/Entry.css" />

      <div class="entry">
        ${blockStructure &&
        Fields({
          entryId: props.entryId,
          parentId: props.entryId,
          blockStructure,
          structurePath,
        })}
      </div>
    </div>
  `
}
