import { DatabaseSync } from "node:sqlite";
import { sql } from "../utils/sql.ts";

// --- Field & block definitions ---
type FieldType = 'text' | 'slug' | 'markdown' | 'blocks' | 'image';

interface BaseField {
  label: string;
  type: FieldType;
}

interface TextField extends BaseField {
  type: 'text' | 'slug' | 'markdown';
}

interface ImageField extends BaseField {
  type: 'image';
}

interface BlocksField extends BaseField {
  type: 'blocks';
  children: Record<string, BlockDef>;
}

type FieldDef = TextField | ImageField | BlocksField;

interface BlockDef {
  label: string;
  type: string;
  fields: Record<string, FieldDef>;
}

// --- Identity helpers (preserve literal types) ---
export function defineField<T extends FieldDef>(field: T) {
  return field;
}

export function defineBlock<T extends BlockDef>(block: T) {
  return block;
}

export function defineStructure<T extends Record<string, BlockDef>>(structure: T) {
  return structure;
}

// --- Type mapping from structure to data ---
type FieldToType<F extends FieldDef> =
  F['type'] extends 'text' | 'slug' | 'markdown' ? string :
  F['type'] extends 'image' ? string :
  F['type'] extends 'blocks'
    ? {
        [K in keyof F['children']]: {
          type: K;
          data: BlockData<F['children'][K]>;
        }
      }[keyof F['children']][]
    : never;

type BlockData<B extends BlockDef> = {
  [K in keyof B['fields']]: FieldToType<B['fields'][K]>;
};

type StructureData<S extends Record<string, BlockDef>> = {
  [K in keyof S]: BlockData<S[K]>;
};

// This will be inferred after you define your structure
export type CMSData<S extends Record<string, BlockDef>> = StructureData<S>;


interface DBBase {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  label: string;
  type: string;
  sort_order: number;
  value: string | null;
  options: any;
  status: string;
  parent_id: number | null;
}

export function buildTypedForest<
  S extends Record<string, BlockDef>,
  K extends keyof S
>(
  rows: DBBase[],
  rootDef: S[K]
): CMSData<S>[K][] {
  const map = new Map<number, DBBase & { children: DBBase[] }>();

  // Initialize with children arrays
  for (const r of rows) {
    map.set(r.id, { ...r, children: [] });
  }

  // Link children to parents
  const roots: (DBBase & { children: DBBase[] })[] = [];
  for (const r of rows) {
    const node = map.get(r.id)!;
    if (r.parent_id === null) {
      roots.push(node);
    } else {
      const parent = map.get(r.parent_id);
      if (parent) parent.children.push(node);
    }
  }

  // Recursive transformer: maps a DB row into typed data
  function transformNode<D extends FieldDef | BlockDef>(
    node: DBBase & DBBase['type'] extends 'blocks' ? { children: DBBase[] } : {},
    def: D
  ): any {
    if ('fields' in def) {
      // It's a BlockDef
      const result: any = {};
      for (const key in def.fields) {
        const fieldDef = def.fields[key];
        const childNode = node.children.find(c => c.name === key);
        result[key] = childNode
          ? transformNode(childNode, fieldDef)
          : getDefaultValue(fieldDef);
      }
      return result;
    } else {
      // It's a FieldDef
      if (def.type === 'text' || def.type === 'slug' || def.type === 'markdown') {
        return node.value ?? '';
      }
      if (def.type === 'image') {
        return node.value ?? '';
      }
      if (def.type === 'blocks') {
        return node.children.map(child => {
          const childDef = def.children[child.name as keyof typeof def.children];
          return {
            type: child.name as keyof typeof def.children,
            data: transformNode(child, childDef)
          };
        });
      }
    }
  }

  // Provide safe defaults for missing fields
  function getDefaultValue(fieldDef: FieldDef): any {
    if (fieldDef.type === 'blocks') return [];
    return '';
  }

  // Map all root nodes into typed data
  return roots.map(root => transformNode(root, rootDef));
}


function rootQuery(filterSql: string, depthLimit?: number) {
  const depthLimitClause =
    depthLimit !== undefined ? `WHERE d.depth + 1 <= ${depthLimit}` : '';

  return sql`
    with recursive
      ancestors as (
        select
          id, created_at, updated_at, name, label, type, sort_order, value, options, status, parent_id,
          0 as depth
        from blocks
        where ${filterSql}
        union all
        select
          b.id, b.created_at, b.updated_at, b.name, b.label, b.type, b.sort_order, b.value, b.options, b.status, b.parent_id,
          a.depth + 1
        from blocks b
        inner join ancestors a on b.id = a.parent_id
      ),
      roots as (
        select * from ancestors where parent_id is null
      ),
      descendants as (
        select * from roots
        union all
        select
          b.id, b.created_at, b.updated_at, b.name, b.label, b.type, b.sort_order, b.value, b.options, b.status, b.parent_id,
          d.depth + 1
        from blocks b
        inner join descendants d on b.parent_id = d.id ${depthLimitClause}
      )
    select * from descendants
    order by parent_id, sort_order
  `;
}

export function queryTypedRoot<
  S extends Record<string, BlockDef>,
  K extends keyof S
>(
  db: DatabaseSync,
  structure: S,
  blockType: K,
  opts: { id?: number; depthLimit?: number }
): CMSData<S>[K][] {
  let filterSql: string;
  if (opts.id !== undefined) {
    filterSql = `id = ${opts.id}`;
  } else {
    filterSql = `type = '${String(structure[blockType].type)}'`;
  }

  const sql = rootQuery(filterSql, opts.depthLimit);
  const rows = db.prepare(sql).all() as unknown as DBBase[];

  return buildTypedForest(rows, structure[blockType]);
}