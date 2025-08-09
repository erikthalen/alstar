import { type HttpBindings } from '@hono/node-server'
import { ServerSentEventGenerator } from '@starfederation/datastar-sdk'
import { Hono } from 'hono'
import { streamSSE } from 'hono/streaming'
import { stripNewlines } from '../utils/strip-newlines.ts'
import { sql } from '../utils/sql.ts'
import { type Block } from '../types.ts'
import { db } from '@alstar/db'
import Entries from '../components/Entries.ts'
import Entry from '../components/Entry.ts'

export const sectionRoutes = (structure: Block[]) => {
  const app = new Hono<{ Bindings: HttpBindings }>()

  app.post('/block', async (c) => {
    return streamSSE(c, async (stream) => {
      const formData = await c.req.formData()
      const data = Object.fromEntries(formData.entries())

      const row = structure.find((block) => block.type === data.type)

      if (!row) return

      db.insertInto('blocks', {
        name: row.name?.toString(),
        label: row.label?.toString(),
        type: row.type?.toString(),
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
      const newBlock = formData.get('block')?.toString().split(';')
      const columns = newBlock?.map((field) => field.split(':')) as string[][]
      const data = Object.fromEntries(columns)

      const parent_block_id = formData?.get('parent_block_id')?.toString()
      const sort_order = formData?.get('sort_order')?.toString()

      if (!parent_block_id || !sort_order) return

      db.insertInto('blocks', {
        type: data.type,
        name: data.name,
        label: data.label,
        parent_block_id,
        sort_order,
      })

      await stream.writeSSE({
        event: 'datastar-patch-elements',
        data: `elements ${stripNewlines(Entry({ entryId: data.entry_id, structure }))}`,
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

      if (!id) return

      const transaction = db.database.prepare(sql`
        update blocks
        set
          status = 'disabled'
        where
          id = ?
      `)

      transaction.run(id)

      await stream.writeSSE({
        event: 'datastar-patch-elements',
        data: `elements ${stripNewlines(Entries())}`,
      })
    })
  })

  return app
}
