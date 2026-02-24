import { definePlugin, factory } from '@alstar/framework'
import { Plugin } from '@alstar/types'
import { html } from 'hono/html'

declare module '@alstar/types' {
  interface FieldTypeMap {
    title: {
      type: 'title'
      props: {
        label: string
        description?: string
      }
      returns: string | null
    }
  }
}

export default definePlugin((api) => {
  const app = factory.createApp()

  app.post('/title-field/:id', (c) => {
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
    fields: [
      {
        type: 'title',
        component: (id: number | `${number}`, structure) => {
          const data = api.query.getField({ id })

          if (!data) return html`<p>No block</p>`

          return html`
            <quiet-text-field
              id="field_${id}"
              label="${structure.label}"
              description="${structure.description}"
              data-signals="{ ${id}: '${data.value}' }"
              data-bind:${id}
              data-on:input="@post('/studio/title-field/${id}')"
            >
            </quiet-text-field>
          `
        },
        handler: (row) => {
          return row.value
        },
      },
    ],
  } satisfies Plugin
})
