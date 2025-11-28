import { db } from '@alstar/db'
import { sql } from '../utils/sql.ts'

const query = sql`WITH RECURSIVE ancestors AS (
  -- Start with the given block
  SELECT
    id,
    name,
    parent_id,
    0 AS depth
  FROM block
  WHERE id = ?

  UNION ALL

  -- Recursively walk up to parents
  SELECT
    b.id,
    b.name,
    b.parent_id,
    a.depth + 1
  FROM block b
  JOIN ancestors a ON b.id = a.parent_id
)
SELECT name
FROM ancestors
ORDER BY depth DESC;`

/**
 * Given an id, returns the path of keys to the block in the structure
 * @param id - id of the block to get path to
 * @returns string[] - the path of keys in the structure to get to the block
 */
export const getParentsNames = (id: number | string): string[] => {
  const blocks = db.database.prepare(query).all(id)

  return blocks.map((block) => block.name!.toString())
}
