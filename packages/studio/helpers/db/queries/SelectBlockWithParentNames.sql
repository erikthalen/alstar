WITH RECURSIVE
  ancestors AS (
    -- Start with the given block
    SELECT
      id,
      name,
      parent_id,
      0 AS depth
    FROM
      block
    WHERE
      id = ?
    UNION ALL
    -- Recursively walk up to parents
    SELECT
      b.id,
      b.name,
      b.parent_id,
      a.depth + 1
    FROM
      block b
      JOIN ancestors a ON b.id = a.parent_id
  )
SELECT
  name
FROM
  ancestors
ORDER BY
  depth DESC;