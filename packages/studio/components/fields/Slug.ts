import { getOrCreateRow } from '../../utils/get-or-create-row.ts'
import { html } from '../../utils/html.ts'
import type { FieldDefStructure } from '../../types.ts'
import * as icons from '../icons.ts'
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

    console.log('slug', slugify(title))

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
  entryId: number
  parentId: number
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

  return html`
    <div
      style="display: flex; align-items: center"
      data-signals="{ slug: '${data.value}' }"
    >
      <form
        data-ref="form"
        data-on-input="@patch('/studio/api/block', { contentType: 'form' })"
        data-on-submit="@patch('/studio/api/block', { contentType: 'form' })"
        data-on-signal-patch="$form.requestSubmit()"
      >
        <hgroup>
          <label for="block-${data.id}">${structure.label}</label>
          <p><small>${structure.description}</small></p>
        </hgroup>

        <input
          id="block-${data.id}"
          name="value"
          type="text"
          data-bind="slug"
        />

        <input type="hidden" name="type" value="${structure.type}" />
        <input type="hidden" name="id" value="${data.id}" />
        <input type="hidden" name="entryId" value="${entryId}" />
        <input type="hidden" name="parentId" value="${parentId}" />
        <input type="hidden" name="name" value="${name}" />
      </form>

      <form
        style="margin-top: 21px"
        data-on-submit="@get('/studio/api/field/slug', { contentType: 'form' })"
      >
        <input type="hidden" name="entryId" value="${entryId}" />
        <button
          class="ghost"
          aria-label="Generate slug"
          data-tooltip="Generate slug"
          data-placement="top"
        >
          ${icons.arrowsRound}
        </button>
      </form>
    </div>
`
}
