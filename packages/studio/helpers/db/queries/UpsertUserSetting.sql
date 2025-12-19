INSERT INTO
  setting (user_id, type, value, updated_at)
VALUES
  (?, ?, ?, datetime ('now')) ON CONFLICT (user_id, type) DO
UPDATE
SET
  value = excluded.value,
  updated_at = datetime ('now');