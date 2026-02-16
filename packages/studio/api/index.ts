import { eventEmitter } from '#event-emitter.ts'
import { createBlock, deleteBlock, setBlockStatus } from '#helpers/db/sql/index.ts'
import { factory } from '@alstar/framework'
import { BlockID, BlockStatus } from '@alstar/types'

export const api = factory.createApp()

api.post('/block', (c) => {
  const datastar = c.get('datastar')

  createBlock(
    datastar.signals as {
      type: string
      name: string
      label: string
      parent_id: BlockID | null
    },
  )

  return c.json({ status: 200 })
})

api.post('/block/status/:id', (c) => {
  const datastar = c.get('datastar')
  const id = c.req.param('id') as BlockID

  if (!datastar?.signals) return c.json({ status: 500 })

  const block = datastar.signals[id] as { status: BlockStatus }

  setBlockStatus(id, block.status)

  eventEmitter.emit('entry-updated', { id })

  return c.json({ status: 200 })
})

api.delete('/block/:id', (c) => {
  const id = c.req.param('id') as BlockID

  deleteBlock(id)

  eventEmitter.emit('entry-updated', { id })

  return c.json({ status: 200 })
})
