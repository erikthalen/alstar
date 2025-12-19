import { html } from 'hono/html'
import { getEntry } from '@alstar/studio/sql'

export default (c: any) => {
  const slug = c.req.param('slug')

  const data = getEntry({ name: 'slug', value: slug })

  return html`
    <h1>Hello!</h1>
    <p>${slug}</p>

    <pre><code>${JSON.stringify(data, null, 2)}</code></pre>
  `
}
