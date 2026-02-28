import fg from 'fast-glob'
import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import MiniSearch from 'minisearch'
import { mdToHtml } from './markdown.ts'

export type Doc = {
  slug: string
  title: string
  html: string
  raw: string
}

export type NavItem = {
  title: string
  path: string
  children?: NavItem[]
}

const DOCS_DIR = path.resolve('./content')

export const search = new MiniSearch({
  idField: 'title',
  fields: ['title', 'content'],
  storeFields: ['title', 'slug'],
})

export const docs = new Map<string, Doc>()
export let sidebar: NavItem[] = []

export async function loadDocs() {
  const files = await fg('**/*.md', { cwd: DOCS_DIR })

  const navTree: NavItem[] = []

  for (const file of files) {
    const abs = path.join(DOCS_DIR, file)
    const raw = await fs.readFile(abs, 'utf8')
    const parsed = matter(raw)

    const slug = '/' + file.replace(/\.md$/, '').replace(/index$/, '')
    const title = parsed.data.title || extractTitle(parsed.content) || file

    const html = await mdToHtml(parsed.content)

    docs.set(slug, { slug, title, html, raw: parsed.content })

    search.add({
      slug,
      title,
      content: parsed.content,
    })

    insertNavItem(navTree, file, title)
  }

  sidebar = navTree
}

function extractTitle(md: string) {
  const m = md.match(/^#\s+(.*)/m)
  return m?.[1]
}

function insertNavItem(tree: NavItem[], file: string, title: string) {
  const parts = file.replace(/\.md$/, '').split('/')

  let current = tree

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]
    const slug = '/' + parts.slice(0, i + 1).join('/')

    let node = current.find((n) => n.path === slug)
    if (!node) {
      node = { title: part, path: slug, children: [] }
      current.push(node)
    }

    if (i === parts.length - 1) {
      node.title = title
    }

    current = node.children!
  }
}
