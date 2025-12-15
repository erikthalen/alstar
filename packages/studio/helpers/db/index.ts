import { DatabaseSync } from 'node:sqlite'

export const getDatabase = (name: string) => {
  return new DatabaseSync(name)
}
