#!/usr/bin/env node
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

// process.removeAllListeners('warning')

const __filename = fileURLToPath(import.meta.url)

// Dev-only auto watch (opt out with ALSTAR_NO_WATCH=true)
const isDev =
  process.env.NODE_ENV !== 'production' &&
  process.env.ALSTAR_NO_WATCH !== 'true'
const alreadyBootstrapped = process.env.ALSTAR_WATCH_BOOTSTRAPPED === '1'

if (isDev && !alreadyBootstrapped) {
  // Start a watcher ON THIS FILE and mark the environment so the child won't re-spawn
  const childProcess = spawn(
    process.execPath,
    ['--watch', __filename, ...process.argv.slice(2)],
    // [__filename, ...process.argv.slice(2)],
    {
      stdio: 'inherit',
      env: { ...process.env, ALSTAR_WATCH_BOOTSTRAPPED: '1' },
    },
  )
  // Important: exit this launcher so only the watched child keeps running
  process.on('SIGINT', () => {
    childProcess.kill('SIGINT')
  })

  process.on('SIGTERM', () => {
    childProcess.kill('SIGTERM')
  })

  process.exit(0)

}

// --- Your actual CLI logic below ---
// console.log(import.meta.dirname, path.resolve('.'))
// import("./main.js").then(m => m.default());
