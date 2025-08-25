import { html } from 'hono/html'

export default () => {
  return html`<article>
      <header>Backup</header>
      <form data-on-submit="@post('/admin/api/backup', { contentType: 'form' })">
        <button type="submit">Backup database</button>
      </form>
    </article>`
}
