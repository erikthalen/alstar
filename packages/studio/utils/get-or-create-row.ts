import { db } from '@alstar/db'
import { query } from '../queries/index.ts'
import type {
  BlockDefStructure,
  BlocksFieldDefStructure,
  FieldDefStructure,
} from '../types.ts'
import { BlockFieldInstance } from './define.ts'

export function getOrCreateRow(props: {
  parentId: string | number | null
  name: string
  field: BlockDefStructure | BlocksFieldDefStructure | FieldDefStructure
  sortOrder?: number
  id?: number
}) {
  const { parentId, name, field, sortOrder = 0, id } = props

  if (id) {
    return query.block({
      id: id?.toString(),
    })
  }

  const data = query.block({
    parent_id: parentId?.toString() || null,
    name: name,
    sort_order: sortOrder.toString(),
  })

  if (data) return data

  const change = db.insertInto('blocks', {
    name: name?.toString(),
    label: field.label?.toString(),
    type: field.instanceOf === BlockFieldInstance ? 'blocks' : field.type?.toString(),
    sort_order: sortOrder,
    parent_id: parentId,
  })

  return query.block({ id: change.lastInsertRowid.toString() })
}
