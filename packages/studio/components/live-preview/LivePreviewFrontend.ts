import { html } from 'hono/html'
import { config } from '../../index.ts'
import { getEntry } from '../../database/sql/index.ts'

export default (props: { entryId: number | string }) => {
  const data = getEntry({ id: props.entryId })

  if (!data) return html`<p>No entry with id: "${props.entryId}"</p>`

  const structure = config.structure[data.name]

  if (!structure) return html`<p>No structure of type: ${data.name}</p>`

  if (!structure.preview) return html``

  const slugValue = 'slug' in structure.preview! && structure.preview?.slug
  const slugColumn = 'field' in structure.preview! && structure.preview?.field

  if (!slugValue && !slugColumn) return html``

  let slug

  if (slugValue) {
    slug = slugValue
  } else if (slugColumn) {
    slug = data.fields[slugColumn].value
  }

  if (!slug) return html``

  return html`<live-preview
      id="live_preview"
      class="live-preview"
      data-signals="{ livePreviewEnabled: true }"
      data-on:quiet-change="$livePreviewEnabled = !$livePreviewEnabled"
      data-style="{ width: $livePreviewEnabled ? '100%' : 'calc(var(--unit) * 2)' }"
      data-class="{ hidden: !$livePreviewEnabled }"
    >
      <header>
        <quiet-toggle-icon
          data-on:click="document.getElementById('split_pane').resetHandlePosition = '24px'"
          label="Toggle live preview visibility"
          effect="scale"
          style="--unchecked-color: var(--quiet-text-body); --checked-color: var(--quiet-text-body);"
          size="xs"
          id="hide_live_preview_button"
        >
          <quiet-icon slot="unchecked" name="eye"></quiet-icon>
          <quiet-icon slot="checked" name="eye-off"></quiet-icon>
        </quiet-toggle-icon>

        <quiet-tooltip
          open-delay="0"
          close-delay="0"
          distance="0"
          without-arrow
          for="hide_live_preview_button"
          class="text-label"
          data-text="$livePreviewEnabled ? 'Disable live preview' : 'Enable live preview'"
        >
        </quiet-tooltip>

        <h1 class="text-label">Live preview</h1>
      </header>

      <quiet-zoomable-frame
        data-show="$livePreviewEnabled"
        src="http://localhost:${config.port}/${slug === '/' ? '' : slug}"
        zoom="1"
      >
      </quiet-zoomable-frame>
    </live-preview>`
}
