import { css, definePlugin, factory } from '@alstar/framework'
import { html, raw } from 'hono/html'

declare module '@alstar/types' {
  interface FieldTypeMap {
    svg: {
      type: 'svg'
      label: string
      description?: string
    }
  }
}

export default definePlugin((api) => {
  const app = factory.createApp()

  app.post('/svg-field/:id', (c) => {
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
        name: 'svg',
        component: (id: number | `${number}`) => {
          const data = api.query.getField({ id })

          if (!data) return html`<p>No block</p>`

          return html`
            <div>
              <div class="svg-output" id="output_${id}">
                <output>${raw(data.value || '')}</output>
              </div>

              <style>
                ${styles}
              </style>

              <vscode-textfield
                id="id_${id}"
                placeholder="<svg> ..."
                data-signals:${id}="'${data.value}'"
                data-bind:${id}
                data-on:input="@post('/studio/svg-field/${id}')"
              >
              </vscode-textfield>
            </div>
          `
        },
      },
    ],
  }
})

const styles = css`
  .svg-output {
    max-width: 320px;

    p {
      color: var(--quiet-text-muted);
      margin-bottom: 0.5rem;
    }

    output {
      display: grid;
      max-height: 50px;

      padding: 3px 4px;
      border-radius: 2px;
      border: 1px solid var(--vscode-settings-textInputBorder);

      background: repeating-linear-gradient(
        130deg,
        var(--vscode-settings-textInputBackground),
        var(--vscode-settings-textInputBackground) 5px,
        var(--vscode-settings-textInputBorder) 5px,
        var(--vscode-settings-textInputBorder) 10px
      );

      svg {
        height: 100%;
        width: 100%;
      }
    }
  }
`
