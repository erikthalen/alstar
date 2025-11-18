import { db } from '@alstar/db'
import { betterAuth } from 'better-auth'
import { DatabaseSync } from 'node:sqlite'

export const createAuthServer = () =>
  betterAuth({
    database: db.database,
    emailAndPassword: {
      enabled: true,
    },
  })
