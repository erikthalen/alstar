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

export type TODO = any
