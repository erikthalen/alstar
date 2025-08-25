import http, { type IncomingMessage, type ServerResponse } from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import net from 'node:net'

export async function createRefresher({
  rootdir = '.',
  port = 5432,
  files,
}: {
  rootdir?: string
  port?: number
  files?: string[]
}): Promise<{ port: number }> {
  let response: ServerResponse | undefined

  function requestRefresh(msg: string) {
    if (!response) return
    
    response.write(`data: ${msg} - ${Date.now()} - ${path.parse(msg).dir.includes('public/')}\n\n`)
  }

  const watcher = fs.watch(path.resolve(rootdir), { recursive: true })

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

  const nextFreePort = await getNextPort(port)

  server.listen(nextFreePort)

  process.on('exit', () => {
    requestRefresh('Server restart')
    server.close()
  })

  process.on('SIGHUP', () => process.exit(128 + 1))
  process.on('SIGINT', () => process.exit(128 + 2))
  process.on('SIGTERM', () => process.exit(128 + 15))

  return { port: nextFreePort }
}

function getNextPort(port: number): Promise<number> {
  const Socket = net.Socket

  return new Promise((resolve, reject) => {
    const socket = new Socket()

    const timeout = () => {
      resolve(port)
      socket.destroy()
    }

    const next = () => {
      socket.destroy()
      resolve(getNextPort(++port))
    }

    setTimeout(timeout, 10)
    socket.on('timeout', timeout)

    socket.on('connect', () => next())

    socket.on('error', error => {
      // @ts-expect-error
      if (error.code !== 'ECONNREFUSED') reject(error)
      else resolve(port)
    })

    socket.connect(port, '0.0.0.0')
  })
}
