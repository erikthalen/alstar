import { sql } from './utils/sql.ts'

// -- Blocks
export const blocksTable = {
  tableName: 'blocks',
  columns: sql`
    name TEXT not null,
    label TEXT not null,
    type TEXT not null,
    sort_order INTEGER not null default 0,
    value TEXT,
    options JSON,
    status TEXT default 'enabled',
    parent_block_id INTEGER,
    foreign key (parent_block_id) references blocks (id)
  `,
}
