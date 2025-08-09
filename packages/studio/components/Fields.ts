import { html } from 'hono/html'
import { type Block } from '../types.ts'
import { type HtmlEscapedString } from 'hono/utils/html'
import Field from './Field.ts'
import {
  buildStructurePath,
  type StructurePath,
} from '../utils/build-structure-path.ts'

const Fields = (props: {
  entryId: string | number
  parentId: string | number
  blockStructure: Block
  structurePath: StructurePath
}): HtmlEscapedString | Promise<HtmlEscapedString> => {
  const updatedPath = buildStructurePath(
    props.blockStructure,
    props.structurePath,
  )

  return html`
    <div class="fields">
      ${props.blockStructure.fields
        ? props.blockStructure.fields?.map((field, idx) => {
            return Field({
              entryId: props.entryId,
              parentId: props.parentId,
              blockStructure: field,
              sortOrder: idx,
              structurePath: [...updatedPath, 'fields'],
            })
          })
        : Field({
            entryId: props.entryId,
            parentId: props.parentId,
            blockStructure: props.blockStructure,
            structurePath: updatedPath,
          })}
    </div>
  `
}

export default Fields
