import type { HtmlEscapedString } from 'hono/utils/html'
import type { PluginFactory, StructureInstanceType, BlockStatus } from '@alstar/types'

export type StudioUserConfig = {
  siteName?: string
  admin?: {
    logo?: HtmlEscapedString | Promise<HtmlEscapedString>
  }
  database?: string
  uploadBase?: string
  structure: StructureInstanceType
  plugins?: PluginFactory[]
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
  // files?: DatastarFileUpload[]
  entry: {
    id: number
    status: BlockStatus
  }
}
