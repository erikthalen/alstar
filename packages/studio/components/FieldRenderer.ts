import { Field } from './fields/index.ts'
import type { BlocksFieldDefStructure, FieldDefStructure } from '../types.ts'
import BlockFieldRenderer from './BlockFieldRenderer.ts'
import { BlockFieldInstance } from '../utils/define.ts'

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
      return Field.Text({ entryId, parentId, name, id, structure })
    }

    case 'slug': {
      return Field.Slug({ entryId, parentId, name, id, structure })
    }

    case 'markdown': {
      return Field.Markdown({ entryId, parentId, name, id, structure })
    }

    case 'image': {
      return Field.Text({ entryId, parentId, name, structure, id })
    }

    case 'reference': {
      return Field.Reference({ entryId, parentId, name, structure, id })
    }
  }
}
