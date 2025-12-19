update block
set
  value = ?,
  updated_at = datetime ('now', 'localtime')
where
  id = ?;