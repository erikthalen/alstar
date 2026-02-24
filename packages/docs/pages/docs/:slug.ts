import { html, raw } from 'hono/html'
import fsp from 'node:fs/promises'
import path from 'node:path'
import markdownit from 'markdown-it'

const root = 'content'

export default async (slug: string) => {
  const content = await fsp.readFile(path.join(root, slug + '.md'))
  const md = markdownit()
  const result = md.render(content.toString())

  return html`
  ${raw(result)}`
}
