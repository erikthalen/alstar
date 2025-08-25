import block from './block.ts'
import apiKey from './api-key.ts'
import type { Structure } from '../types.ts'
import backup from './backup.ts'

export const api = (structure: Structure) => {
  const app = block(structure)

  app.route('/', apiKey())
  app.route('/', backup())

  return app
}
