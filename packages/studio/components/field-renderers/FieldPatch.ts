import { html } from 'hono/html'
import { getField } from '#helpers/db/sql/index.ts'
import { getStructureOfField } from '#utils/get-structure-of-field.ts'
import Field from './Field.ts'

export default ({ id }: { id: number | `${number}` }) => {
  const data = getField({ id })
  const structure = getStructureOfField(id)

  if (!data) {
    return html`<p>No data</p>`
  }

  return Field({ structure, id })
}
