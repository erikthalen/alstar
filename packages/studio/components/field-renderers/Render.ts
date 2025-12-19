import { html } from 'hono/html'
import FieldRenderer from './FieldRenderer.ts'
import BlockFieldRenderer from './BlockFieldRenderer.ts'
import BlockRenderer from './BlockRenderer.ts'

import { type HtmlEscapedString } from 'hono/utils/html'
import type { InstanceType } from '#helpers/structure/types.ts'
import {
  BlockFieldInstance,
  BlockInstance,
  CollectionInstance,
  FieldInstance,
  SingleInstance,
} from '#helpers/structure/index.ts'

export default (props: {
  parentId: number | string
  structure: InstanceType
  id?: number
  name: string
  sortOrder?: number
}): HtmlEscapedString | Promise<HtmlEscapedString> => {
  const { parentId, structure, name, id } = props

  if (!structure) return html`<p>No block</p>`

  try {
    switch (structure.instanceOf) {
      case FieldInstance: {
        return FieldRenderer({ parentId, id, structure, name })
      }

      case BlockFieldInstance: {
        return BlockFieldRenderer({ parentId, id, structure, name })
      }

      case BlockInstance:
      case SingleInstance:
      case CollectionInstance: {
        return BlockRenderer({ parentId, structure, id })
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
