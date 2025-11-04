import { sql } from './utils/sql.ts'

// export const usersTable = {
//   tableName: 'users',
//   columns: sql`
//     username TEXT not null,
//     hash TEXT,
//     refresh_token TEXT
//   `,
// }


// -- Blocks
export const blocksTable = {
  tableName: 'blocks',
  columns: sql`
    name TEXT not null,
    label TEXT not null,
    type TEXT,
    value TEXT,
    options JSON,
    status TEXT default 'enabled',
    sort_order INTEGER not null default 0,
    -- _depth INTEGER,
    parent_id INTEGER,
    foreign key (parent_id) references blocks (id)
  `,
}

// -- API keys
export const apiKeysTable = {
  tableName: 'api_keys',
  columns: sql`
    name TEXT not null,
    value TEXT,
    hint TEXT
  `,
}
