import type { UserSettings } from '../../../types.ts'
import type { BlockStatus, DBBlockResult, DBRow, FieldTypeMap } from '@alstar/types'
import { sql } from '../../../utils/sql.ts'
import { sqlQueryRoot } from './queries/root.ts'
import { database, fields, type AuthType } from '../../../index.ts'

type TODO = any

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

  return tree as DBBlockResult | null
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
    .prepare(sql`
      update block
      set
        updated_at = datetime('now', 'localtime')
      where
        id = ?;
    `)
    .run(id)
}

export const setBlockStatus = (id: string | number, status: BlockStatus) => {
  return database
    .prepare(sql`
      update block
      set
        status = ?,
        updated_at = datetime('now', 'localtime')
      where
        id = ?;
    `)
    .run(status, id)
}

export const setBlockOption = (id: string | number, options: Record<string, any>) => {
  return database
    .prepare(sql`
      update block
      set
        options = ?,
        updated_at = datetime('now', 'localtime')
      where
        id = ?;
    `)
    .run(JSON.stringify(options), id)
}

export const updateBlockValue = (id: string | number, value: string) => {
  database
    .prepare(sql`
      update block
      set
        value = ?,
        updated_at = datetime('now', 'localtime')
      where
        id = ?;
    `)
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
    .prepare(sql`
      insert into
        block (${columns.join(', ')})
      values
        (${Array(columns.length).fill('? ')});
    `)
    .run(...Object.values(data))
}

export const deleteBlock = (id: string | number) => {
  const deletedBlocks = database
    .prepare(sql`
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
    `)
    .run(id)

  // unregisterEventHandler

  return deletedBlocks
}

function parseItem<T extends keyof FieldTypeMap>(item: DBRow): FieldTypeMap[T]['returns'] | string {
  const type = item.type as T
  const handler = fields[type]?.handler

  if (!handler) {
    return item.value
  }

  return handler(item)
}

function parseRoot(row: DBRow) {
  return {
    id: row.id,
    created_at: row.created_at,
    updated_at: row.updated_at,
    name: row.name,
    // label: row.label,
    type: row.type,
    options: row.options,
    status: row.status,
    fields: {},
  }
}

function parseBlock(row: DBRow) {
  return {
    name: row.name,
    // label: row.label,
    options: row.options,
  }
}

function parseBlockField(row: DBRow) {
  return {
    // label: row.label,
    options: row.options,
    blocks: [],
  }
}

function parse(row: DBRow) {
  if (row.type === 'collection' || row.type === 'single') {
    return parseRoot(row)
  } else if (row.type === 'blockfield') {
    return parseBlockField(row)
  } else if (row.type === 'block') {
    return parseBlock(row)
  } else {
    return parseItem(row)
  }
}

type Node = ReturnType<typeof parse>

function buildTree(items: DBRow[]): Node | null {
  const nodeMap = new Map<number, Node>()
  let root: Node | null = null

  // First pass: parse everything (no parent wiring yet)
  for (const item of items) {
    nodeMap.set(item.id, parse(item))
  }

  // Second pass: wire parent/children
  for (const item of items) {
    const node = nodeMap.get(item.id)!

    if (item.parent_id === null) {
      root = node
      continue
    }

    const originalParent = items.find((i) => i.id === item.parent_id)
    const parent = nodeMap.get(item.parent_id)

    if (!originalParent || !parent) continue

    if (originalParent.type === 'blockfield') {
      // @ts-expect-error
      parent.blocks = [...(parent.blocks ?? []), node]
    } else {
      // @ts-expect-error
      parent.fields = { ...(parent.fields ?? {}), [item.name]: node }
    }
  }

  return root
}

export const getUserSettings = (userId: string | undefined): UserSettings | undefined => {
  if (!userId) return

  const settingRows = userId
    ? database
        .prepare(sql`
          select
            type,
            value
          from
            setting
          where
            user_id = ?
        `)
        .all(userId)
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
    .prepare(sql`
      insert into
        setting (user_id, type, value, updated_at)
      values
        (?, ?, ?, datetime('now'))
      on conflict (user_id, type) do update
      set
        value = excluded.value,
        updated_at = datetime('now');
    `)
    .run(user.id, key, value.toString() || 'false')
}
