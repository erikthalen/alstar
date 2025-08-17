import { db } from '@alstar/db'
import { query } from '../queries/index.ts'
import type { Block, FieldDef } from '../types.ts'

export function getOrCreateRow(
  parentId: string | number,
  name: string,
  field: Block | FieldDef,
  sortOrder: number,
) {
  const data = query.block({
    parent_id: parentId?.toString() || null,
    name: name,
    sort_order: sortOrder.toString(),
  })

  if (data) return data

  const change = db.insertInto('blocks', {
    name: name?.toString(),
    label: field.label?.toString(),
    type: field.type?.toString(),
    sort_order: sortOrder,
    parent_id: parentId,
  })

  return query.block({ id: change.lastInsertRowid.toString() })
}
