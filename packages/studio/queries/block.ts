import { db } from '@alstar/db'
import { sql } from '../utils/sql.ts'
import { type DBBlockResult } from '../types.ts'

// function buildForest(blocks: DBBlockResult[]): DBBlockResult[] {
//   const map = new Map<number, DBBlockResult>()
//   const roots: DBBlockResult[] = []

//   for (const block of blocks) {
//     block.blocks = []
//     map.set(block.id, block)
//   }

//   for (const block of blocks) {
//     if (block.parent_id === null) {
//       roots.push(block)
//     } else {
//       const parent = map.get(block.parent_id)
//       if (parent) parent.blocks!.push(block)
//     }
//   }

//   // Sort blocks by sort_order recursively
//   const sortChildren = (node: DBBlockResult) => {
//     node.blocks!.sort((a, b) => a.sort_order - b.sort_order)
//     node.blocks!.forEach(sortChildren)
//   }
//   roots.forEach(sortChildren)

//   return roots
// }

// function transformBlocksTree(
//   block: DBBlockResult,
//   isBlocksChild?: boolean,
// ): DBBlockResult {
//   const fields: Record<string, DBBlockResult> = {}
//   let hasFields = false

//   for (const child of block.blocks ?? []) {
//     const transformedChild = transformBlocksTree(
//       child,
//       child.type === 'blocks',
//     )

//     if (!isBlocksChild) {
//       hasFields = true
//       fields[transformedChild.name] = transformedChild
//     }
//   }

//   if(hasFields) {
//     block.fields = fields
//   }
  
//   if (!isBlocksChild) {
//     delete block.blocks
//   } else {
//     delete block.fields
//   }

//   return block
// }

// function transformForest(blocks: DBBlockResult[]): DBBlockResult[] {
//   return blocks.map((block) => transformBlocksTree(block))
// }

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
          block
        where
          ${filterSql}
          AND status = 'enabled'
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
          block b
          inner join ancestors a on b.id = a.parent_id
        where
          b.status = 'enabled'
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
          block b
          inner join descendants d on b.parent_id = d.id
        where
          b.status = 'enabled'
          ${depthLimitClause}
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

// export function roots(
//   params: Record<string, any>,
//   options?: {
//     depth?: number
//   },
// ): DBBlockResult[] | [] {
//   const { filterSql, sqlParams } = buildFilterSql(params)

//   const query = rootQuery(filterSql, options?.depth)
//   const rows = db.database
//     .prepare(query)
//     .all(sqlParams) as unknown as DBBlockResult[]

//   if (!rows.length) return []

//   const forest = buildForest(rows)

//   return transformForest(forest)
// }

type DBRow = {
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

type TODO = any

function buildTree2(items: DBRow[]): TODO | null {
  const map = new Map<number, TODO>();

  // First pass: clone items into map
  for (const item of items) {
    map.set(item.id, { ...item });
  }

  let root: TODO | null = null;

  // Second pass: assign blocks to parents
  for (const item of map.values()) {
    if (item.parent_id === null) {
      root = item; // Root node
    } else {
      const parent = map.get(item.parent_id);
      if (parent) {
        if(parent.type === 'blocks') {
          if (!parent.blocks) parent.blocks = [];
          parent.blocks.push(item);
        } else {
          if (!parent.fields) parent.fields = {};
          parent.fields[item.name] = item;
        }
      }
    }
  }

  return root;
}

export function root(
  params: Record<string, any>,
  options?: { depth?: number },
): DBBlockResult | null {
  const { filterSql, sqlParams } = buildFilterSql(params)

  const query = rootQuery(filterSql, options?.depth)
  const rows = db.database
    .prepare(query)
    .all(sqlParams) as unknown as DBRow[]

  if (!rows.length) return null

  // const tree = buildTree(rows)

  const tree = buildTree2(rows)

  return tree // transformBlocksTree(tree)
}

export function block(params: Record<string, any>) {
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

export function blocks(params: Record<string, any>) {
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
