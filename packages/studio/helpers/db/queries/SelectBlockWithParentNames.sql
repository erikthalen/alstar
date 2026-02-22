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
