import { html } from 'hono/html'
import { type Context } from 'hono'
import { css } from '@alstar/framework'
import { Widget } from '@alstar/types'

export default (c: Context, widgets: Widget[]) => {
  if (!Array.isArray(widgets)) {
    return html`<div class="widgets px-2">No widgets</div>`
  }

  return html`<div class="widgets px-2">${widgets.map((widget) => widget(c))}</div>`
}

export const styles = css`
  .widgets {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`
