import { getField } from '../helpers/db/sql/index.ts'
import { FieldInstance, type InstanceType } from '@alstar/types'
import { database } from '../index.ts'
import sql from 'sql-template-tag'
import { SQLInputValue } from 'node:sqlite'

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

  const query = sql`
    insert into
      block (name, label, type, sort_order, parent_id)
    values
      (
        ${name?.toString()},
        ${field.label?.toString()},
        ${type},
        ${sortOrder},
        ${parentId}
      );
  `

  const change = database.prepare(query.sql).run(...(query.values as SQLInputValue[]))

  return getField({ id: change.lastInsertRowid.toString() })
}
