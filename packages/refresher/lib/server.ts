import http, { type IncomingMessage, type ServerResponse } from 'node:http'
import fs from 'node:fs'

export function createRefresher({
  rootdir = '.',
  port = 5432,
  files,
}: {
  rootdir?: string
  port?: number
  files?: string[]
}) {
  let response: ServerResponse | undefined

  function requestRefresh(msg: string) {
    if (!response) return
    response.write(`data: ${msg} - ${Date.now()}\n\n`)
  }

  const watcher = fs.watch(rootdir, { recursive: true })

  watcher.on('change', (_, filename) => {
    if (!response) return

    if (files && !files.find(file => filename.includes(file))) return

    requestRefresh(filename.toString())
  })

  function eventsHandler(req: IncomingMessage, res: ServerResponse) {
    const headers = {
      'Content-Type': 'text/event-stream',
      Connection: 'keep-alive',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    }

    response = res

    res.writeHead(200, headers)
    req.on('close', () => (response = undefined))
  }

  const server = http.createServer(eventsHandler)

  // server.listen(port, () => console.log('\x1b[32m%s\x1b[0m', 'Refresher'))

  process.on('exit', () => {
    requestRefresh('Server restart')
    server.close()
  })

  process.on('SIGHUP', () => process.exit(128 + 1))
  process.on('SIGINT', () => process.exit(128 + 2))
  process.on('SIGTERM', () => process.exit(128 + 15))
}
