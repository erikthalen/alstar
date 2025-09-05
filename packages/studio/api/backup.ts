import fsp from 'node:fs/promises'
import { backup } from 'node:sqlite'

import { Hono } from 'hono'
import { type HttpBindings } from '@hono/node-server'
import { streamSSE } from 'hono/streaming'
import { db } from '@alstar/db'

const app = new Hono<{ Bindings: HttpBindings }>()

app.post('/backup', async (c) => {
  const date = new Date()
  const name = `./backups/backup-${date.toISOString()}.db`

  try {
    fsp.mkdir('./backups', { recursive: true })

    await backup(db.database, name)

    console.log('Backup')

    return streamSSE(c, async (stream) => {
      await stream.writeSSE({
        event: 'datastar-patch-signals',
        data: `signals { status: 200, message: '${name} created' }`,
      })
    })
  } catch (error) {
    console.log(error)

    return streamSSE(c, async (stream) => {
      await stream.writeSSE({
        event: 'datastar-patch-signals',
        data: `signals { status: 500, message: '${name} failed' }`,
      })
    })
  }
})

export const backupRoutes = app
