import type { UserSettings } from '../../../types.ts'
import type { BlockStatus, DBBlockResult } from '@alstar/types'
import { sql } from '../../../utils/sql.ts'
import { sqlQueryRoot } from './queries/root.ts'
import type { DBRow, TODO } from './types.ts'
import { database, type AuthType } from '../../../index.ts'

function buildFilterSql(params: Record<string, any>) {
  const entries = Object.entries(params)
  const filterSql = entries
    .map(([key, value]) => (value === null ? `${key} is null` : `${key} = :${key}`))
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
  params: string | Record<string, any>,
  options?: { depth?: number },
): DBBlockResult | null {
  let input: Record<string, any> = {}

  if (typeof params === 'string') {
    input['name'] = params
  } else {
    for (const key in params) {
      if (key === 'id') {
        input['id'] = params[key]
      } else {
        input['name'] = key
        input['value'] = params[key]
      }
    }
  }

  const { filterSql, sqlParams } = buildFilterSql(input)

  const query = sqlQueryRoot(filterSql, options?.depth)

  const rows = database.prepare(query).all(sqlParams) as unknown as DBRow[]

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

  return database.prepare(query).get(sqlParams) as unknown as DBBlockResult
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

  return database.prepare(query).all(sqlParams) as unknown as DBBlockResult[]
}

export const setUpdatedAt = (id: string | number) => {
  return database
    .prepare(
      sql`
        update block
        set
          updated_at = datetime('now', 'localtime')
        where
          id = ?;
      `,
    )
    .run(id)
}

export const setBlockStatus = (id: string | number, status: BlockStatus) => {
  return database
    .prepare(
      sql`
        update block
        set
          status = ?,
          updated_at = datetime('now', 'localtime')
        where
          id = ?;
      `,
    )
    .run(status, id)
}

export const setBlockOption = (id: string | number, options: Record<string, any>) => {
  return database
    .prepare(
      sql`
        update block
        set
          options = ?,
          updated_at = datetime('now', 'localtime')
        where
          id = ?;
      `,
    )
    .run(JSON.stringify(options), id)
}

export const updateBlockValue = (id: string | number, value: string) => {
  database
    .prepare(
      sql`
        update block
        set
          value = ?,
          updated_at = datetime('now', 'localtime')
        where
          id = ?;
      `,
    )
    .run(value, id)
}

export const createBlock = (values: {
  type: string
  name: string
  label: string
  parent_id: number | string | null
  sort_order?: number
}) => {
  const data: Record<string, string> = JSON.parse(
    JSON.stringify({
      type: values.type,
      name: values.name,
      label: values.label,
      parent_id: values.parent_id,
      sort_order: values.sort_order ?? 0,
    }),
  )

  const columns = Object.keys(data)

  database
    .prepare(
      sql`insert into block (${columns.join(', ')}) values (${Array(columns.length).fill('? ')});`,
    )
    .run(...Object.values(data))
}

export const deleteBlock = (id: string | number) => {
  const deletedBlocks = database
    .prepare(
      sql`
  with recursive
  block_tree as (
      -- start from the root block you want to delete
      select
        id
      from
        block
      where
        id = ?
      union all
      -- recursively select children
      select
        b.id
      from
        block b
        inner join block_tree bt on b.parent_id = bt.id
    )
  delete from block
  where
    id in (
      select
        id
      from
        block_tree
    );
`,
    )
    .run(id)

  // unregisterEventHandler

  return deletedBlocks
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
      delete item.created_at
      delete item.updated_at
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

export const getUserSettings = (userId: string | undefined): UserSettings | undefined => {
  if (!userId) return

  const settingRows = userId
    ? database.prepare(sql`select type, value from setting where user_id = ?`).all(userId)
    : []

  const settings = settingRows.reduce<Record<string, string | undefined>>(
    (acc, row) => ({ ...acc, [row.type as string]: row.value?.toString() }),
    {},
  ) as UserSettings

  return settings
}

export const updateUserSetting = (user: AuthType['user'], setting: TODO) => {
  if (!user) return

  const [key, value] = setting

  database
    .prepare(
      sql`
        INSERT INTO setting (user_id, type, value, updated_at)
        VALUES (?, ?, ?, datetime('now'))
        ON CONFLICT(user_id, type)
        DO UPDATE SET
          value = excluded.value,
          updated_at = datetime('now');
      `,
    )
    .run(user.id, key, value.toString() || 'false')
}
