#!/usr/bin/env node
import path from 'node:path'
import { type SSGPlugin, toSSG } from 'hono/ssg'
import fs from 'fs/promises'

const root = path.resolve('.')

let app

try {
  app = (await import(path.join(root, 'index.ts'))).default
} catch (error) {
  console.log(error)
  console.log('Found no app')
  console.log('Main app needs to be the default export in ./index.ts')
  process.exit(1)
}

await existingStaticFolder()

const excludeStudioPlugin: SSGPlugin = {
  beforeRequestHook: (req) => {
    if (!req.url.includes('/studio/')) {
      return req
    }
    return false
  },
}

await toSSG(app, fs, { plugins: [excludeStudioPlugin] })

await fs.cp(path.join(root, 'public'), path.join(root, 'static'), {
  recursive: true,
})

console.log('🚀 Done generating static build')

process.exit(0)

async function existingStaticFolder() {
  return fs.rm(path.join(root, 'static'), { recursive: true }).catch(() => {
    process.exit(0)
  })
}
