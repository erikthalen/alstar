import { html, raw } from 'hono/html'
import { getField } from '../../helpers/sql/index.ts'

export default (props: { id: string | number }) => {
  const id = props.id

  if (!id) return html`<p>No id provided</p>`

  const data = getField({ id })

  return html`
    <div class="svg-output" id="output_${id}">
      <!-- <p class="ts-xs">Output:</p> -->
      <output>${raw(data.value || '')}</output>
    </div>
  `
}
