import { html } from 'hono/html'
import type { Block, BlockDef, FieldDef } from '../types.ts'
import { type HtmlEscapedString } from 'hono/utils/html'
import { Field } from './fields/index.ts'

export default (props: {
  entryId: number
  parentId: number
  blockStructure: BlockDef | Block | FieldDef
  name: string
  sortOrder?: number
}): HtmlEscapedString | Promise<HtmlEscapedString> => {
  const { entryId, parentId, blockStructure, name, sortOrder = 0 } = props

  if (!blockStructure) return html`<p>No block</p>`

  let entries: [string, BlockDef | Block | FieldDef][] = []

  const fieldTypes = ['text', 'image', 'markdown', 'slug']

  try {
    if (fieldTypes.includes(blockStructure.type)) {
      entries = [[name, blockStructure]]
    } else if (blockStructure.type === 'blocks') {
      entries = Object.entries(blockStructure.children)
    } else if (blockStructure.fields) {
      entries = Object.entries(blockStructure.fields)
    } else {
      console.log(blockStructure)
    }
  } catch (error) {
    console.log(error)
  }

  return html`
    ${entries.map(([name, field]) => {
      switch (field.type) {
        case 'text': {
          return Field.Text({ entryId, parentId, name, field, sortOrder })
        }
        case 'slug': {
          return Field.Text({ entryId, parentId, name, field, sortOrder })
        }
        case 'markdown': {
          return Field.Text({ entryId, parentId, name, field, sortOrder })
        }
        case 'image': {
          return Field.Text({ entryId, parentId, name, field, sortOrder })
        }
        case 'blocks': {
          return Field.Blocks({ entryId, parentId, name, field, sortOrder })
        }
      }
    })}`
}
