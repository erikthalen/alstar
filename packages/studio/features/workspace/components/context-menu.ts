import { html } from 'hono/html'

export const ContextMenu = () => {
  return html`
  <quiet-dropdown context-menu="space">
      <quiet-dropdown-item value="cut">Cut</quiet-dropdown-item>
      <quiet-dropdown-item value="cut">Copy</quiet-dropdown-item>
      <quiet-dropdown-item value="cut">Paste</quiet-dropdown-item>
      <quiet-divider></quiet-divider>
      <quiet-dropdown-item>
        Adjust
        <quiet-dropdown-item slot="submenu" value="brightness">Brightness</quiet-dropdown-item>
        <quiet-dropdown-item slot="submenu" value="contrast">Contrast</quiet-dropdown-item>
      </quiet-dropdown-item>
      <quiet-dropdown-item>
        Filters
        <quiet-dropdown-item slot="submenu">
          Artistic
          <quiet-dropdown-item slot="submenu" value="watercolor">Watercolor</quiet-dropdown-item>
          <quiet-dropdown-item slot="submenu" value="oil-paint">Oil Paint</quiet-dropdown-item>
          <quiet-dropdown-item slot="submenu" value="sketch">Sketch</quiet-dropdown-item>
        </quiet-dropdown-item>
        <quiet-dropdown-item slot="submenu">
          Color
          <quiet-dropdown-item slot="submenu" value="grayscale">Grayscale</quiet-dropdown-item>
          <quiet-dropdown-item slot="submenu" value="sepia">Sepia</quiet-dropdown-item>
          <quiet-dropdown-item slot="submenu" value="vibrance">Vibrance</quiet-dropdown-item>
        </quiet-dropdown-item>
        <quiet-dropdown-item slot="submenu" value="blur">Blur Effects</quiet-dropdown-item>
      </quiet-dropdown-item>
      <quiet-dropdown-item>
        Transform
        <quiet-dropdown-item slot="submenu" value="crop">Crop</quiet-dropdown-item>
        <quiet-dropdown-item slot="submenu" value="rotate">Rotate</quiet-dropdown-item>
        <quiet-dropdown-item slot="submenu" value="resize">Resize</quiet-dropdown-item>
      </quiet-dropdown-item>
    </quiet-dropdown>

  `
}
