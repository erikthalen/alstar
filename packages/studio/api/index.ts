import block from './block.ts'
import apiKey from './api-key.ts'

export const api = (structure) => {
  const app = block(structure)
  
  app.route('/', apiKey(structure))

  return app
}
