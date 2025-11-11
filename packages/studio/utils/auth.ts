import { db } from '@alstar/db'
import { betterAuth } from 'better-auth'

export const createAuthServer = () =>
  betterAuth({
    database: db.database,
    emailAndPassword: {
      enabled: true,
    },
  })
