import { html, raw } from 'hono/html'
import { query } from '../../queries/index.ts'

export default (id: string | number) => {
  if (!id) return html`<p>No id provided</p>`

  const data = query.block({ id })

  return html`
    <div class="svg-output" id="output_${id}">
      <p class="ts-xs">Output:</p>
      <output>${raw(data.value)}</output>
    </div>
  `
}
