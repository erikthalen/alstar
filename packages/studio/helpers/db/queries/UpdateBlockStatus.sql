update block
set
  status = ?,
  updated_at = datetime('now', 'localtime')
where
  id = ?;
