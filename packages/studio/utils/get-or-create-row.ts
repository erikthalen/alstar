import { getField } from '../helpers/sql/index.ts'
import type { InstanceType } from '../helpers/structure/types.ts'
import { FieldInstance } from '../helpers/structure/index.ts'
import { database } from '../index.ts'
import { sql } from './sql.ts'

export function getOrCreateRow(props: {
  parentId: string | number | null
  name: string
  field: InstanceType
  sortOrder?: number
  id?: number
}) {
  const { parentId, name, field, sortOrder = 0, id } = props

  if (id) {
    return getField({
      id: id?.toString(),
    })
  }

  const data = getField({
    parent_id: parentId?.toString() || null,
    name: name,
    sort_order: sortOrder.toString(),
  })

  if (data) return data

  let type = field.instanceOf === FieldInstance ? field.type : field.instanceOf.description

  if (!type) {
    console.log('field has no type:', field)
    return
  }

  const change = database
    .prepare(sql`insert into block (name, label, type, sort_order, parent_id) values (?, ?, ?, ?, ?);`)
    .run(name?.toString(), field.label?.toString(), type, sortOrder, parentId)

  return getField({ id: change.lastInsertRowid.toString() })
}
