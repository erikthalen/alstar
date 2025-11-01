import { html } from 'hono/html'
import { query } from '../queries/index.ts'
import { studioConfig, studioStructure } from '../index.ts'

export default (props: { entryId: number | string }) => {
  const data = query.root({ id: props.entryId })

  if (!data) return html`<p>No entry with id: "${props.entryId}"</p>`

  const structure = studioStructure[data.name]

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
    data-rendered-at="${Date.now()}"
  >
    <header>
      <h1>Live preview</h1>
    </header>
    <quiet-zoomable-frame
      src="http://localhost:${studioConfig.port}/${slug === '/' ? '' : slug}"
      zoom="1"
    >
    </quiet-zoomable-frame>
  </live-preview>`
}
