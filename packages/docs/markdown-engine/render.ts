import { sidebar } from './loader.ts'

export function renderPage(content: string) {
  return `
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Docs</title>
  <link rel="stylesheet" href="https://unpkg.com/@catppuccin/highlightjs/css/catppuccin-mocha.css">
  <style>
    body { margin: 0; font-family: system-ui; display: flex; }
    nav { width: 260px; padding: 16px; border-right: 1px solid #222 }
    main { flex: 1; padding: 32px; max-width: 900px }
    a { color: #5ddcff; text-decoration: none }
    pre { border-radius: 8px }
  </style>
</head>
<body>
  <nav>${renderNav(sidebar)}</nav>
  <main>${content}</main>
</body>
</html>
`
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
