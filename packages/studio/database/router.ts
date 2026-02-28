import { factory } from '@alstar/framework'
import { serveStatic } from '@hono/node-server/serve-static'
import { createDatabase } from './client.ts'
import type { DatabaseSync } from 'node:sqlite'
import fsp from 'node:fs/promises'
import { backup } from 'node:sqlite'
import path from 'node:path'
import { backupDatabase, createBackup } from './backup.ts'

type DatabaseType = {
  database: DatabaseSync
}

declare module 'hono' {
  interface ContextVariableMap extends DatabaseType {}
}

export const createDatabaseRouter = async (name: string) => {
  const app = factory.createApp()
  const database = await createDatabase(name)

  app.use('*', async (c, next) => {
    c.set('database', database)
    await next()
  })

  app.post('/backup', async (c) => {
    const config = c.get('config')

    try {
      await createBackup(config.database, './backups')
      return c.json({ status: 200, message: 'Database backed up!' })
    } catch (error) {
      console.log(error)
      return c.json({ status: 500, message: 'Something went wrong' })
    }
  })

  app.delete('/backup', async (c) => {
    const formData = await c.req.formData()
    const data = Object.fromEntries(formData.entries())

    if (!data.filename) {
      return c.json({ status: 404, message: 'Need a filename to remove' })
    }

    try {
      await fsp.rm(path.join('./backups', data.filename.toString()))
    } catch (error) {
      console.log(error)
      return c.json({ status: 500, message: 'Something went wrong' })
    }
  })

  app.use(
    '/backups/*',
    serveStatic({
      root: './',
      rewriteRequestPath: (path) => path.replace(/^\/backups/, '/backups'),
    }),
  )

  return { app, database }
}
