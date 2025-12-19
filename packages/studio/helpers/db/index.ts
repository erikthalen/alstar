import { DatabaseSync } from 'node:sqlite'

// [todo]: /queries is missing root queries

export const getDatabase = (name: string) => {
  return new DatabaseSync(name)
}
