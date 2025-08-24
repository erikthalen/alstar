import { db } from '@alstar/db'
import { sql } from '../utils/sql.ts'
import { type DBBlockResult } from '../types.ts'

function buildForest(blocks: DBBlockResult[]): DBBlockResult[] {
  const map = new Map<number, DBBlockResult>()
  const roots: DBBlockResult[] = []

  for (const block of blocks) {
    block.children = []
    map.set(block.id, block)
  }

  for (const block of blocks) {
    if (block.parent_id === null) {
      roots.push(block)
    } else {
      const parent = map.get(block.parent_id)
      if (parent) parent.children!.push(block)
    }
  }

  // Sort children by sort_order recursively
  const sortChildren = (node: DBBlockResult) => {
    node.children!.sort((a, b) => a.sort_order - b.sort_order)
    node.children!.forEach(sortChildren)
  }
  roots.forEach(sortChildren)

  return roots
}

function buildTree(blocks: DBBlockResult[]): DBBlockResult {
  const map = new Map<number, DBBlockResult>()
  const roots: DBBlockResult[] = []

  for (const block of blocks) {
    block.children = []
    map.set(block.id, block)
  }

  for (const block of blocks) {
    if (block.parent_id === null) {
      roots.push(block)
    } else {
      const parent = map.get(block.parent_id)
      if (parent) parent.children!.push(block)
    }
  }

  // Sort children by sort_order recursively
  const sortChildren = (node: DBBlockResult) => {
    node.children!.sort((a, b) => a.sort_order - b.sort_order)
    node.children!.forEach(sortChildren)
  }
  roots.forEach(sortChildren)

  return roots[0]
}

function transformBlocksTree(
  block: DBBlockResult,
  isBlocksChild?: boolean,
): DBBlockResult {
  const fields: Record<string, DBBlockResult> = {}
  let hasFields = false

  for (const child of block.children ?? []) {
    const transformedChild = transformBlocksTree(
      child,
      child.type === 'blocks',
    )

    if (!isBlocksChild) {
      hasFields = true
      fields[transformedChild.name] = transformedChild
    }
  }

  if(hasFields) {
    block.fields = fields
  }
  
  if (!isBlocksChild) {
    delete block.children
  } else {
    delete block.fields
  }

  return block
}

function transformForest(blocks: DBBlockResult[]): DBBlockResult[] {
  return blocks.map((block) => transformBlocksTree(block))
}

function rootQuery(filterSql: string, depthLimit?: number) {
  const depthLimitClause =
    depthLimit !== undefined ? `WHERE d.depth + 1 <= ${depthLimit}` : ''

  return sql`
    with recursive
      ancestors as (
        select
          id,
          created_at,
          updated_at,
          name,
          label,
          type,
          sort_order,
          value,
          options,
          status,
          parent_id,
          0 as depth
        from
          blocks
        where
          ${filterSql}
        union all
        select
          b.id,
          b.created_at,
          b.updated_at,
          b.name,
          b.label,
          b.type,
          b.sort_order,
          b.value,
          b.options,
          b.status,
          b.parent_id,
          a.depth + 1
        from
          blocks b
          inner join ancestors a on b.id = a.parent_id
      ),
      roots as (
        select
          id,
          created_at,
          updated_at,
          name,
          label,
          type,
          sort_order,
          value,
          options,
          status,
          parent_id,
          0 as depth
        from
          ancestors
        where
          parent_id is null
      ),
      descendants as (
        select
          id,
          created_at,
          updated_at,
          name,
          label,
          type,
          sort_order,
          value,
          options,
          status,
          parent_id,
          depth
        from
          roots
        union all
        select
          b.id,
          b.created_at,
          b.updated_at,
          b.name,
          b.label,
          b.type,
          b.sort_order,
          b.value,
          b.options,
          b.status,
          b.parent_id,
          d.depth + 1
        from
          blocks b
          inner join descendants d on b.parent_id = d.id ${depthLimitClause}
      )
    select
      *
    from
      descendants
    order by
      sort_order,
      id;
  `
}

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

export function roots(
  params: Record<string, any>,
  options?: {
    depth?: number
  },
): DBBlockResult[] | [] {
  const { filterSql, sqlParams } = buildFilterSql(params)

  const query = rootQuery(filterSql, options?.depth)
  const rows = db.database
    .prepare(query)
    .all(sqlParams) as unknown as DBBlockResult[]

  if (!rows.length) return []

  const forest = buildForest(rows)

  return transformForest(forest)
}

export function root(
  params: Record<string, any>,
  options?: { depth?: number },
): DBBlockResult | null {
  const { filterSql, sqlParams } = buildFilterSql(params)

  const query = rootQuery(filterSql, options?.depth)
  const rows = db.database
    .prepare(query)
    .all(sqlParams) as unknown as DBBlockResult[]

  if (!rows.length) return null

  const tree = buildTree(rows)

  return transformBlocksTree(tree)
}

export function block(params: Record<string, any>) {
  const { filterSql, sqlParams } = buildFilterSql(params)

  const query = sql`
    select
      *
    from
      blocks
    where
      ${filterSql}
  `

  return db.database.prepare(query).get(sqlParams) as unknown as DBBlockResult
}

export function blocks(params: Record<string, any>) {
  const { filterSql, sqlParams } = buildFilterSql(params)

  const query = sql`
    select
      *
    from
      blocks
    where
      ${filterSql}
    order by
     sort_order
  `

  return db.database.prepare(query).all(sqlParams) as unknown as DBBlockResult[]
}
