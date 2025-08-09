import { DatabaseSync, type StatementResultingChanges } from 'node:sqlite'

export type DatabaseAPI = {
  database: DatabaseSync
  createTable: (tableName: string, userColumns: Record<string, string>) => void
  insertInto: (
    tableName: string,
    values: Record<string, string | number | bigint>
  ) => StatementResultingChanges
  updateTable: ({
    tableName,
    id,
    columns,
  }: {
    tableName: string
    id: number
    columns: Record<string, string>
  }) => void
  createTableRaw: (tableName: string, query: string) => void
}

export let db: DatabaseAPI

export const loadDb = (databaseName: string) => {
  const database = new DatabaseSync(databaseName)

  process.on('exit', () => database.close())
  process.on('SIGHUP', () => process.exit(128 + 1))
  process.on('SIGINT', () => process.exit(128 + 2))
  process.on('SIGTERM', () => process.exit(128 + 15))

  function createTable(
    tableName: string,
    userColumns: Record<string, string | number>
  ) {
    const columns = {
      id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
      created_at: "DATE DEFAULT (datetime('now'))",
      updated_at: "DATE DEFAULT (datetime('now'))",
      ...userColumns,
    }

    const cols = Object.entries(columns).reduce((acc, cur, i, arr) => {
      return `${acc}\n${cur[0]} ${cur[1]}${i !== arr.length - 1 ? ',' : ''}`
    }, '')

    database.exec(`CREATE TABLE IF NOT EXISTS ${tableName} (${cols});`)
  }

  function insertInto(
    tableName: string,
    values: Record<string, string | number | bigint>
  ) {
    const columns = Object.keys(values)

    const transaction = database.prepare(
      `INSERT INTO ${tableName} (${columns.join(', ')}) values (${Array(
        columns.length
      ).fill('? ')});`
    )

    return transaction.run(...Object.values(values))
  }

  function updateTable({
    tableName,
    id,
    columns,
  }: {
    tableName: string
    id: number
    columns: Record<string, string>
  }) {
    const keys = Object.keys(columns)
    const values = Object.values(columns)

    const transaction = database.prepare(
      `UPDATE ${tableName} SET ${keys
        .map(key => `${key} = ?`)
        .join(', ')} WHERE id = ?;`
    )

    transaction.run(...values, id)
  }

  function createTableRaw(tableName: string, query: string) {
    const columns = `
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        created_at DATE DEFAULT (datetime('now')),
        updated_at DATE DEFAULT (datetime('now')),
        ${query}
      `

    database.exec(`CREATE TABLE IF NOT EXISTS ${tableName} (${columns});`)
  }

  db = {
    database,
    createTable,
    insertInto,
    updateTable,
    createTableRaw,
  }

  return db
}
