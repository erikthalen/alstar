import { html } from 'hono/html'
import { getEntry, getField } from '../../helpers/sql/index.ts'

export default (props: { id: number }) => {
  const data = getField({ id: props.id })

  if (!data) return html`<p>No block</p>`

  const entry = getEntry({ id: props.id })

  const signals = {
    id: data.id,
    value: data.value || '',
    patchElements: [
      { name: 'fields/Slug', props: { id: data.id } },
      { name: 'EntryHeader', props: entry?.id },
      { name: 'LivePreview', props: { entryId: entry?.id } },
    ],
  }

  return html`
    <vscode-textfield
      data-bind:${data.id}.value
      id="id_${data.id}"
      name="value"
      data-signals:entry.slug="${JSON.stringify(signals)}"
      data-signals:${data.id}="${JSON.stringify(signals)}"
      data-on:input="@patch('/studio/api/block/${data.id}', {
        filterSignals: { include: '/${data.id}/' }
      })"
    >
      <quiet-button
        slot="content-after"
        data-on:click="@patch('/studio/api/block-recommended-slug', {
          filterSignals: { include: '/entry./' }
        })"
        appearance="text"
        id="generate_slug_field"
        icon-label="Reload"
        size="xs"
      >
        <quiet-icon name="refresh"></quiet-icon>
      </quiet-button>
    </vscode-textfield>

    <quiet-tooltip
      distance="0"
      without-arrow
      class="ts-label"
      for="generate_slug_field"
    >
      Generate slug
    </quiet-tooltip>
  `
}
