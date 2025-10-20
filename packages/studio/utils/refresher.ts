import fs from 'node:fs'
import path from 'node:path'
import { type Context } from 'hono'
import { html } from './html.ts'

let resolvers = new Set<(value: unknown) => void>()

async function setupRefreshPromise() {
  return new Promise(resolve => {
    resolvers.add(resolve)
  })
}

function requestRefresh() {
  resolvers.forEach(resolve => resolve(true))
}

export const refresher = ({ root, exclude }: { root: string, exclude: string }) => {
  const watcher = fs.watch(path.resolve(root), { recursive: true })

  watcher.on('change', () => requestRefresh())

  process.on('exit', () => requestRefresh())
  process.on('SIGHUP', () => process.exit(128 + 1))
  process.on('SIGINT', () => process.exit(128 + 2))
  process.on('SIGTERM', () => process.exit(128 + 15))

  return async (c: Context) => {
    await setupRefreshPromise()

    return c.text('')
  }
}

export const refreshClient = (port: number) => html`<script defer type="module">
    function reload() {
      const retry = async () => {
        if (await fetch('http://localhost:${port}').catch(() => false))
          window.location.reload()
        else requestAnimationFrame(retry)
      }

      retry()
    }

    console.log(
      '%c REFRESHER ACTIVE ',
      'color: green; background: lightgreen; border-radius: 2px'
    )

    const response = await fetch('http://localhost:${port}/refresh').catch(
      () => false
    )

    reload()
  </script>`
