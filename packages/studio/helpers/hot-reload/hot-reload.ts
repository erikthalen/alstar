import fs from 'node:fs'
import path from 'node:path'
import { type Context } from 'hono'
import { html } from '@alstar/studio/html'

let resolvers = new Set<(value: unknown) => void>()

async function setupRefreshPromise() {
  return new Promise((resolve) => {
    resolvers.add(resolve)
  })
}

function requestRefresh() {
  resolvers.forEach((resolve) => resolve(true))
}

export const hotReload = ({
  root,
  exclude,
}: {
  root: string
  exclude: string | string[]
}) => {
  const watcher = fs.watch(path.resolve(root), { recursive: true })

  const excludes = Array.isArray(exclude) ? exclude : [exclude]

  watcher.on('change', (_, filename) => {
    if (excludes.find((e) => filename.includes(e))) return
    requestRefresh()
  })

  console.log(`[Hot Reload] - ${path.resolve(root)}`)

  process.on('exit', () => requestRefresh())
  process.on('SIGHUP', () => process.exit(128 + 1))
  process.on('SIGINT', () => process.exit(128 + 2))
  process.on('SIGTERM', () => process.exit(128 + 15))

  return async (c: Context) => {
    await setupRefreshPromise()

    return c.text('')
  }
}

export const hotReloadClient = (port: number) => html`<script
  defer
  type="module"
>
  function reload() {
    const retry = async () => {
      if (await fetch('/').catch(() => false))
        window.location.reload()
      else requestAnimationFrame(retry)
    }

    retry()
  }

  console.log(
    '%c REFRESHER ACTIVE ',
    'color: green; background: lightgreen; border-radius: 2px'
  )

  const response = await fetch('/hot-reload').catch(
    () => false
  )

  reload()
</script>`
