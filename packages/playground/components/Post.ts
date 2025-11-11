import { html, query } from '@alstar/studio'

export default () => {
  const data = query.page('pages', 1)

  return html`
    <div class="container">
      <article style="display: inline-block; margin: 20px 0;">
        <header>${data.title}</header>

        <pre><code>${JSON.stringify(data, null, 2)}</code></pre>

        <footer>${data.created_at}</footer>
      </article>
    </div>
  `
}
