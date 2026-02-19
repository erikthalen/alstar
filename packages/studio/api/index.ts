import { Entries } from '#components/index.ts'
import { broadcastPatchElement, eventEmitter } from '#event-emitter.ts'
import { createBlock, deleteBlock, setBlockStatus } from '#helpers/db/sql/index.ts'
import { factory } from '@alstar/framework'
import { BlockID, BlockStatus } from '@alstar/types'

export const api = factory.createApp()

api.post('/block', (c) => {
  const datastar = c.get('datastar')

  const name = datastar.signals?.name

  if (!name) return c.json({ status: 500 })

  createBlock(
    datastar.signals as {
      type: string
      name: string
      label: string
      parent_id: BlockID | null
    },
  )

  broadcastPatchElement(Entries({ page: 1, name: name.toString() }))

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

api.delete('/block/:id/:name', (c) => {
  const id = c.req.param('id') as BlockID
  const name = c.req.param('name')

  deleteBlock(id)

  eventEmitter.emit('entry-updated', { id })

  broadcastPatchElement(Entries({ page: 1, name: name.toString() }))

  return c.json({ status: 200 })
})
