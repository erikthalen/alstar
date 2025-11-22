import { Field } from './fields/index.ts'
import type {
  BlocksFieldDefStructure,
  FieldDefStructure,
  ReferenceFieldStructure,
} from '../types.ts'
import BlockFieldRenderer from './BlockFieldRenderer.ts'
import { BlockFieldInstance } from '../utils/define.ts'
import { html } from 'hono/html'

export default (props: {
  entryId: number | string
  parentId: number | string
  structure: FieldDefStructure | BlocksFieldDefStructure
  id?: number
  name: string
}) => {
  const { entryId, parentId, structure, name, id } = props

  if (structure.instanceOf === BlockFieldInstance) {
    return BlockFieldRenderer({ entryId, parentId, name, structure, id })
  }

  const fieldProps = { entryId, parentId, name, id, structure }

  switch (structure.type) {
    case 'text': {
      return html`<div class="field">${Field.Text(fieldProps)}</div>`
    }

    case 'title': {
      return html`<div class="field">${Field.Title(fieldProps)}</div>`
    }

    case 'slug': {
      return html`<div class="field">${Field.Slug(fieldProps)}</div>`
    }

    case 'markdown': {
      return html`<div class="field">${Field.Markdown(fieldProps)}</div>`
    }

    case 'image': {
      return html`<div class="field">${Field.Image(fieldProps)}</div>`
    }

    case 'reference': {
      return html`<div class="field">
        ${Field.Reference({ entryId, parentId, name, id, structure })}
      </div>`
    }

    case 'svg': {
      return html`<div class="field">${Field.SVG(fieldProps)}</div>`
    }
  }
}
