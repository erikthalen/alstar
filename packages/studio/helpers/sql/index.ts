import { db } from '@alstar/db'
import type { DBBlockResult } from '../../types.ts'
import { sql } from '../../utils/sql.ts'
import { sqlQueryRoot } from './queries/root.ts'
import type { DBRow, TODO } from './types.ts'

function buildFilterSql(params: Record<string, any>) {
  const entries = Object.entries(params)
  const filterSql = entries
    .map(([key, value]) =>
      value === null ? `${key} is null` : `${key} = :${key}`,
    )
    .join(' and ')

  let sqlParams: Record<keyof typeof params, any> = {}

  for (const param in params) {
    if (params[param] !== null) {
      sqlParams[param] = params[param]
    }
  }

  return { filterSql, sqlParams }
}

export function getEntry(
  params: Record<string, any>,
  options?: { depth?: number },
): DBBlockResult | null {
  const { filterSql, sqlParams } = buildFilterSql(params)

  const query = sqlQueryRoot(filterSql, options?.depth)
  const rows = db.database.prepare(query).all(sqlParams) as unknown as DBRow[]

  if (!rows.length) return null

  const tree = buildTree(rows)

  return tree
}

export function getField(params: Record<string, any>) {
  const { filterSql, sqlParams } = buildFilterSql(params)

  const query = sql`
    select
      *
    from
      block
    where
      ${filterSql}
  `

  return db.database.prepare(query).get(sqlParams) as unknown as DBBlockResult
}

export function getFields(params: Record<string, any>) {
  const { filterSql, sqlParams } = buildFilterSql(params)

  const query = sql`
    select
      *
    from
      block
    where
      ${filterSql}
    order by
     sort_order
  `

  return db.database.prepare(query).all(sqlParams) as unknown as DBBlockResult[]
}

function parse(item: any) {
  switch (item.type) {
    case 'text':
    case 'title':
    case 'slug':
    case 'svg':
    case 'markdown': {
      return item.value
    }

    case 'image': {
      return {
        src: item.value,
      }
    }

    case 'collection':
    case 'single': {
      delete item.parent_id
      delete item.sort_order
      delete item.value
      delete item.depth
      return item
    }

    case 'block':
    case 'blockfield': {
      delete item.id
      // delete item.created_at
      // delete item.updated_at
      delete item.parent_id
      delete item.sort_order
      delete item.value
      // delete item.type
      delete item.depth
      delete item.status

      return item
    }

    default: {
      return item
    }
  }
}

function buildTree(items: DBRow[]): TODO | null {
  const map = new Map<number, TODO>()

  // First pass: clone items into map
  for (const item of items) {
    map.set(item.id, item)
  }

  let root: TODO | null = null

  // Second pass: assign blocks to parents
  for (const item of map.values()) {
    if (item.parent_id === null) {
      root = parse(item)
    } else {
      const parent = map.get(item.parent_id)

      if (item.updated_at > parent.updated_at) {
        parent.updated_at = item.updated_at
      }

      if (parent.updated_at > root.updated_at) {
        root.updated_at = parent.updated_at
      }

      if (parent) {
        if (parent.type === 'blockfield') {
          if (!parent.blocks) parent.blocks = []

          parent.blocks.push(parse(item))
        } else {
          if (!parent.data) parent.data = {}

          parent.data[item.name] = parse(item)
        }
      }
    }
  }

  return root
}
