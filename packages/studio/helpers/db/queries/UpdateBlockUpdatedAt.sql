update block
set
  updated_at = datetime ('now', 'localtime')
where
  id = ?;