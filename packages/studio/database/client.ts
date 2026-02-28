import { DatabaseSync } from 'node:sqlite'
import { applyMigrations } from './apply-migrations.ts'

// [todo]: /queries is missing root queries

export async function createDatabase(name: string): Promise<DatabaseSync> {
  const database = new DatabaseSync(name)

  database.exec(`
		PRAGMA journal_mode = WAL;
		PRAGMA foreign_keys = ON;
	`)

  await applyMigrations(database)

  return database
}
