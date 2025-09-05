import { type HttpBindings } from '@hono/node-server'
import { ServerSentEventGenerator } from '@starfederation/datastar-sdk'
import { Hono } from 'hono'
import { streamSSE } from 'hono/streaming'
import { stripNewlines } from '../utils/strip-newlines.ts'
import { sql } from '../utils/sql.ts'
import { type Structure } from '../types.ts'
import { db } from '@alstar/db'
import Entry from '../components/Entry.ts'
import {
  blockWithChildren,
  deleteBlockWithChildren,
} from '../queries/block-with-children.ts'
import AdminPanel from '../components/AdminPanel.ts'
import { query } from '../queries/index.ts'
import { studioStructure } from '../index.ts'

const app = new Hono<{ Bindings: HttpBindings }>()

app.post('/block', async (c) => {
  return streamSSE(c, async (stream) => {
    const formData = await c.req.formData()
    const data = Object.fromEntries(formData.entries())

    const row = studioStructure[data.name?.toString()]

    if (!row) return

    db.insertInto('blocks', {
      name: data.name?.toString(),
      label: row.label,
      type: row.type,
    })

    await stream.writeSSE({
      event: 'datastar-patch-elements',
      data: `elements ${stripNewlines(AdminPanel())}`,
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
    // const sortOrder = formData.get('sort_order')?.toString()

    if (!id || !value) return

    const transaction = db.database.prepare(sql`
      update blocks
      set
        value = ?
      where
        id = ?;
    `)

    transaction.run(value, id)

    if (entryId === parentId && name?.toString() === 'title') {
      const rootBlock = query.block({
        id: parentId?.toString() || null,
      })

      if (rootBlock.type !== 'single') {
        await stream.writeSSE({
          event: 'datastar-patch-elements',
          data: `elements <a href="/studio/entry/${entryId}" id="block_link_${entryId}">${value}</a>`,
        })
      }
    }
  })
})

app.patch('/value', async (c) => {
  const body = await c.req.json()

  const transaction = db.database.prepare(sql`
    update blocks
    set
      value = ?
    where
      id = ?;
  `)

  transaction.run(body.value, body.id)

  return c.json({ status: 200, message: 'success' })
})

app.delete('/block', async (c) => {
  return streamSSE(c, async (stream) => {
    const formData = await c.req.formData()

    const id = formData.get('id')?.toString()
    const entryId = formData.get('entry_id')?.toString()

    if (!id) return

    const transaction = db.database.prepare(deleteBlockWithChildren)

    transaction.all(id)

    if (entryId) {
      await stream.writeSSE({
        event: 'datastar-patch-elements',
        data: `elements ${stripNewlines(Entry({ entryId: parseInt(entryId.toString()) }))}`,
      })
    } else {
      await stream.writeSSE({
        event: 'datastar-patch-elements',
        data: `elements ${stripNewlines(AdminPanel())}`,
      })
    }
  })
})

app.post('/sort-order', async (c) => {
  const id = c.req.query('id')
  const sortOrder = c.req.query('sort-order')

  if (!id || !sortOrder) return

  const transaction = db.database.prepare(sql`
    update blocks
    set
      sort_order = ?
    where
      id = ?
  `)

  transaction.run(sortOrder, id)

  return c.json({ status: 200, message: 'success' })
})

export const blockRoutes = app
