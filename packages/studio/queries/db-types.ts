// db-types.ts
export type DBBase = {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  label: string;
  type: string;
  sort_order: number;
  value: string | null;
  options: any | null;
  status: string;
  parent_block_id: number | null;
  depth: number;
};
