import { html } from 'hono/html'
import { type Block } from '../types.ts'
import { type HtmlEscapedString } from 'hono/utils/html'
import { query } from '../queries/index.ts'
import { db } from '@alstar/db'
import BlockComponent from './Block.ts'
import {
  buildStructurePath,
  type StructurePath,
} from '../utils/build-structure-path.ts'

function getData(parentId: string | number, field: Block, sortOrder: number) {
  const data = query.block({
    parent_block_id: parentId?.toString() || null,
    name: field.name,
    sort_order: sortOrder.toString(),
  })

  if (!data) {
    const change = db.insertInto('blocks', {
      name: field.name?.toString(),
      label: field.label?.toString(),
      type: field.type?.toString(),
      sort_order: sortOrder,
      parent_block_id: parentId,
    })

    return query.block({ id: change.lastInsertRowid.toString() })
  }

  return data
}

const Field = (props: {
  entryId: string | number
  parentId: string | number
  blockStructure: Block
  sortOrder?: number
  structurePath: StructurePath
}): HtmlEscapedString | Promise<HtmlEscapedString> => {
  const {
    entryId,
    parentId,
    blockStructure,
    sortOrder = 0,
    structurePath,
  } = props

  const data = getData(parentId, blockStructure, sortOrder)

  if (!data) return html`<p>No block</p>`

  const fieldStructurePath = buildStructurePath(blockStructure, structurePath)

  return html`
  ${sortOrder}
    ${blockStructure.type === 'slug' &&
    html`
      <form
        data-on-input="@patch('/admin/api/block', { contentType: 'form' })"
      >
        <label for="block-${data.id}">${blockStructure.label}</label>
        <input
          id="block-${data.id}"
          name="value"
          type="text"
          value="${data.value}"
        />

        <input type="hidden" name="type" value="${blockStructure.type}" />
        <input type="hidden" name="id" value="${data.id}" />
        <input type="hidden" name="entryId" value="${entryId}" />
        <input type="hidden" name="parentId" value="${parentId}" />
        <input type="hidden" name="sort_order" value="${sortOrder}" />
        <input type="hidden" name="name" value="${blockStructure.name}" />
        <input
          type="hidden"
          name="path"
          value="${fieldStructurePath.join('.')}"
        />
      </form>
    `}
    ${blockStructure.type === 'text' &&
    html`
      <form
        data-on-input="@patch('/admin/api/block', { contentType: 'form' })"
      >
        <label for="block-${data.id}">${blockStructure.label}</label>
        <input
          id="block-${data.id}"
          name="value"
          type="text"
          value="${data.value}"
        />

        <input type="hidden" name="type" value="${blockStructure.type}" />
        <input type="hidden" name="id" value="${data.id}" />
        <input type="hidden" name="entryId" value="${entryId}" />
        <input type="hidden" name="parentId" value="${parentId}" />
        <input type="hidden" name="sort_order" value="${sortOrder}" />
        <input type="hidden" name="name" value="${blockStructure.name}" />
        <input
          type="hidden"
          name="path"
          value="${fieldStructurePath.join('.')}"
        />
      </form>
    `}
    ${blockStructure.type === 'image' &&
    html`
      <form
        data-on-input="@patch('/admin/api/block', { contentType: 'form' })"
      >
        <label for="block-${data.id}">${blockStructure.label}</label>
        <input
          id="block-${data.id}"
          name="value"
          type="text"
          value="${data.value}"
        />

        <input type="hidden" name="type" value="${blockStructure.type}" />
        <input type="hidden" name="id" value="${data.id}" />
        <input type="hidden" name="entryId" value="${entryId}" />
        <input type="hidden" name="parentId" value="${parentId}" />
        <input type="hidden" name="sort_order" value="${sortOrder}" />
        <input type="hidden" name="name" value="${blockStructure.name}" />
        <input
          type="hidden"
          name="path"
          value="${fieldStructurePath.join('.')}"
        />
      </form>
    `}
    ${blockStructure.type === 'markdown' &&
    html`
      <form
        data-on-input="@patch('/admin/api/block', { contentType: 'form' })"
      >
        <label for="block-${data.id}">${blockStructure.label}</label>

        <textarea></textarea>

        <!-- <input
          id="block-${data.id}"
          name="value"
          type="text"
          value="${data.value}"
        /> -->

        <input type="hidden" name="type" value="${blockStructure.type}" />
        <input type="hidden" name="id" value="${data.id}" />
        <input type="hidden" name="entryId" value="${entryId}" />
        <input type="hidden" name="parentId" value="${parentId}" />
        <input type="hidden" name="sort_order" value="${sortOrder}" />
        <input type="hidden" name="name" value="${blockStructure.name}" />
        <input
          type="hidden"
          name="path"
          value="${fieldStructurePath.join('.')}"
        />
      </form>
    `}
    ${blockStructure.type === 'blocks' &&
    BlockComponent(entryId, data.id, blockStructure, fieldStructurePath)}
  `
}

export default Field
