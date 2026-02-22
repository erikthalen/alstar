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
