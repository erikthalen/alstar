import * as types from '../types.ts'
import { type HtmlEscapedString } from './html.ts'

export const defineConfig = (config: types.StudioConfig) => config

export const defineEntry = (
  fn: (
    c: types.RequestContext,
  ) => HtmlEscapedString | Promise<HtmlEscapedString>,
) => fn

export const FieldInstance = Symbol('field')
export const BlockFieldInstance = Symbol('blockfield')
export const BlockInstance = Symbol('block')

// --- Identity helpers (preserve literal types) ---
export function defineField(field: types.FieldDef): types.FieldDefStructure {
  return {
    ...field,
    instanceOf: FieldInstance,
  }
}

export function defineBlockField(
  field: types.BlocksFieldDef,
): types.BlocksFieldDefStructure {
  return {
    ...field,
    instanceOf: BlockFieldInstance,
  }
}

export function defineBlock<const O extends types.BlockFields>(block: types.BlockDef<O>): types.BlockDef<O> & types.BlockDefStructure {
  return { ...block, instanceOf: BlockInstance }
}

export function defineStructure(structure: types.Structure) {
  return structure
}
