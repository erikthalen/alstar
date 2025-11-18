import { type HttpBindings } from '@hono/node-server'
import { Hono } from 'hono'
import { streamSSE } from 'hono/streaming'
import { sql } from '../utils/sql.ts'
import { db } from '@alstar/db'
import { deleteBlockWithChildren } from '../queries/block-with-children.ts'
import { getElementsToPatch } from '../utils/get-elements-to-patch.ts'
import { slugify } from '../utils/slugify.ts'

const app = new Hono<{ Bindings: HttpBindings }>()

type ElementPatchPayload = {
  name: string
  props: any
}[]

type PostBody = Record<
  string,
  {
    entry_id: string
    label: string
    name: string
    type: string
    parent_id: number
    patchElements: ElementPatchPayload
    sort_order: number
  }
>

app.post('/block', async (c) => {
  return streamSSE(c, async (stream) => {
    const datastar = c.get('datastar')
    const values = Object.values((datastar.signals as object) || '{}')[0]

    const data = JSON.parse(
      JSON.stringify({
        type: values.type,
        name: values.name,
        label: values.label,
        parent_id: values.parent_id,
        sort_order: values.sort_order,
      })
    )

    db.insertInto('block', data)

    const patches = await getElementsToPatch(values.patchElements)

    for (const patch of patches) {
      await datastar.patchElements(stream, patch)
    }
  })
})

type PatchBody = Record<
  string,
  {
    id: number
    value: string | number
    options?: Record<string, any>
    status?: 'enabled' | 'disabled'
    patchElements: ElementPatchPayload
  }
>

app.patch('/block', async (c) => {
  return streamSSE(c, async (stream) => {
    const datastar = c.get('datastar')
    const values = datastar
      ? Object.values((datastar.signals as object) || '{}')[0]
      : await c.req.json()

    const { id, value, options, status, sortOrder, patchElements } = values

    if (!id) return

    if (value) {
      const transaction = db.database.prepare(sql`
        update block
        set
          value = ?,
          updated_at = datetime('now')
        where
          id = ?;
      `)

      transaction.run(value, id)
    }

    if (options) {
      const transaction = db.database.prepare(sql`
        update block
        set
          options = ?
        where
          id = ?;
      `)

      transaction.run(JSON.stringify(options), id)
    }

    if (status) {
      const transaction = db.database.prepare(sql`
        update block
        set
          status = ?,
          updated_at = datetime('now')
        where
          id = ?;
      `)

      transaction.run(status, id)
    }

    if (typeof sortOrder === 'number') {
      const transaction = db.database.prepare(sql`
        update block
        set
          sort_order = ?
        where
          id = ?
      `)

      transaction.run(sortOrder, id)
    }

    if (patchElements) {
      const patches = await getElementsToPatch(patchElements)

      for (const patch of patches) {
        await datastar.patchElements(stream, patch)
      }
    }
  })
})

type PatchDisableBody = Record<
  string,
  {
    id: number
    patchElements: ElementPatchPayload
  }
>

app.delete('/block', async (c) => {
  return streamSSE(c, async (stream) => {
    const datastar = c.get('datastar')
    const values = Object.values((datastar.signals as object) || '{}')[0]

    if (!values.id) return

    db.database.prepare(deleteBlockWithChildren).all(values.id)

    const patches = await getElementsToPatch(values.patchElements)

    for (const patch of patches) {
      await datastar.patchElements(stream, patch)
    }
  })
})

type EntryTitleSignal = {
  entry: {
    id: number
    recommendedSlug: string
    slug: {
      id: number
      value: string
      recommended: string
      patchElements: ElementPatchPayload
    }
    title: {
      id: number
      value: string
      patchElements: ElementPatchPayload
    }
  }
}

app.patch('/block-title', async (c) => {
  return streamSSE(c, async (stream) => {
    const datastar = c.get('datastar')
    const signals = datastar.signals as EntryTitleSignal

    const { entry } = signals
    const { title } = entry

    const transaction = db.database.prepare(sql`
        update block
        set
          value = ?,
          updated_at = datetime('now')
        where
          id = ?;
      `)

    transaction.run(title.value, title.id)

    await datastar.patchSignals(stream, {
      entry: { slug: { recommended: slugify(title.value) } },
    })

    const patches = await getElementsToPatch(title.patchElements)

    for (const patch of patches) {
      await datastar.patchElements(stream, patch)
    }
  })
})

app.patch('/block-recommended-slug', async (c) => {
  return streamSSE(c, async (stream) => {
    const datastar = c.get('datastar')
    const signals = datastar.signals as EntryTitleSignal

    const { entry } = signals
    const { slug } = entry

    const transaction = db.database.prepare(sql`
        update block
        set
          value = ?,
          updated_at = datetime('now')
        where
          id = ?;
      `)

    transaction.run(slug.recommended, slug.id)

    await datastar.patchSignals(stream, {
      entry: { slug: { value: slug.recommended } },
      [`field-${slug.id}`]: {
        value: slug.recommended,
      },
    })

    const patches = await getElementsToPatch(slug.patchElements)

    for (const patch of patches) {
      await datastar.patchElements(stream, patch)
    }
  })
})

export const blockRoutes = app
