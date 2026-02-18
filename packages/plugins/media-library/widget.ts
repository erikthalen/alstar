import { html } from 'hono/html'
import { css } from '@alstar/framework'

export default () => {
  return html`
    <style>
      ${styles}
    </style>

    <div id="media_library_widget">
      <header>Media library</header>
      <a href="/studio/media-library">Library</a>
    </div>
  `
}

const styles = css`
  #media_library_widget {
    padding: 8px;
    border: 1px solid #1b1c31;
    background-color: rgb(10, 18, 25);
    color: #ccc;

    header {
      font-weight: bold;
      margin-bottom: 8px;
    }
  }
`
