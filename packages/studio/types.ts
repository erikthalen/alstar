import type { HtmlEscapedString } from 'hono/utils/html'
import type { FieldType, StructureInstanceType } from './helpers/structure/types.ts'
import type { DatastarFileUpload } from '#media-library'

export type BlockStatus = 'enabled' | 'disabled'

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
  type: FieldType
}

export type DBBlockFieldResult = BaseDBResult & {
  blocks: DBBlockResult[]
}

export type DBBlockResult = BaseDBResult & {
  type: string
  fields: Record<string, DBResult>
}

export type DBResult = DBPrimitiveFieldResult | DBBlockFieldResult | DBBlockResult

export type StudioDefaultConfig = {
  siteName: string
  admin?: {
    logo?: HtmlEscapedString | Promise<HtmlEscapedString>
  }
  uploadBase: string
  database: string
  fileBasedRouter: boolean
  structure: StructureInstanceType
}

export type StudioUserConfig = {
  siteName?: string
  admin?: {
    logo?: HtmlEscapedString | Promise<HtmlEscapedString>
  }
  database?: string
  uploadBase?: string
  fileBasedRouter?: boolean
  structure: StructureInstanceType
}

export type MediaRow = {
  name: string
  filename: string
  mime_type: string
  width: number
  height: number
}

export type UserSettings = {
  explorer_locked?: 'true' | 'false'
  preview_enabled?: 'true' | 'false'
}

export type EntrySignalsValue = {
  type: 'entry'
  status: BlockStatus
}

export type BlockSignalsValue = {
  type: 'block'
  options: {
    collapsed: 'true' | 'false' | ''
  }
  status: BlockStatus
}

export type FieldSignalsValue = string

export type Signals = Record<
  `${number}` | number,
  EntrySignalsValue | BlockSignalsValue | FieldSignalsValue
> & {
  userSettings: UserSettings
  files?: DatastarFileUpload[]
  entry: {
    id: number
    status: BlockStatus
  }
}
