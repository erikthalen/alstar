import { definePlugin, factory } from '@alstar/framework'
import { html } from 'hono/html'

declare module '@alstar/types' {
  interface FieldTypeMap {
    text: {
      type: 'text'
      label: string
      description?: string
    }
  }
}

export default definePlugin((api) => {
  const app = factory.createApp()

  app.post('/text-field/:id', (c) => {
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
        name: 'text',
        component: (id: number | `${number}`) => {
          const data = api.query.getField({ id })

          if (!data) return html`<p>No block</p>`

          return html`
            <quiet-text-field
              class="quiet-side-label"
              style="--label-width: 8ch;"
              label="Description"
              name="name"
              id="field_${id}"
              data-signals="{ ${id}: '${data.value}' }"
              data-bind:${id}
              data-on:input="@post('/studio/text-field/${id}')"
            >
            </quiet-text-field>
          `
          // return html`
          //   <vscode-textfield
          //     id="field_${id}"
          //     data-signals="{ ${id}: '${data.value}' }"
          //     data-bind:${id}
          //     data-on:input="@post('/studio/text-field/${id}')"
          //   >
          //   </vscode-textfield>
          // `
        },
      },
    ],
  }
})
