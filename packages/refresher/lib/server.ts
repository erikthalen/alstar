import { type IncomingMessage, type ServerResponse } from 'node:http'
import fs from 'node:fs'
import path from 'node:path'

let responses = new Set<ServerResponse>()
let excludedFiles

export function refreshHandler(req: IncomingMessage, res: ServerResponse) {
  return 'hej'
  
  const headers = {
    'Content-Type': 'text/event-stream',
    Connection: 'keep-alive',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
  }

  responses.add(res)

  res.writeHead(200, headers)

  responses.forEach(res => res.write(`data: open\n\n`))

  req.on('close', () => responses.delete(res))
}

function requestRefresh(delay: boolean) {
  if (!responses.size) return

  responses.forEach(res => res.write(`data: ${delay}\n\n`))
}

export function createRefresher(root = '.', exclude: string) {
  excludedFiles = exclude

  const watcher = fs.watch(path.resolve(root), { recursive: true })

  watcher.on('change', () => requestRefresh(false))

  process.on('exit', () => requestRefresh(true))
  process.on('SIGHUP', () => process.exit(128 + 1))
  process.on('SIGINT', () => process.exit(128 + 2))
  process.on('SIGTERM', () => process.exit(128 + 15))
}
