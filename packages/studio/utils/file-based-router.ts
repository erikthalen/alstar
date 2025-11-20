import fs from 'node:fs/promises'
import path from 'node:path'
import { Hono } from 'hono'
import { type HtmlEscapedString } from 'hono/utils/html'

export type Page<C> = (c?: C) => HtmlEscapedString | Promise<HtmlEscapedString>

export const fileBasedRouter = async (rootdir: string) => {
  // const router = new Hono()

  const root = path.resolve(rootdir)

  let dirs

  try {
    dirs = await fs.readdir(root, { recursive: true })
  } catch (error) {
    console.log('No files in:', root)
    return
  }

  const files = dirs.filter((dir) => path.extname(dir))

  return Promise.all(
    files.map(async (file): Promise<[string, any]> => {
      const pagePath = path.join(root, file)
      const page = Object.values(await import(pagePath)).at(-1)

      const relativePageFilePath = pagePath
        .split(rootdir.replace('.', ''))
        .at(-1)

      if (!relativePageFilePath) return ['', '']

      const pageFilePathWithoutExt = relativePageFilePath.replace(
        path.extname(relativePageFilePath),
        ''
      )

      if (pageFilePathWithoutExt === '/index') {
        // if (typeof page !== 'function') {
        //   router.get('/', (c) => c.notFound())
        //   return
        // }

        // router.get('/', (c) => c.html((page as Page<typeof c>)(c)))
        return ['/', page]
      }

      const routePath = pageFilePathWithoutExt.replaceAll('/index', '')

      const route = routePath.replace(
        /\[([^\]]+)\]/g, // [foo] and [bar]
        (_match, content) => `:${content}` // :foo and :bar
      )

      // if (typeof page !== 'function') {
      //   router.get(route, (c) => c.notFound())
      //   return
      // }

      return [route, page]
      // router.get(route, (c) => c.html((page as Page<typeof c>)(c)))
    })
  )

  // return router
}
