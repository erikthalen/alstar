import { fields } from '#index.ts'
import { html } from 'hono/html'

export default ({ structure, id }: { structure: any, id: number | `${number}` }) => {
  const field = fields.get(structure.type)

  if (!field || typeof field !== 'function') {
    return html`
      <quiet-callout style="margin-block: 1rem" variant="destructive">
        <quiet-icon slot="icon" name="file-unknown"></quiet-icon>
        No field of type: "<code>${structure.type}</code>"
      </quiet-callout>
    `
  } else {
    return html` <div class="field" id="field_${id}">
      <vscode-form-container responsive>
        <vscode-form-group>
          <vscode-label> ${structure.label} </vscode-label>

          ${field(id)}

          <vscode-form-helper style="width: 100%;">
            <p class="description">${structure.description}</p>
          </vscode-form-helper>
        </vscode-form-group>
      </vscode-form-container>
    </div>`
  }
}
