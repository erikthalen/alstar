import EntryHeader from '#components/EntryHeader.ts'
import FieldPatch from '#components/field-renderers/FieldPatch.ts'
import LivePreviewContent from '#components/live-preview/LivePreviewContent.ts'
import { getEntry, setUpdatedAt, updateBlockValue } from '#database/sql/index.ts'
import { patchElements } from '#helpers/hono-datastar/index.ts'
import { AuthType } from '#index.ts'
import { PluginEvents } from '@alstar/types'
import { type SSEStreamingApi } from 'hono/streaming'
import { HtmlEscapedString } from 'hono/utils/html'
import EventEmitter from 'node:events'

type Connection = {
  stream: SSEStreamingApi
  user: AuthType['user']
}

export const connections = new Map<string, Connection>()
export const eventEmitter = new EventEmitter<PluginEvents>()

eventEmitter.on('update-block', ({ userId, id, payload, patchSelf }) => {
  updateBlockValue(id, payload.value)

  const entry = getEntry({ id })

  if (entry) {
    setUpdatedAt(entry?.id)
  }

  connections.forEach(async (connection) => {
    if (entry?.id) {
      await patchElements(connection.stream, await LivePreviewContent({ entryId: entry?.id }))
      await patchElements(connection.stream, await EntryHeader({ entryId: entry?.id }))
    }
    
    console.log('entry?.id', connection.user?.id, userId)

    if (patchSelf || connection.user?.id !== userId) {
      await patchElements(connection.stream, await FieldPatch({ id }))
    }
  })
})

eventEmitter.on('entry-updated', ({ id }) => {
  const entry = getEntry({ id })

  if (entry) {
    setUpdatedAt(entry?.id)
  }

  connections.forEach(async (connection) => {
    if (entry?.id) {
      patchElements(connection.stream, await LivePreviewContent({ entryId: entry?.id }))
      patchElements(connection.stream, await EntryHeader({ entryId: entry?.id }))
    }
  })
})

export function broadcastPatchElement(
  patches:
    | HtmlEscapedString
    | Promise<HtmlEscapedString>
    | (HtmlEscapedString | Promise<HtmlEscapedString>)[],
) {
  const ps = Array.isArray(patches) ? patches : [patches]

  connections.forEach(async (connection) => {
    for (const patch of ps) {
      patchElements(connection.stream, await patch)
    }
  })
}
