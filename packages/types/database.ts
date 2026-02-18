import { FieldType } from './structure.ts'

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

export type DBResult = DBPrimitiveFieldResult | DBBlockFieldResult | DBBlockResult

export type DBBlockResult = BaseDBResult & {
  type: string
  fields: Record<string, DBResult>
}
