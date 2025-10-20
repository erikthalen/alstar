import { html } from "hono/html"
import { query } from "../queries/index.ts"
import { studioConfig, studioStructure } from "../index.ts"

export default (props: { entryId: number | string }) => {
  const data = query.root({ id: props.entryId })

  if (!data) return html`<p>No entry with id: "${props.entryId}"</p>`

  const structure = studioStructure[data.name]

  if (!structure) return html`<p>No structure of type: ${data.name}</p>`
  
  const slugValue = structure.preview?.slug
  const slugColumn = structure.preview?.field
  
  if (!slugValue && !slugColumn) return html`<p>No preview of type: ${data.name}</p>`

  const slug = slugValue || data.fields[slugColumn].value
  
  return html`
    <iframe id="live_preview" class="live-preview" src="http://localhost:${studioConfig.port}/${slug === '/' ? '' : slug}"></iframe>
  `
}