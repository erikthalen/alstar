import { html } from 'hono/html'
import Render from './Render.ts'
import type {
  BlockFields,
  BlockInstanceType,
  CollectionInstanceType,
  SingleInstanceType,
} from '../helpers/structure/types.ts'

export default (props: {
  parentId: number | string
  id?: number
  structure:
    | BlockInstanceType<BlockFields>
    | CollectionInstanceType<BlockFields>
    | SingleInstanceType<BlockFields>
}) => {
  const { parentId, structure } = props

  const entries = Object.entries(structure.fields)

  return html`${entries.map(([name, field]) => {
    try {
      return Render({ parentId, structure: field, name })
    } catch (error) {
      return html`<p>Cound not render: "${name}"</p>`
    }
  })}`
}
