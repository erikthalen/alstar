import { getOrCreateRow } from '../../utils/get-or-create-row.ts'
import { html } from '@alstar/studio/html'
import type { FieldDefStructure } from '../../types.ts'
import { Hono } from 'hono'
import { type HttpBindings } from '@hono/node-server'
import { streamSSE } from 'hono/streaming'
import { query } from '../../queries/index.ts'
import { slugify } from '../../utils/slugify.ts'

const app = new Hono<{ Bindings: HttpBindings }>()

app.get('/slug', async (c) => {
  try {
    const params = await c.req.query()

    if (!params.entryId) {
      return c.json({
        status: 404,
        message: 'Needs an entryId to generate slug',
      })
    }

    const entry = query.root({ id: params.entryId })
    const title = entry?.fields?.title?.value

    if (!title) {
      return c.json({ status: 404, message: 'No title to generate slug from' })
    }

    return streamSSE(c, async (stream) => {
      await stream.writeSSE({
        event: 'datastar-patch-signals',
        data: `signals { slug: '${slugify(title)}' }`,
      })
    })
  } catch (error) {
    console.log(error)
    return c.text('Error generating slug')
  }
})

export const routes = app

export default (props: {
  entryId: number | string
  parentId: number | string
  name: string
  id?: number
  structure: FieldDefStructure
  sortOrder?: number
}) => {
  const { entryId, parentId, name, structure, sortOrder = 0, id } = props

  const data = getOrCreateRow({
    parentId,
    name,
    field: structure,
    sortOrder,
    id,
  })

  if (!data) return html`<p>No block</p>`

  const entry = query.root({ id: entryId })
  const title = entry?.fields?.title?.value
  const sluggedTitle = slugify(title)

  return html`
    <div style="display: flex; align-items: center">
      <form
        data-on:change="@patch('/studio/api/block', {
          contentType: 'form',
          headers: {
            render: 'Entry LivePreview',
            props: '${JSON.stringify({ entryId: entryId })}'
          }
        })"
      >
        <vscode-form-container responsive>
          <vscode-form-group>
            <vscode-label for="block-${data.id}">
              ${structure.label}
            </vscode-label>
            <vscode-textfield
              value="${data.value}"
              id="block-${data.id}"
              name="value"
            ></vscode-textfield>
            <vscode-form-helper>
              <p class="ts-xs">${structure.description}</p>
            </vscode-form-helper>
          </vscode-form-group>
        </vscode-form-container>

        <!-- <quiet-text-field
          id="block-${data.id}"
          name="value"
          label="${structure.label}"
          value="${data.value}"
        >
          ${structure.description
          ? html`<span slot="description">
              <small>${structure.description}</small>
            </span>`
          : ''}
        </quiet-text-field> -->

        <input type="hidden" name="type" value="${structure.type}" />
        <input type="hidden" name="id" value="${data.id}" />
        <input type="hidden" name="entryId" value="${entryId}" />
        <input type="hidden" name="parentId" value="${parentId}" />
        <input type="hidden" name="name" value="${name}" />
      </form>

      <form
        data-on:submit="@patch('/studio/api/block', {
          contentType: 'form',
          headers: {
            render: 'Entry LivePreview',
            props: '${JSON.stringify({ entryId: entryId })}'
          }
        })"
      >
        <input type="hidden" name="id" value="${data.id}" />
        <input type="hidden" name="value" value="${sluggedTitle}" />

        <quiet-button
          appearance="text"
          id="generate_slug_field"
          type="submit"
          icon-label="Reload"
          size="xs"
        >
          <quiet-icon name="refresh"></quiet-icon>
        </quiet-button>

        <quiet-tooltip
          distance="0"
          without-arrow
          class="ts-label"
          for="generate_slug_field"
        >
          Generate slug
        </quiet-tooltip>
      </form>
    </div>
  `
}
