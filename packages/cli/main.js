#!/usr/bin/env node

import {
  intro,
  text,
  spinner,
  outro,
  log,
  isCancel,
  cancel,
} from '@clack/prompts'
import path from 'node:path'
import fs from 'node:fs/promises'
import crypto from 'node:crypto'

console.log(`
 █████╗ ██╗     ███████╗████████╗ █████╗ ██████╗ 
██╔══██╗██║     ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗
███████║██║     ███████╗   ██║   ███████║██████╔╝
██╔══██║██║     ╚════██║   ██║   ██╔══██║██╔══██╗
██║  ██║███████╗███████║   ██║   ██║  ██║██║  ██║
╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝
`)

intro('@alstar/create')

log.info(`This will generate a new Alstar app`)

let defaultName = 'alstar-app'
let defaultDir = './'

const name = await text({
  message: `What's the name of the project?`,
  placeholder: defaultName,
})

if (isCancel(name)) {
  cancel('Operation cancelled.')
  process.exit(0)
}

const dir = await text({
  message: 'Where should the project be located?',
  placeholder: defaultDir,
})

if (isCancel(dir)) {
  cancel('Operation cancelled.')
  process.exit(0)
}

const projectName = name || defaultName
const projectDir = dir || defaultDir

const s = spinner()

s.start(`Creating project in ${projectDir}${projectName}`)

const templatePath = path.join(import.meta.dirname, 'template')
const fullpath = path.join(path.resolve('.'), projectDir, projectName)

if (await directoryExists(fullpath)) {
  cancel('Directory already exists')
  process.exit(0)
}

await fs.cp(templatePath, fullpath, { recursive: true })
await fs.rename(
  path.join(fullpath, '_gitignore'),
  path.join(fullpath, '.gitignore'),
)

const RANDOM_TOKEN = crypto.randomBytes(64).toString('hex')

await fs.writeFile(
  path.join(fullpath, '.env'),
  `ALSTAR_JWT_ACCESS_TOKEN_SECRET=${RANDOM_TOKEN}`,
)

s.stop(`Created project in ${path.join(projectDir, projectName)}`)

log.info(`Next step:
cd ${path.join(projectDir, projectName)}
pnpm install
pnpm dev`)

outro(`Done!`)

async function directoryExists(path) {
  try {
    const stats = await fs.stat(path)
    return stats.isDirectory()
  } catch (err) {
    if (err.code === 'ENOENT') {
      // Path does not exist
      return false
    }
    // Some other error
    throw err
  }
}
