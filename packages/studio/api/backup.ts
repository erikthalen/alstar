import { type HttpBindings } from '@hono/node-server'
import { Hono } from 'hono'
import { streamSSE } from 'hono/streaming'
import { DatabaseSync } from 'node:sqlite'

import { stripNewlines } from '../utils/strip-newlines.ts'
import { db } from '@alstar/db'

export default () => {
  const app = new Hono<{ Bindings: HttpBindings }>()

  app.post('/backup', async (c) => {
    // const totalPagesTransferred = await backup(db.database, './backups/backup.db', {
    //   rate: 1, // Copy one page at a time.
    //   progress: ({ totalPages, remainingPages }) => {
    //     console.log('Backup in progress', { totalPages, remainingPages })
    //   },
    // })

    // console.log('Backup completed', totalPagesTransferred)

    return c.html('good')

    // return streamSSE(c, async (stream) => {
    //   await stream.writeSSE({
    //     event: 'datastar-patch-signals',
    //     data: `signals {}`,
    //   })

    //   await stream.writeSSE({
    //     event: 'datastar-patch-elements',
    //     data: `elements ${stripNewlines(Settings())}`,
    //   })
    // })
  })

  return app
}
