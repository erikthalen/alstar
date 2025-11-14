CREATE TABLE block (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at DATE DEFAULT (datetime('now')),
  updated_at DATE DEFAULT (datetime('now')),     
  name TEXT not null,
  label TEXT not null,
  type TEXT not null,
  sort_order INTEGER not null default 0,
  value TEXT,
  options JSON,
  status TEXT default 'enabled',
  parent_id INTEGER,
  _depth INTEGER,
  foreign key (parent_id) references blocks (id)
);

CREATE TABLE setting (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at DATE DEFAULT (datetime('now')),
  updated_at DATE DEFAULT (datetime('now')),     
  user_id TEXT not null,
  type TEXT not null,
  value TEXT
);

CREATE TABLE sqlite_sequence(name,seq);
