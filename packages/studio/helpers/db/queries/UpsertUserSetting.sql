insert into
  setting (user_id, type, value, updated_at)
values
  (?, ?, ?, datetime('now'))
on conflict (user_id, type) do update
set
  value = excluded.value,
  updated_at = datetime('now');
