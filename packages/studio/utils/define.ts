import * as types from '../types.ts'
import { type HtmlEscapedString } from './html.ts'

export const defineConfig = (config: types.StudioConfig) => config

export const defineStructure = (structure: types.Block[]) => structure
export const defineField = (field: types.Field) => field
export const defineBlock = (block: types.Block) => block

export const defineEntry = (
  fn: (
    c: types.RequestContext,
  ) => HtmlEscapedString | Promise<HtmlEscapedString>,
) => fn
