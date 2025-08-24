import { html } from 'hono/html'
import type { HtmlEscapedString } from 'hono/utils/html'
import FieldRenderer from './FieldRenderer.ts'
import BlockFieldRenderer from './BlockFieldRenderer.ts'
import BlockRenderer from './BlockRenderer.ts'
import {
  BlockFieldInstance,
  BlockInstance,
  FieldInstance,
} from '../utils/define.ts'
import type {
  BlockDefStructure,
  BlocksFieldDefStructure,
  FieldDefStructure,
} from '../types.ts'

export default (props: {
  entryId: number
  parentId: number
  structure: BlockDefStructure | FieldDefStructure | BlocksFieldDefStructure
  id?: number
  name: string
  sortOrder?: number
}): HtmlEscapedString | Promise<HtmlEscapedString> | string => {
  const { entryId, parentId, structure, name, id } = props

  if (!structure) return html`<p>No block</p>`

  try {
    switch (structure.instanceOf) {
      case FieldInstance: {
        return FieldRenderer({ entryId, parentId, id, structure, name })
      }

      case BlockFieldInstance: {
        return BlockFieldRenderer({ entryId, parentId, id, structure, name })
      }

      case BlockInstance: {
        return BlockRenderer({ entryId, parentId, structure, id })
      }
    }
  } catch (error) {
    return html`<p>Error rendering "${name}"</p>`
  }
}
