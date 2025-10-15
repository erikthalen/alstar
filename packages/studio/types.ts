import { type HttpBindings } from '@hono/node-server'
import { type Context } from 'hono'
import { type HonoOptions } from 'hono/hono-base'
import { type BlankInput, type BlankEnv } from 'hono/types'
import {
  BlockFieldInstance,
  BlockInstance,
  FieldInstance,
} from './utils/define.ts'

// DeepReadonly utility type
export type DeepReadonly<T> =
  T extends (...args: any[]) => any   // functions stay as-is
    ? T
    : T extends any[]        // arrays/tuples
      ? { [K in keyof T]: DeepReadonly<T[K]> }
      : T extends object              // objects
        ? { [K in keyof T]: DeepReadonly<T[K]> }
        : T;                          // primitives

export type PrimitiveField = {
  name: string
  label: string
  type: 'text' | 'slug' | 'markdown' | 'image' | 'reference'
}

export type BlockField = {
  name: string
  label: string
  blocks: Record<string, Field | Block>
}

export type Field = PrimitiveField | BlockField

export type Block = {
  name: string
  label: string
  type: string
  fields: Record<string, Field | Block>
}

export type Structure = Record<string, BlockDefStructure>
// export type Structure = Record<string, BlockDefStructure>

// --- Field & block definitions ---
type FieldType = 'text' | 'slug' | 'markdown' | 'image' | 'reference'

interface BaseField {
  label: string
  type: FieldType
  description?: string
}

interface TextField extends BaseField {
  type: 'text' | 'slug' | 'markdown'
}

interface TextFieldStructure extends TextField {
  instanceOf: typeof FieldInstance
}

interface ImageField extends BaseField {
  type: 'image'
}

interface ImageFieldStructure extends ImageField {
  instanceOf: typeof FieldInstance
}

interface ReferenceField extends BaseField {
  type: 'reference'
  to: string | string[]
}

export interface ReferenceFieldStructure extends ReferenceField {
  instanceOf: typeof FieldInstance
}

export interface BlocksFieldDef {
  label: string
  description?: string
  blocks: Record<string, BlockDefStructure | FieldDefStructure>
}

export interface BlocksFieldDefStructure extends BlocksFieldDef {
  instanceOf: typeof BlockFieldInstance
}

export type FieldDef = TextField | ImageField | ReferenceField
export type FieldDefStructure = TextFieldStructure | ImageFieldStructure | ReferenceFieldStructure

export interface BlockDef {
  label: string
  type: string
  fields: Record<string, FieldDefStructure | BlocksFieldDefStructure>
  description?: string
}

export interface BlockDefStructure extends BlockDef {
  instanceOf: typeof BlockInstance
}

// type DBDefaults = {
//   id: number
//   created_at: string
//   updated_at: string
//   name: string
//   label: string
//   // type: string
//   sort_order: number
//   value: string
//   options: string | null
//   status: 'enabled' | 'disabled'
//   parent_id: number | null
//   depth: number
// }

type BaseDBResult = {
  id: number
  created_at: string
  updated_at: string
  name: string
  label: string
  sort_order: number
  value: string | null
  options: any
  status: 'enabled' | 'disabled'
  parent_id: number | null
  depth: number
}

export type DBPrimitiveFieldResult = BaseDBResult & {
  type: FieldDef
}

export type DBBlockFieldResult = BaseDBResult & {
  blocks: DBBlockResult[]
}

export type DBBlockResult = BaseDBResult & {
  type: string
  fields: Record<string, DBFieldResult>
}

export type DBFieldResult = DBPrimitiveFieldResult & DBBlockFieldResult

export type DBBlock = Block & {
  id: number
  created_at: string
  updated_at: string
  value: string | null
  sort_order: number | null
  parent_id: number | null
  options: number | null
}

export type BlockStatus = 'enabled' | 'disabled'

export type StudioConfig = {
  siteName?: string
  honoConfig?: HonoOptions<BlankEnv>
  fileBasedRouter?: boolean,
  port?: number
  structure: Structure
}

export type RequestContext = Context<
  { Bindings: HttpBindings },
  string,
  BlankInput
>
