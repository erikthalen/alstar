import { type HttpBindings } from '@hono/node-server'
import { type Context } from 'hono'
import { type HonoOptions } from 'hono/hono-base'
import { type BlankInput, type BlankEnv } from 'hono/types'
import {
  BlockFieldInstance,
  BlockInstance,
  FieldInstance,
} from './utils/define.ts'
import { type HtmlEscapedString } from 'hono/utils/html'

export type BlockStatus = 'enabled' | 'disabled'

type FieldType =
  | 'text'
  | 'title'
  | 'slug'
  | 'markdown'
  | 'image'
  | 'reference'
  | 'svg'

interface BaseField {
  label: string
  type: FieldType
  description?: string
  presentation?: 'svg'
}

// text fields
interface TextField extends BaseField {
  type: 'text' | 'title' | 'slug' | 'markdown' | 'svg'
}

interface TextFieldStructure extends TextField {
  instanceOf: typeof FieldInstance
}

// image field
interface ImageField extends BaseField {
  type: 'image'
}

interface ImageFieldStructure extends ImageField {
  instanceOf: typeof FieldInstance
}

// reference fields
interface ReferenceField extends BaseField {
  type: 'reference'
  to: string | string[]
}

export interface ReferenceFieldStructure extends ReferenceField {
  instanceOf: typeof FieldInstance
}

export type FieldDef = TextField | ImageField | ReferenceField
export type FieldDefStructure =
  | TextFieldStructure
  | ImageFieldStructure
  | ReferenceFieldStructure

// blocks fields
export interface BlocksFieldDef {
  label: string
  description?: string
  blocks: Record<string, BlockDefStructure | FieldDefStructure>
}

export interface BlocksFieldDefStructure extends BlocksFieldDef {
  instanceOf: typeof BlockFieldInstance
}

export type BlockFields = Record<
  string,
  FieldDefStructure | BlocksFieldDefStructure
>

// block
export type BlockDef<T extends BlockFields> = {
  type: string
  label: string
  description?: string
  preview?:
    | {
        field: keyof T
      }
    | {
        slug: string
      }
  icon?: string // https://tabler.io/icons
  fields: T
}

export type BlockDefStructure = BlockDef<BlockFields> & {
  instanceOf: typeof BlockInstance
}

type BaseDBResult = {
  id: number
  created_at: string
  updated_at: string
  name: string
  label: string
  sort_order: number
  value: string | null
  options: any
  status: BlockStatus
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
  fields: Record<string, DBResult>
}

export type DBResult =
  | DBPrimitiveFieldResult
  | DBBlockFieldResult
  | DBBlockResult

export type Structure = Record<string, BlockDefStructure>

export type StudioConfig = {
  siteName: string
  admin?: {
    logo?: HtmlEscapedString | Promise<HtmlEscapedString>
  }
  honoConfig: HonoOptions<BlankEnv>
  fileBasedRouter: boolean
  port: number
  structure: Structure
}

export type StudioConfigInput = {
  siteName?: string
  admin?: {
    logo?: HtmlEscapedString | Promise<HtmlEscapedString>
  }
  honoConfig?: HonoOptions<BlankEnv>
  fileBasedRouter?: boolean
  port?: number
  structure: Structure
}

export type RequestContext = Context<
  { Bindings: HttpBindings },
  string,
  BlankInput
>
