import { html } from 'hono/html'
import { type Context } from 'hono'
import { css } from '@alstar/framework'
import { Widget } from '@alstar/types'

export default (c: Context, widgets: Widget[]) => {
  if (!Array.isArray(widgets)) {
    return html`<div class="widgets pl-1">No widgets</div>`
  }

  return html`<ul class="widgets pl-1">
    ${widgets.map((widget) => html`<li>${widget(c)}</li>`)}
  </ul>`
}

export const styles = css`
  .widgets {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-block: 0.5rem;

    li > * {
      --brm: 1;

      container-name: widget;
      container-type: inline-size;

      corner-shape: squircle;
      border-radius: calc(12px * var(--brm));

      @supports (corner-shape: squircle) {
        --brm: 2;
      }
    }
  }
`
