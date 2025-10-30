import { html } from 'hono/html'
import type { BlockDefStructure } from '../types.ts'
import Render from './Render.ts'

export default (props: {
  entryId: number | string
  parentId: number | string
  id?: number
  structure: BlockDefStructure
}) => {
  const { entryId, parentId, structure } = props

  const entries = Object.entries(structure.fields)

  return html`${entries.map(([name, field]) => {
      try {
        return Render({ entryId, parentId, structure: field, name })
      } catch (error) {
        return html`<p>Cound not render: "${name}"</p>`
      }
    })}`
}
