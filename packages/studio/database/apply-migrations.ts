import { DatabaseSync } from 'node:sqlite'
import fsp from 'node:fs/promises'
import path from 'node:path'
import { studioRoot } from '../index.ts'

export async function applyMigrations(db: DatabaseSync) {
  const root = path.resolve(studioRoot, 'database/migrations')
  const dir = await fsp.readdir(root)

  for (const filename of dir) {
    const file = await fsp.readFile(path.join(root, filename), { encoding: 'utf8' })
    db.exec(file)
  }
}
