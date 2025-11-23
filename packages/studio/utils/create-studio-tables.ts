import { db } from '@alstar/db'
import * as schemas from '../schemas.ts'

export function createStudioTables() {
  Object.values(schemas).forEach((schema) => {
    db.createTableRaw(schema.tableName, schema.columns)
  })
}
