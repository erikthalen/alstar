update block
set
  options = ?,
  updated_at = datetime ('now', 'localtime')
where
  id = ?;