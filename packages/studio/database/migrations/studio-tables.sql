create table if not exists block (
  id INTEGER primary key autoincrement,
  created_at DATE default (datetime('now', 'localtime')),
  updated_at DATE default (datetime('now', 'localtime')),
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

create table if not exists setting (
  id INTEGER primary key autoincrement,
  created_at DATE default (datetime('now', 'localtime')),
  updated_at DATE default (datetime('now', 'localtime')),
  user_id TEXT not null,
  type TEXT not null,
  value TEXT,
  unique (user_id, type)
);
