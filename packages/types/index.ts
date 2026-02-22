import { HtmlEscapedString } from 'hono/utils/html'
import { StructureInstanceType } from './structure.ts'
import { PluginFactory } from './plugin.ts'

export * from './database.ts'
export * from './plugin.ts'
export * from './structure.ts'

export type BlockID = number | `${number}`

export type DBRow = {
  id: number
  created_at: string
  updated_at: string
  name: string
  label: string
  type: string
  sort_order: number
  value: string | null
  options: string | null
  status: 'enabled' | 'disabled'
  parent_id: number | null
  depth: number
}

export type StudioConfig = {
  siteName: string
  admin?: {
    logo?: HtmlEscapedString | Promise<HtmlEscapedString>
  }
  uploadBase: string
  database: string
  structure: StructureInstanceType
  plugins: PluginFactory[]
}
