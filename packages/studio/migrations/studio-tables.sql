CREATE TABLE
  IF NOT EXISTS block (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at DATE DEFAULT (datetime ('now', 'localtime')),
    updated_at DATE DEFAULT (datetime ('now', 'localtime')),
    name TEXT not null,
    label TEXT not null,
    type TEXT,
    value TEXT,
    options JSON,
    status TEXT default 'enabled',
    sort_order INTEGER not null default 0,
    parent_id INTEGER,
    foreign key (parent_id) references block (id)
  );

CREATE TABLE
  IF NOT EXISTS setting (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at DATE DEFAULT (datetime ('now', 'localtime')),
    updated_at DATE DEFAULT (datetime ('now', 'localtime')),
    user_id TEXT not null,
    type TEXT NOT NULL,
    value TEXT,
    UNIQUE (user_id, type)
  );