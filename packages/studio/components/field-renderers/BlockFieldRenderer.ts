import { getOrCreateRow } from '#utils/get-or-create-row.ts'
import { html } from 'hono/html'
import { Field } from '../fields/index.ts'
import { BlockFieldInstanceType } from '@alstar/types'

export default (props: {
  parentId: number | string
  name: string
  structure: BlockFieldInstanceType
  id?: number
  sortOrder?: number
}) => {
  const { parentId, name, structure, id, sortOrder = 0 } = props

  const data = getOrCreateRow({
    parentId,
    name,
    field: structure,
    sortOrder,
    id,
  })

  if (!data) return html`<p>No block</p>`

  return html` ${Field.BlockField({ id: data.id })} `
}
