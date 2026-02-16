import { html } from 'hono/html'
import Render from './Render.ts'
import { BlockInstanceType, CollectionInstanceType, SingleInstanceType } from '@alstar/types'

export default (props: {
  parentId: number | string
  id?: number
  structure: BlockInstanceType | CollectionInstanceType | SingleInstanceType
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
