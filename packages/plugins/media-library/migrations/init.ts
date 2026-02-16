import sql from 'sql-template-tag'

export const migration = sql`CREATE TABLE
  IF NOT EXISTS media_transforms (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at DATE DEFAULT (datetime ('now', 'localtime')),
    updated_at DATE DEFAULT (datetime ('now', 'localtime')),
    original_filename TEXT not null,
    filename TEXT not null,
    mime_type TEXT,
    width INTEGER,
    height INTEGER,
    foreign key (original_filename) references media (filename)
  );

CREATE TABLE
  IF NOT EXISTS media (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at DATE DEFAULT (datetime ('now', 'localtime')),
    updated_at DATE DEFAULT (datetime ('now', 'localtime')),
    name TEXT not null,
    filename TEXT unique not null,
    mime_type TEXT,
    width INTEGER,
    height INTEGER
  );
  `
