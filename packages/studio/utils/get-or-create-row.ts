import { db } from '@alstar/db'
import { getField } from '../helpers/sql/index.ts'
import type { InstanceType } from '../helpers/structure/types.ts'
import { FieldInstance } from '../helpers/structure/index.ts'

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

  let type =
    field.instanceOf === FieldInstance
      ? field.type
      : field.instanceOf.description

  console.log(field.instanceOf.description)

  if (!type) {
    console.log('field has no type:', field)
    return
  }

  const change = db.insertInto('block', {
    name: name?.toString(),
    label: field.label?.toString(),
    type: type,
    sort_order: sortOrder,
    parent_id: parentId,
  })

  return getField({ id: change.lastInsertRowid.toString() })
}
