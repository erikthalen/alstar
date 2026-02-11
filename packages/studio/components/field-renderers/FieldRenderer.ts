import { Field } from '#components/fields/index.ts'
import { html } from 'hono/html'
import { getOrCreateRow } from '#utils/get-or-create-row.ts'
import { BlockFieldInstance } from '#helpers/structure/index.ts'
import type { BlockFieldInstanceType, FieldInstanceType } from '#helpers/structure/types.ts'

export default (props: {
  parentId: number | string
  structure: FieldInstanceType | BlockFieldInstanceType
  id?: number
  name: string
}) => {
  const { parentId, structure, name, id } = props

  const data = getOrCreateRow({
    parentId,
    name,
    field: structure,
  })

  if (!data) {
    return html`<p>No data</p>`
  }

  let fieldComponent

  if (structure.instanceOf === BlockFieldInstance) {
    fieldComponent = Field.BlockField({ id: data.id })
  } else {
    switch (structure.type) {
      case 'text': {
        fieldComponent = Field.Text({ id: data.id })
        break
      }

      case 'title': {
        fieldComponent = Field.Title({ id: data.id })
        break
      }

      case 'slug': {
        fieldComponent = Field.Slug({ id: data.id })
        break
      }

      case 'markdown': {
        fieldComponent = Field.Markdown({ id: data.id })
        break
      }

      case 'image': {
        fieldComponent = Field.Image({ id: data.id })
        break
      }

      case 'reference': {
        fieldComponent = Field.Reference({ id: data.id })
        break
      }

      case 'svg': {
        fieldComponent = Field.SVG({ id: data.id })
        break
      }
    }
  }

  return html` <div class="field">
    <vscode-form-container responsive>
      <vscode-form-group>
        <vscode-label> ${structure.label} </vscode-label>

        ${fieldComponent}

        <vscode-form-helper style="width: 100%;">
          <p class="description">${structure.description}</p>
        </vscode-form-helper>
      </vscode-form-group>
    </vscode-form-container>
  </div>`
}
