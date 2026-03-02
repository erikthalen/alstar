import WidgetsLayout from '#layouts/WidgetsLayout.ts'
import { css, factory } from '@alstar/framework'
import { html } from 'hono/html'
import { ZoomUI } from './components/zoom-ui.ts'
import { ContextMenu } from './components/context-menu.ts'

export const app = factory.createApp()

app.get('/entries/:id', (c) => {
  const component = html`
<style>
      ${style}
    </style>
    <panning-workspace
      id="space"
      data-attr:zoom="$_space.zoom"
      data-attr:x="$_space.x"
      data-attr:y="$_space.y"
      data-signals:_space="{zoom:1,x:0,y:0}"
      data-on:change="$_space = evt.detail"
    >
      ${ZoomUI()} ${ContextMenu()}

      <div id="canvas">
        <p>Workspace</p>
      </div>

      <div id="ui">
        <div id="current_zoom"></div>
        <div id="current_x"></div>
        <div id="current_y"></div>
        <div id="current_width"></div>
        <div id="current_height"></div>
      </div>
    </panning-workspace>
  `

  return c.html(WidgetsLayout(c, component))
})

const style = css`
  panning-workspace {
    position: fixed;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;

    #ui {
      position: fixed;
      bottom: 1rem;
      right: 1rem;
      font-family: monospace;
    }

    #canvas {
      pointer-events: none;
      background: repeating-conic-gradient(#393939 0 25%, transparent 0 50%) 50% / 40px 40px;
      width: 100%;
      height: 100%;
      transform: matrix(
        var(--scale),
        0,
        0,
        var(--scale),
        calc(var(--x) * var(--scale)),
        calc(var(--y) * var(--scale))
      );

      * {
        margin: 0;
        scale: calc(1 / var(--scale));
        transform-origin: left top;
      }
    }
  }
`
