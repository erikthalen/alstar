import { Field } from './fields/index.ts'
import type {
  BlocksFieldDefStructure,
  FieldDefStructure,
  ReferenceFieldStructure,
} from '../types.ts'
import BlockFieldRenderer from './BlockFieldRenderer.ts'
import { BlockFieldInstance } from '../utils/define.ts'
import { html } from 'hono/html'
import { getOrCreateRow } from '../utils/get-or-create-row.ts'

export default (props: {
  entryId: number | string
  parentId: number | string
  structure: FieldDefStructure | BlocksFieldDefStructure
  id?: number
  name: string
}) => {
  const { entryId, parentId, structure, name, id } = props

  if (structure.instanceOf === BlockFieldInstance) {
    return BlockFieldRenderer({ entryId, parentId, name, structure, id })
  }

  const data = getOrCreateRow({
    parentId,
    name,
    field: structure,
  })

  const fieldProps = { entryId, parentId, name, id, structure }

  let fieldComponent

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

  return html` <div class="field">
    <vscode-form-container responsive>
      <vscode-form-group>
        <vscode-label> ${structure.label} </vscode-label>

        ${fieldComponent}

        <vscode-form-helper style="width: 100%;">
          <p class="description ts-xs">${structure.description}</p>
        </vscode-form-helper>
      </vscode-form-group>
    </vscode-form-container>
  </div>`
}
