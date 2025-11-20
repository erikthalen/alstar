import { betterAuth } from 'better-auth'
import { DatabaseSync } from 'node:sqlite'

export const createAuthServer = (database: DatabaseSync) =>
  betterAuth({
    basePath: 'studio/api/auth',
    database: database,
    emailAndPassword: {
      enabled: true,
    },
  })
