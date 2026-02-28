import { raw } from 'hono/html'
import { sidebar } from './loader.ts'

export const docsPage = (content: string) => {
  return raw(`<div id="doc" class="vp-doc"><nav>${renderNav(sidebar)}</nav>
    <main>${content}</main></div>`)
}

function renderNav(items: any[]) {
  return `<ul>${items.map(renderItem).join('')}</ul>`
}

function renderItem(item: any): string {
  return `
    <li>
      <a href="/docs${item.path}">${item.title}</a>
      ${item.children?.length ? renderNav(item.children) : ''}
    </li>
  `
}
