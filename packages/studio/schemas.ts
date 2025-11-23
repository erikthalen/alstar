import { sql } from './utils/sql.ts'

export const settingTable = {
  tableName: 'setting',
  columns: sql`
    user_id TEXT not null,
    type TEXT NOT NULL,
    value TEXT,
    UNIQUE(user_id, type)
  `,
}

// -- Blocks
export const blocksTable = {
  tableName: 'block',
  columns: sql`
    name TEXT not null,
    label TEXT not null,
    type TEXT,
    value TEXT,
    options JSON,
    status TEXT default 'enabled',
    sort_order INTEGER not null default 0,
    parent_id INTEGER,
    foreign key (parent_id) references block (id)
  `,
}

// -- API keys
export const mediaTable = {
  tableName: 'media',
  columns: sql`
    name TEXT not null,
    filename TEXT unique not null,
    -- filepath TEXT not null,
    mime_type TEXT,
    width INTEGER,
    height INTEGER
    -- url TEXT not null
  `,
}

// -- API keys
export const mediaCacheTable = {
  tableName: 'media_cache',
  columns: sql`
    -- name TEXT not null,
    original_filename TEXT not null,
    filename TEXT not null,
    -- filepath TEXT not null,
    mime_type TEXT,
    width INTEGER,
    height INTEGER,
    -- url TEXT not null,
    foreign key (original_filename) references media (filename)
  `,
}

// -- API keys
// export const apiKeysTable = {
//   tableName: 'api_keys',
//   columns: sql`
//     name TEXT not null,
//     value TEXT,
//     hint TEXT
//   `,
// }
