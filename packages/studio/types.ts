import { type HttpBindings } from '@hono/node-server'
import { type Context } from 'hono'
import { type HonoOptions } from 'hono/hono-base'
import { type BlankInput, type BlankEnv } from 'hono/types'

export type PrimitiveField = {
  name: string
  label: string
  type: 'text' | 'slug' | 'markdown' | 'image'
}

export type BlockField = {
  name: string
  label: string
  type: 'blocks'
  children: Record<string, Field | Block>
}

export type Field = PrimitiveField | BlockField

export type Block = {
  name: string
  label: string
  type: string
  fields: Record<string, Field | Block>
}

export type Structure = Record<string, BlockDef>

// --- Field & block definitions ---
type FieldType = 'text' | 'slug' | 'markdown' | 'blocks' | 'image';

interface BaseField {
  label: string;
  type: FieldType;
  description?: string
}

interface TextField extends BaseField {
  type: 'text' | 'slug' | 'markdown';
}

interface ImageField extends BaseField {
  type: 'image';
}

export interface BlocksField extends BaseField {
  type: 'blocks';
  children: Record<string, BlockDef | FieldDef>;
}

export type FieldDef = TextField | ImageField | BlocksField;

export interface BlockDef {
  label: string;
  type: string;
  fields: Record<string, FieldDef>;
  description?: string
}

type DBDefaults = {
  id: number
  created_at: string
  updated_at: string
  name: string
  label: string
  // type: string
  sort_order: number
  value: string
  options: string | null
  status: 'enabled' | 'disabled'
  parent_id: number | null
  depth: number
}

export type DBBlockResult = {
  id: number
  created_at: string
  updated_at: string
  name: string
  label: string
  type: string
  sort_order: number
  value: string | null
  options: any
  status: string
  parent_id: number | null
  depth: number
  children?: DBBlockResult[]
  fields?: Record<string, DBBlockResult>
}

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
  siteName: string
  honoConfig?: HonoOptions<BlankEnv>
  structure: Structure
}

export type RequestContext = Context<
  { Bindings: HttpBindings },
  string,
  BlankInput
>
