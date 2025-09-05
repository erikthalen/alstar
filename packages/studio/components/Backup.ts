import { html } from 'hono/html'

export default () => {
  return html`<article data-signals="{ status: null, message: '' }">
      <header>Backup</header>
      <form
        data-on-submit="@post('/studio/api/backup', { contentType: 'form' })"
      >
        <button type="submit">Backup database</button>
        <p data-style-color="$status === 200 ? 'green' : 'red'" data-text="$message || '&nbsp;'"></p>
      </form>
    </article>`
}
