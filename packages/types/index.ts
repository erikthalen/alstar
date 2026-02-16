import { HtmlEscapedString } from 'hono/utils/html'
import { StructureInstanceType } from './structure.ts'
import { PluginFactory } from './plugin.ts'

export * from './database.ts'
export * from './plugin.ts'
export * from './structure.ts'

export type BlockID = number | `${number}`

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