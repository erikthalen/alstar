import { database } from '../../../../index.ts'
import { sql } from '../../../../utils/sql.ts'

export const sqlQueryBlockWithChildren = sql`
  with recursive
    block_tree as (
      -- Start from the root block you want
      select
        id,
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
        id = ? -- <-- put your starting block id here
      union all
      -- Recursively select children
      select
        b.id,
        b.name,
        b.label,
        b.type,
        b.sort_order,
        b.value,
        b.options,
        b.status,
        b.parent_id,
        bt.depth + 1
      from
        block b
        inner join block_tree bt on b.parent_id = bt.id
    )
  select
    *
  from
    block_tree
  order by
    depth,
    sort_order;
`

export const sqlQueryDeleteBlockWithChildren = sql`
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
`

const query = sql`
  with recursive
    ancestors as (
      -- Start with the given block
      select
        id,
        name,
        parent_id,
        0 as depth
      from
        block
      where
        id = ?
      union all
      -- Recursively walk up to parents
      select
        b.id,
        b.name,
        b.parent_id,
        a.depth + 1
      from
        block b
        join ancestors a on b.id = a.parent_id
    )
  select
    name
  from
    ancestors
  order by
    depth desc;
`

/**
 * Given an id, returns the path of keys to the block in the structure
 * @param id - id of the block to get path to
 * @returns string[] - the path of keys in the structure to get to the block
 */
export const getParentsNames = (id: number | string): string[] => {
  const blocks = database.prepare(query).all(id)

  return blocks.map((block) => block.name!.toString())
}
