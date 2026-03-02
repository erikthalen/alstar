import { css } from '@alstar/framework'
import { html } from 'hono/html'

export const ZoomUI = () => {
  return html`
  <style>
      ${styles}
    </style>

    <div class="zoom-ui">
      <quiet-dropdown>
        <quiet-button slot="trigger" with-caret data-text="Math.round($_space.zoom * 100) + '%'">
          100%
        </quiet-button>

        <quiet-dropdown-item value="reply" data-on:click="$_space.zoom *= 1.25">
          Zoom in
          <quiet-hotkey slot="details" keys="$cmdctrl +" appearance="unstyled"></quiet-hotkey>
        </quiet-dropdown-item>

        <quiet-dropdown-item value="forward">
          Zoom out
          <quiet-hotkey slot="details" keys="$cmdctrl -" appearance="unstyled"></quiet-hotkey>
        </quiet-dropdown-item>

        <quiet-dropdown-item value="move">
          Zoom to 100%
          <quiet-hotkey slot="details" keys="$cmdctrl 0" appearance="unstyled"></quiet-hotkey>
        </quiet-dropdown-item>

        <quiet-divider></quiet-divider>

        <quiet-dropdown-item value="archive">
          Reset to center
          <!-- <quiet-hotkey slot="details" keys="$cmdctrl C" appearance="unstyled"></quiet-hotkey> -->
        </quiet-dropdown-item>

        <!-- <quiet-dropdown-item value="delete" variant="destructive">
          Delete
          <span slot="details">Delete</span>
        </quiet-dropdown-item> -->
      </quiet-dropdown>
    </div>

    <!-- <quiet-button-group class="zoom-ui">
      <quiet-button size="xs">
        <quiet-icon slot="start" name="minus"></quiet-icon>
      </quiet-button>
      <quiet-button size="xs">
        <span>100%</span>
        <quiet-icon slot="end" name="chevron-down"></quiet-icon>
      </quiet-button>
      <quiet-button size="xs">
        <quiet-icon slot="start" name="plus"></quiet-icon>
      </quiet-button>
    </quiet-button-group> -->
  `
}

const styles = css`
  .zoom-ui {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 1;
  }
`
