import { html } from 'hono/html'
import { query } from '../queries/index.ts'
import Fields from './Fields.ts'
import * as icons from './icons.ts'
import { type Block } from '../types.ts'
import Field from './Field.ts'
import {
  buildStructurePath,
  type StructurePath,
} from '../utils/build-structure-path.ts'

export default (
  entryId: string | number,
  id: string | number,
  fieldStructure: Block,
  structurePath: StructurePath,
) => {
  const data = query.block({ id: id.toString() })
  const blocks = query.blocks({ parent_block_id: id })

  if (!data) return html`<p>No block data</p>`

  const fieldStructurePath = buildStructurePath(fieldStructure, structurePath)

  return html`
  
    <section class="block">
      <header>
        <h5>${fieldStructure.label}</h5>

        <form
          data-on-submit="@post('/admin/api/new-block', { contentType: 'form' })"
        >
          <input type="hidden" name="parent_block_id" value="${id}" />
          <input
            type="hidden"
            name="sort_order"
            value="${blocks?.length || 0}"
          />

          <fieldset role="group">
            <select name="block">
              ${fieldStructure.fields?.map((field) => {
                return html`<option
                    value="entry_id:${entryId};type:${field.type};name:${field.name};label:${field.label};sort_order:${blocks?.length ||
                    0}"
                  >
                    ${field.label}
                  </option>`
              })}
            </select>

            <button
              class="outline"
              style="padding: 0 1rem"
              data-tooltip="New entry"
              data-placement="right"
              type="submit"
            >
              Add
            </button>
          </fieldset>
        </form>
      </header>

      <div data-sortable="${id}">
        ${blocks?.map((block, idx) => {
          const structure = fieldStructure.fields?.find(
            (field) => field.name === block.name,
          )

          if (!structure) return

          return html`
            <article
              data-signals="{ open${block.id}: true }"
            >
              <header>
                <h6>${structure.label}</h6>
                <div>
                  <button
                    data-on-click="$open${block.id} = !$open${block.id}"
                    style="margin-right: 0.5rem"
                    data-style-rotate="$open${block.id} ? '0deg' : '180deg'"
                    class="shadow"
                  >
                    ${icons.chevron}
                  </button>
                  <button class="shadow">${icons.bars}</button>
                </div>
              </header>

              <div data-show="$open${block.id}">
                ${structure.fields
                  ? Fields({
                      entryId,
                      parentId: block.id,
                      blockStructure: structure,
                      structurePath: [...fieldStructurePath, structure.name],
                    })
                  : Field({
                      entryId,
                      parentId: block.id,
                      blockStructure: structure,
                      sortOrder: idx,
                      structurePath: [...fieldStructurePath, structure.name],
                    })}
                
              </div>
            </article>
          `
        })}
      </div>
    </section>
  `
}
