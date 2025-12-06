import { html, raw } from 'hono/html'
import { getEntry } from '../helpers/sql/index.ts'
import hljs from 'highlight.js'

export default async (props: { entryId: number | string }) => {
  const data = getEntry({ id: props.entryId })

  if (!data) return html`<p>No entry with id: "${props.entryId}"</p>`

  const json = hljs.highlight(JSON.stringify(data, null, 2), {
    language: 'json',
  }).value

  return html`
    <section class="live-preview" id="live_preview">
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
          class="ts-label"
          data-text="$livePreviewEnabled ? 'Disable live preview' : 'Enable live preview'"
        >
        </quiet-tooltip>

        <h1 class="ts-label">Live preview</h1>
      </header>

      <pre>${raw(json)}</pre>
    </section>
  `
}
