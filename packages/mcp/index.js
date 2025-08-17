import {
  McpServer,
  ResourceTemplate,
} from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { z } from 'zod'
import path from 'node:path'

// Create an MCP server
const server = new McpServer({
  name: 'alstar-mcp-server',
  version: '1.0.0',
})

// Add an tool for creating an entry
server.registerTool(
  'create-entry',
  {
    title: 'Create entry',
    description: 'Creates a new entry in your Alstar Studio',
    inputSchema: { title: z.string() },
  },
  async ({ title }) => {
    const baseURL = process.env.STUDIO_URL
    const apiKey = process.env.API_KEY

    if (!baseURL) {
      return { content: [{ type: 'text', text: 'No STUDIO_URL supplied' }] }
    }

    if (!apiKey) {
      return { content: [{ type: 'text', text: 'No API_KEY supplied' }] }
    }

    const response = await fetch(path.join(baseURL, 'admin/mcp/entry'), {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + apiKey,
      },
    })

    if (!response.ok) {
      return { content: [{ type: 'text', text: response.statusText }] }
    }

    const json = await response.json()

    return {
      content: [{ type: 'text', text: JSON.stringify(json) }],
    }
  }
)

// Add a dynamic greeting resource
server.registerResource(
  'greeting',
  new ResourceTemplate('greeting://{name}', { list: undefined }),
  {
    title: 'Greeting Resource', // Display name for UI
    description: 'Dynamic greeting generator',
  },
  async (uri, { name }) => ({
    contents: [
      {
        uri: uri.href,
        text: `Hello, ${name}!`,
      },
    ],
  })
)

// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport()
await server.connect(transport)
