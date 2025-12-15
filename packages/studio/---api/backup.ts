import fsp from 'node:fs/promises'
import { backup } from 'node:sqlite'

import { Hono } from 'hono'
import { type HttpBindings } from '@hono/node-server'
import { streamSSE } from 'hono/streaming'
import { db } from '@alstar/db'
import path from 'node:path'
// import { renderSSE } from '../utils/renderSSE.ts'

const app = new Hono<{ Bindings: HttpBindings }>()

app.post('/backup', async (c) => {
  const date = new Date()
  const name = `./backups/backup-${date.toISOString()}.db`

  try {
    fsp.mkdir('./backups', { recursive: true })

    await backup(db.database, name)
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

export const backupRoutes = app
