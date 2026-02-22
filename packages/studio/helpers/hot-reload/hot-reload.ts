import fs from 'node:fs'
import path from 'node:path'
import { type Context } from 'hono'
import { html } from 'hono/html'
import { createMiddleware } from 'hono/factory'
import { type HtmlEscapedString } from 'hono/utils/html'

type DatastarVariables = {
  'hot-reload': HtmlEscapedString | Promise<HtmlEscapedString>
}

declare module 'hono' {
  interface ContextVariableMap extends DatastarVariables {}
}

let resolvers = new Set<(value: unknown) => void>()

async function setupRefreshPromise() {
  return new Promise((resolve) => {
    resolvers.add(resolve)
  })
}

function requestRefresh(filename: string) {
  resolvers.forEach((resolve) => resolve(filename))
}

export const hotReload = ({ root, exclude }: { root: string; exclude: string | string[] }) => {
  const watcher = fs.watch(path.resolve(root), { recursive: true })

  const excludes = Array.isArray(exclude) ? exclude : [exclude]

  watcher.on('change', (_, filename) => {
    if (excludes.find((e) => filename.includes(e))) return
    requestRefresh(filename as string)
  })

  console.log(`[Hot Reload] - ${path.resolve(root)}`)

  process.on('exit', () => requestRefresh('Server restart'))
  process.on('SIGHUP', () => process.exit(128 + 1))
  process.on('SIGINT', () => process.exit(128 + 2))
  process.on('SIGTERM', () => process.exit(128 + 15))

  return async (c: Context) => {
    console.log('[Hot Reload] - Connection')
    const change = await setupRefreshPromise()
    console.log(`[Hot Reload] - ${change}`)

    return c.text('')
  }
}

export const hotReloadMiddleware = (enabled: boolean) => {
  return createMiddleware(async (c, next) => {
    if (!enabled) return await next()

    c.set(
      'hot-reload',
      html`<script defer type="module">
          function reload() {
            const retry = async () => {
              if (await fetch('/').catch(() => false)) window.location.reload()
              else requestAnimationFrame(retry)
            }

            retry()
          }

          console.log(
            '%c REFRESHER ACTIVE ',
            'color: green; background: lightgreen; border-radius: 2px',
          )

          const response = await fetch('/studio/hot-reload').catch(() => false)

          reload()
        </script>`,
    )

    await next()
  })
}
