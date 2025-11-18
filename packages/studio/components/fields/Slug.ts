import { getOrCreateRow } from '../../utils/get-or-create-row.ts'
import { html } from '@alstar/studio/html'
import type { FieldDefStructure } from '../../types.ts'

export default (props: {
  entryId: number | string
  parentId: number | string
  name: string
  id?: number
  structure: FieldDefStructure
  sortOrder?: number
}) => {
  const { entryId, parentId, name, structure, sortOrder = 0, id } = props

  const data = getOrCreateRow({
    parentId,
    name,
    field: structure,
    sortOrder,
    id,
  })

  if (!data) return html`<p>No block</p>`

  const signals = {
    id: data.id,
    value: data.value,
    patchElements: [
      { name: 'EntryHeader', props: entryId },
      { name: 'LivePreview', props: { entryId } },
    ],
  }

  return html`
    <form
      data-signals:entry.slug="${JSON.stringify(signals)}"
      data-signals:field-${data.id}="${JSON.stringify(signals)}"
      data-on:input="@patch('/studio/api/block', {
          filterSignals: { include: 'field-${data.id}' }
        })"
    >
      <vscode-form-container responsive>
        <vscode-form-group>
          <vscode-label for="block-${data.id}">
            ${structure.label}
          </vscode-label>
          <vscode-textfield
            data-bind:field-${data.id}.value
            id="block-${data.id}"
            name="value"
          >
            <quiet-button
              slot="content-after"
              data-on:click="@patch('/studio/api/block-recommended-slug', {
                  filterSignals: { include: 'entry.' }
                })"
              appearance="text"
              id="generate_slug_field"
              icon-label="Reload"
              size="xs"
            >
              <quiet-icon name="refresh"></quiet-icon>
            </quiet-button>
          </vscode-textfield>
          <vscode-form-helper>
            <p class="ts-xs">${structure.description}</p>
          </vscode-form-helper>
        </vscode-form-group>
      </vscode-form-container>

      <quiet-tooltip
        distance="0"
        without-arrow
        class="ts-label"
        for="generate_slug_field"
      >
        Generate slug
      </quiet-tooltip>
    </form>

    <!-- <quiet-button
        data-on:submit="@patch('/studio/api/block-recommended-slug', {
          filterSignals: { include: 'entry.' }
        })"
        appearance="text"
        id="generate_slug_field"
        icon-label="Reload"
        size="xs"
      >
        <quiet-icon name="refresh"></quiet-icon>
      </quiet-button>

      <quiet-tooltip
        distance="0"
        without-arrow
        class="ts-label"
        for="generate_slug_field"
      >
        Generate slug
      </quiet-tooltip> -->
  `
}
