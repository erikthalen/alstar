import BlockField from '#components/field-renderers/BlockField.ts'
import { Entries } from '#components/index.ts'
import { broadcastPatchElement, eventEmitter } from '#event-emitter.ts'
import {
  createBlock,
  deleteBlock,
  getEntry,
  getField,
  setBlockStatus,
} from '#database/sql/index.ts'
import { factory } from '@alstar/framework'
import { BlockID, BlockStatus } from '@alstar/types'

export const api = factory.createApp()

api.post('/block', (c) => {
  const datastar = c.get('datastar')

  const name = datastar.signals?.name

  if (!name) return c.json({ status: 500 })

  const payload = datastar.signals as {
    id: BlockID | undefined
    type: string
    name: string
    label: string
    parent_id: BlockID | null
  }

  createBlock(payload)

  if (payload.parent_id !== null) {
    const entry = getEntry({ id: payload.parent_id })

    if (entry) {
      eventEmitter.emit('entry-updated', { id: entry.id })
    }
  } else {
    broadcastPatchElement(Entries({ page: 1, name: name.toString() }))
  }

  if (payload.id !== undefined) {
    broadcastPatchElement(BlockField({ id: payload.id }))
  }

  return c.json({ status: 200 })
})

api.post('/block/status/:id/:name', (c) => {
  const datastar = c.get('datastar')
  const id = c.req.param('id') as BlockID
  const name = c.req.param('name')

  if (!datastar?.signals) return c.json({ status: 500 })

  const block = datastar.signals[id] as { status: BlockStatus }

  setBlockStatus(id, block.status)

  broadcastPatchElement(Entries({ page: 1, name: name.toString() }))

  eventEmitter.emit('entry-updated', { id })

  return c.json({ status: 200 })
})

api.delete('/block/:id/:name?', (c) => {
  const id = c.req.param('id') as BlockID
  const name = c.req.param('name')
  const block = getField({ id })

  deleteBlock(id)

  eventEmitter.emit('entry-updated', { id })

  if (name) {
    broadcastPatchElement(Entries({ page: 1, name: name.toString() }))
  } else {
    if (block?.parent_id) {
      broadcastPatchElement(BlockField({ id: block.parent_id }))
    }
  }

  return c.json({ status: 200 })
})
