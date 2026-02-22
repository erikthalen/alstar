import { getOrCreateRow } from '#utils/get-or-create-row.ts'
import { html } from 'hono/html'
import { BlockFieldInstanceType } from '@alstar/types'
import BlockField from './BlockField.ts'

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

  return html` ${BlockField({ id: data.id })} `
}
