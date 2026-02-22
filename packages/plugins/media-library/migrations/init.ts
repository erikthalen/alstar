import sql from 'sql-template-tag'

export const migration = sql`
  create table if not exists media_transforms (
    id INTEGER primary key autoincrement,
    created_at DATE default (datetime('now', 'localtime')),
    updated_at DATE default (datetime('now', 'localtime')),
    original_filename TEXT not null,
    filename TEXT not null,
    mime_type TEXT,
    width INTEGER,
    height INTEGER,
    foreign key (original_filename) references media (filename)
  );

  create table if not exists media (
    id INTEGER primary key autoincrement,
    created_at DATE default (datetime('now', 'localtime')),
    updated_at DATE default (datetime('now', 'localtime')),
    name TEXT not null,
    filename TEXT unique not null,
    mime_type TEXT,
    width INTEGER,
    height INTEGER
  );
`
