import { type HttpBindings } from '@hono/node-server'
import { ServerSentEventGenerator } from '@starfederation/datastar-sdk'
import { Hono } from 'hono'
import { streamSSE } from 'hono/streaming'
import { stripNewlines } from '../utils/strip-newlines.ts'
import { sql } from '../utils/sql.ts'
import { type Structure } from '../types.ts'
import { db } from '@alstar/db'
import Entries from '../components/Entries.ts'
import Entry from '../components/Entry.ts'
import {
  blockWithChildren,
  deleteBlockWithChildren,
} from '../queries/block-with-children.ts'

export default (structure: Structure) => {
  const app = new Hono<{ Bindings: HttpBindings }>()

  app.post('/block', async (c) => {
    return streamSSE(c, async (stream) => {
      const formData = await c.req.formData()
      const data = Object.fromEntries(formData.entries())

      const row = structure[data.name?.toString()]

      if (!row) return

      db.insertInto('blocks', {
        name: data.name?.toString(),
        label: row.label,
        type: row.type,
      })

      await stream.writeSSE({
        event: 'datastar-patch-elements',
        data: `elements ${stripNewlines(Entries())}`,
      })
    })
  })

  app.post('/new-block', async (c) => {
    return streamSSE(c, async (stream) => {
      const formData = await c.req.formData()
      const data = Object.fromEntries(formData)

      db.insertInto('blocks', {
        type: data.type.toString(),
        name: data.name.toString(),
        label: data.label.toString(),
        parent_id: data.parent_id.toString(),
        sort_order: data.sort_order.toString(),
      })

      await stream.writeSSE({
        event: 'datastar-patch-elements',
        data: `elements ${stripNewlines(Entry({ entryId: parseInt(data.entry_id.toString()) }))}`,
      })
    })
  })

  app.patch('/block', async (c) => {
    return streamSSE(c, async (stream) => {
      const formData = await c.req.formData()

      const id = formData.get('id')?.toString()
      const value = formData.get('value')?.toString()
      const name = formData.get('name')?.toString()
      const entryId = formData.get('entryId')?.toString()
      const parentId = formData.get('parentId')?.toString()
      const sortOrder = formData.get('sort_order')?.toString()

      if (!id || !value || !sortOrder) return

      const transaction = db.database.prepare(sql`
        update blocks
        set
          value = ?
        where
          id = ?
          and sort_order = ?;
      `)

      transaction.run(value, id, sortOrder)

      if (entryId === parentId && name?.toString() === 'title') {
        await stream.writeSSE({
          event: 'datastar-patch-elements',
          data: `elements <a href="/admin/entry/${entryId}" id="block_link_${entryId}">${value}</a>`,
        })
      }
    })
  })

  app.delete('/block', async (c) => {
    return streamSSE(c, async (stream) => {
      const formData = await c.req.formData()

      const id = formData.get('id')?.toString()
      const entryId = formData.get('entry_id')?.toString()

      if (!id || !entryId) return

      const transaction = db.database.prepare(deleteBlockWithChildren)

      transaction.all(id)

      await stream.writeSSE({
        event: 'datastar-patch-elements',
        data: `elements ${stripNewlines(Entry({ entryId: parseInt(entryId.toString()) }))}`,
      })
    })
  })

  return app
}
