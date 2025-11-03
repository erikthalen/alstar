import { type HttpBindings } from '@hono/node-server'
import { Hono } from 'hono'
import { streamSSE } from 'hono/streaming'
import { sql } from '../utils/sql.ts'
import { db } from '@alstar/db'
import { deleteBlockWithChildren } from '../queries/block-with-children.ts'
import { query } from '../queries/index.ts'
import { renderSSE } from '../utils/renderSSE.ts'

const app = new Hono<{ Bindings: HttpBindings }>()

app.post('/block', async (c) => {
  return streamSSE(c, async (stream) => {
    const formData = await c.req.formData()
    const data = Object.fromEntries(formData.entries())

    const definedData = JSON.parse(
      JSON.stringify({
        type: data.type?.toString(),
        name: data.name?.toString(),
        label: data.label?.toString(),
        parent_id: data.parent_id?.toString(),
        sort_order: data.sort_order?.toString(),
      })
    )

    db.insertInto('blocks', definedData)

    await renderSSE(stream, c)
  })
})

app.patch('/block', async (c) => {
  return streamSSE(c, async (stream) => {
    const formData = await c.req.formData()

    const id = formData.get('id')?.toString()
    const value = formData.get('value')?.toString()
    // const name = formData.get('name')?.toString()
    // const entryId = formData.get('entryId')?.toString()
    // const parentId = formData.get('parentId')?.toString()

    if (!id || !value) return

    const transaction = db.database.prepare(sql`
      update blocks
      set
        value = ?
      where
        id = ?;
    `)

    transaction.run(value, id)

    await renderSSE(stream, c)
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

    if (!id) return

    db.database.prepare(deleteBlockWithChildren).all(id)

    await renderSSE(stream, c)
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
