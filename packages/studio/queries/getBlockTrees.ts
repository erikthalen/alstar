// types-and-runtime.ts
// import Database from "better-sqlite3";
import { DatabaseSync } from "node:sqlite";
import { sql } from "../utils/sql.ts";

/* =========================
   Runtime helpers (preserve literal types)
   ========================= */
export type FieldType = "text" | "slug" | "markdown" | "image" | "blocks";

export function defineField<const T extends { name: string; label: string; type: FieldType; fields?: readonly any[] }>(def: T) {
  return def;
}

export function defineBlock<const T extends { name: string; label: string; type: string; fields?: readonly any[] }>(def: T) {
  return def;
}

export function defineStructure<const T extends readonly any[]>(blocks: T) {
  return blocks;
}

/* =========================
   DB base type (every row shape)
   ========================= */
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
  parent_id: number | null;
  depth: number;
};

/* =========================
   Type-level mapping: from structure literal -> runtime result types
   ========================= */

type ArrayElement<T> = T extends readonly (infer U)[] ? U : never;

/** PrimitiveLeaf: non-'blocks' field instance */
type PrimitiveLeafNode<Name extends string, TypeStr extends string> = DBBase & {
  readonly name: Name;
  readonly type: TypeStr;
  readonly children?: []; // leaf has no children array
  readonly fields?: {};   // leaf has empty fields
};

/** Blocks wrapper node (a field with type 'blocks') */
type BlocksWrapperNode<Name extends string, SubBlocks extends readonly any[]> = DBBase & {
  readonly name: Name;
  readonly type: "blocks";
  // children are the instances of BlockNodeFromDefs for nested block defs
  readonly children: BlockNodeFromDefs<SubBlocks>[];
  readonly fields: {}; // wrapper itself doesn't define extra fields in DSL
};

/** For a FieldDef literal F, produce its runtime node type */
type FieldNodeFromLiteral<F> =
  F extends { name: infer N extends string; type: infer FT extends string }
    ? FT extends "blocks"
      ? F extends { fields: infer SB extends readonly any[] }
        ? BlocksWrapperNode<N, SB>
        : PrimitiveLeafNode<N, FT>
      : PrimitiveLeafNode<N, FT>
    : never;

/** Given an array of FieldDefs, produce a mapping name -> appropriate Node */
type FieldsFromFieldDefs<TDefs> =
  TDefs extends readonly any[]
    ? {
        [P in ArrayElement<TDefs> as P extends { name: infer N extends string } ? N : never]:
          FieldNodeFromLiteral<P>;
      }
    : {};

/** A Block node (for a BlockDef literal B) */
type BlockNodeFromLiteral<B> =
  B extends { name: infer BN extends string; type: infer BT extends string; fields?: infer BF extends readonly any[] }
    ? DBBase & {
        readonly name: BN;
        readonly type: BT;
        // The block's fields mapping is built from B.fields (may include blocks wrappers)
        readonly fields: FieldsFromFieldDefs<BF>;
        // Block instances themselves do not keep a top-level children array (their nested content is in fields),
        // except for "blocks" wrapper nodes (which are FieldNodes, not BlockNodes).
        readonly children?: []; // mainly unused for normal block instances
      }
    : never;

/** Build union type for an array of BlockDefs */
type BlockNodeFromDefs<TDefs extends readonly any[]> =
  ArrayElement<TDefs> extends infer B ? (B extends any ? BlockNodeFromLiteral<B> : never) : never;

/** Final result type returned by getBlockTrees for a given structure */
export type BlockTreeFromStructure<TStructure extends readonly any[]> =
  BlockNodeFromDefs<TStructure>[];


/* =========================
   RUNTIME: fetch + build + transform
   ========================= */

/**
 * Builds adjacency (map of id->node) and attaches children arrays.
 * Then transforms nodes so that:
 *  - each node gets .fields where immediate children are mapped by child.name
 *  - if node.type === "blocks" -> keep node.children as the array of nested blocks
 *  - otherwise -> clear node.children (we represent children via fields on the parent)
 */
function buildForestRows(rows: (DBBase)[]) {
  const map = new Map<number, any>();
  for (const r of rows) {
    // copy DBBase row into mutable node
    map.set(r.id, {
      ...r,
      children: [],
      fields: {}
    });
  }

  const roots: any[] = [];
  for (const r of rows) {
    const node = map.get(r.id)!;
    if (r.parent_id === null) {
      roots.push(node);
    } else {
      const parent = map.get(r.parent_id);
      if (parent) parent.children.push(node);
    }
  }

  // Recursively transform nodes bottom-up
  function transformNode(node: any) {
    // first transform children
    for (const child of node.children) {
      transformNode(child);
    }

    // build fields map from immediate children keyed by child.name
    const fields: Record<string, any> = {};
    for (const child of node.children) {
      // assign the transformed child as field value
      fields[child.name] = child;
    }

    node.fields = fields;

    // Important: keep the children array only for 'blocks' wrapper nodes,
    // because wrappers need to hold their nested block instances under children.
    // For all other nodes we clear children (they are exposed via node.fields)
    if (node.type !== "blocks") {
      node.children = [];
    }
    return node;
  }

  return roots.map(transformNode);
}

function rootQuery(filterSql: string, depthLimit?: number) {
  const depthLimitClause =
    depthLimit !== undefined ? `WHERE d.depth + 1 <= ${depthLimit}` : ''

  return sql`
    with recursive
      ancestors as (
        select
          id,
          created_at,
          updated_at,
          name,
          label,
          type,
          sort_order,
          value,
          options,
          status,
          parent_id,
          0 as depth
        from
          blocks
        where
          ${filterSql}
        union all
        select
          b.id,
          b.created_at,
          b.updated_at,
          b.name,
          b.label,
          b.type,
          b.sort_order,
          b.value,
          b.options,
          b.status,
          b.parent_id,
          a.depth + 1
        from
          blocks b
          inner join ancestors a on b.id = a.parent_id
      ),
      roots as (
        select
          id,
          created_at,
          updated_at,
          name,
          label,
          type,
          sort_order,
          value,
          options,
          status,
          parent_id,
          0 as depth
        from
          ancestors
        where
          parent_id is null
      ),
      descendants as (
        select
          id,
          created_at,
          updated_at,
          name,
          label,
          type,
          sort_order,
          value,
          options,
          status,
          parent_id,
          depth
        from
          roots
        union all
        select
          b.id,
          b.created_at,
          b.updated_at,
          b.name,
          b.label,
          b.type,
          b.sort_order,
          b.value,
          b.options,
          b.status,
          b.parent_id,
          d.depth + 1
        from
          blocks b
          inner join descendants d on b.parent_id = d.id ${depthLimitClause}
      )
    select
      *
    from
      descendants
    order by
      parent_id,
      sort_order;
  `
}

function buildFilterSql(params: Record<string, any>) {
  const entries = Object.entries(params)
  const filterSql = entries
    .map(([key, value]) =>
      value === null ? `${key} is null` : `${key} = :${key}`,
    )
    .join(' and ')

  let sqlParams: Record<keyof typeof params, any> = {}

  for (const param in params) {
    if (params[param] !== null) {
      sqlParams[param] = params[param]
    }
  }

  return { filterSql, sqlParams }
}

/**
 * Generic typed getBlockTrees:
 * - TStructure: the structure literal you pass
 * - returns: Array of typed block nodes derived from that structure
 *
 * NOTE: the runtime SQL must return rows for the correct tree (use your
 * previous recursive CTE with explicit columns + depth reset for roots).
 */
export function getBlockTrees<
  TStructure extends readonly any[]
>(
  db: DatabaseSync,
  _structure: TStructure,           // used for typing; at runtime it's not strictly needed
  // sql: string,                      // the recursive SQL with explicit columns (see earlier messages)
  params: Record<string, any> = {}
): BlockTreeFromStructure<TStructure> {
  const { filterSql, sqlParams } = buildFilterSql(params)
  // run SQL (you must provide the SQL string matching your earlier working CTE)
  const rows = db.prepare(rootQuery(filterSql)).all(sqlParams) as DBBase[]; // depth included in DBBase.depth

  // build + transform
  const forest = buildForestRows(rows);

  // cast to compile-time derived type (we ensure runtime shape matches the type)
  return forest as unknown as BlockTreeFromStructure<TStructure>;
}
