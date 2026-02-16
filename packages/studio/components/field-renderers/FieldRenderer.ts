import { Field } from '#components/fields/index.ts'
import FieldRoot from '#components/field-renderers/Field.ts'
import { html } from 'hono/html'
import { getOrCreateRow } from '#utils/get-or-create-row.ts'
import { BlockFieldInstance, BlockFieldInstanceType, FieldInstanceType } from '@alstar/types'

export default (props: {
  parentId: number | string
  structure: FieldInstanceType | BlockFieldInstanceType
  name: string
}) => {
  const { parentId, structure, name } = props

  const data = getOrCreateRow({
    parentId,
    name,
    field: structure,
  })

  if (!data) {
    return html`<p>No data</p>`
  }

  if (structure.instanceOf === BlockFieldInstance) {
    return Field.BlockField({ id: data.id })
  } else {
    return FieldRoot({ structure, id: data.id })
  }
}
