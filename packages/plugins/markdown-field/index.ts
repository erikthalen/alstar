import { definePlugin, factory } from '@alstar/framework'
import { Plugin } from '@alstar/types'
import { html } from 'hono/html'

declare module '@alstar/types' {
  interface FieldTypeMap {
    markdown: {
      type: 'markdown'
      label: string
      description?: string
    }
  }
}

const encodeBase64 = (string: string) => {
  return Buffer.from(string, 'utf8').toString('base64')
}

export default definePlugin((api) => {
  const app = factory.createApp()

  app.post('/markdown/:id', (c) => {
    const id = parseInt(c.req.param('id'))
    const user = c.get('user')
    const datastar = c.get('datastar')

    if (!datastar.signals) {
      return c.json({ status: 500, message: 'No signals' })
    }

    const value = datastar.signals[id]?.toString()

    if (value === undefined) {
      return c.json({ status: 500, message: 'No value' })
    }

    api.eventEmitter.emit('update-block', {
      userId: user?.id,
      id,
      payload: { value },
    })

    return c.json({ status: 200, message: 'success' })
  })

  return {
    app,
    public: [
      {
        filename: 'markdown-editor.js',
        root: import.meta.dirname,
      },
      {
        filename: 'markdown-editor.css',
        root: import.meta.dirname,
      },
    ],
    fields: [
      {
        name: 'markdown',
        component: async (id: number | `${number}`) => {
          if (!id) {
            return html`<p>No id provided</p>`
          }

          const data = api.query.getField({ id })
          const base64String = encodeBase64(data.value || '')

          if (!data) {
            return html`<p>No block</p>`
          }

          return html`
            <div id="markdown_${id}">
              <markdown-editor
                data-signals="{ ${id}: '${base64String}' }"
                data-value="${base64String}"
                data-on:input="$${id} = evt.detail; @post('/studio/markdown/${id}')"
              >
              </markdown-editor>
            </div>
          `
        },
      },
    ],
  } satisfies Plugin
})
