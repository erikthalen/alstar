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