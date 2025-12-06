import { sql } from '../../../utils/sql.ts'

export function sqlQueryRoot(filterSql: string, depthLimit?: number) {
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

export function sqlQueryRootEnabled(filterSql: string, depthLimit?: number) {
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
