import { Field } from './fields/index.ts'
import type { BlocksFieldDefStructure, FieldDefStructure } from '../types.ts'
import BlockFieldRenderer from './BlockFieldRenderer.ts'
import { BlockFieldInstance } from '../utils/define.ts'
import { html } from '@alstar/studio/html'

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

  switch (structure.type) {
    case 'text': {
      return html`<div class="field">${Field.Text({ entryId, parentId, name, id, structure })}</div>`
    }

    case 'slug': {
      return html`<div class="field">${Field.Slug({ entryId, parentId, name, id, structure })}</div>`
    }

    case 'markdown': {
      return html`<div class="field">${Field.Markdown({ entryId, parentId, name, id, structure })}</div>`
    }

    case 'image': {
      return html`<div class="field">${Field.Text({ entryId, parentId, name, structure, id })}</div>`
    }

    case 'reference': {
      return html`<div class="field">${Field.Reference({ entryId, parentId, name, structure, id })}</div>`
    }
    
    case 'svg': {
      return html`<div class="field">${Field.SVG({ entryId, parentId, name, structure, id })}</div>`
    }
  }
}
