import { html } from 'hono/html'
import FieldRenderer from './FieldRenderer.ts'
import BlockFieldRenderer from './BlockFieldRenderer.ts'
import BlockRenderer from './BlockRenderer.ts'

import { type HtmlEscapedString } from 'hono/utils/html'
import {
  BlockFieldInstance,
  BlockID,
  BlockInstance,
  CollectionInstance,
  FieldInstance,
  InstanceType,
  SingleInstance,
} from '@alstar/types'

export default (props: {
  parentId: number | string
  structure: InstanceType
  id?: BlockID
  name: string
  sortOrder?: number
}): HtmlEscapedString | Promise<HtmlEscapedString> => {
  const { parentId, structure, name, id } = props

  if (!structure) return html`<p>No block</p>`

  try {
    switch (structure.instanceOf) {
      case FieldInstance: {
        return FieldRenderer({ parentId, structure, name })
      }

      case BlockFieldInstance: {
        return BlockFieldRenderer({ parentId, id, structure, name })
      }

      case BlockInstance:
      case SingleInstance:
      case CollectionInstance: {
        return BlockRenderer({ parentId, structure, id })
      }

      default: {
        return html`<p>Received nonexisting InstanceType</p>`
      }
    }
  } catch (error) {
    console.log(error)

    return html`
      <p>Error rendering "${name}"</p>
      <pre><code>${JSON.stringify(error, null, 2)}</code></pre>
    `
  }
}
