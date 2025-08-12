// structure-types.ts
import { type DBBase } from "./db-types.ts";

/**
 * Extract helpers
 */
type ArrayElement<T> = T extends readonly (infer U)[] ? U : never;

/**
 * Field definition shape inferred from defineField(...) (the runtime helper)
 * We keep it generic as "any" shape but with the important properties present
 */
type FieldDef = {
  readonly name: string;
  readonly type: string;
  readonly fields?: readonly any[]; // only present when type === 'blocks'
};

/**
 * Block definition shape inferred from defineBlock(...) (the runtime helper)
 */
type BlockDef = {
  readonly name: string;
  readonly type: string;
  readonly fields?: readonly FieldDef[];
};

/**
 * Primitive field node (non-'blocks'): DBBase + kept fields but no children
 */
type PrimitiveFieldNode<TField extends FieldDef> =
  DBBase & {
    readonly name: TField["name"];
    readonly type: TField["type"];
    // no children (leaf), no nested fields
    readonly children?: [];
    readonly fields?: {}; // empty object for leaf
  };

/**
 * For 'blocks' typed field, we need:
 * - the block node representing the 'blocks' wrapper (has DBBase props)
 * - its 'children' are an array of BlockNodes corresponding to nested block defs supplied in the field's 'fields' array
 * - its 'fields' property is the mapping of its own child-field names (can be empty)
 */
type BlocksFieldNode<
  TField extends FieldDef,
  TFieldDefs extends readonly BlockDef[]
> = DBBase & {
  readonly name: TField["name"];      // e.g. "blocks" or "images"
  readonly type: "blocks";            // literally 'blocks'
  readonly children: BlockNodeFromBlockDefs<TFieldDefs>[]; // children are instances of the nested blocks
  readonly fields: FieldsFromFieldDefs<TFieldDefs[number]["fields"]>; // the blocks-wrapper's own fields mapping (if any)
};

/**
 * Build the 'fields' object for a set of FieldDef[].
 * Maps each field name -> either PrimitiveFieldNode or BlocksFieldNode recursively.
 */
type FieldsFromFieldDefs<TDefs> =
  // If no fields
  TDefs extends readonly any[]
    ? {
        // For each field F in TDefs, map F['name'] -> node type
        [F in ArrayElement<TDefs> as F extends { name: infer N extends string } ? N : never]:
          F extends { type: "blocks"; fields: readonly BlockDef[] }
            ? BlocksFieldNode<F, F["fields"]>
            : PrimitiveFieldNode<F>;
      }
    : {};

/**
 * A Block node type for a particular BlockDef.
 * - fields: mapping derived from the block's declared fields
 * - children: by default [], because in our final shape all immediate children are placed under 'fields' of the parent.
 *   BUT for nodes that are themselves 'blocks' wrappers (i.e. appear as a Block instance of a nested block def),
 *   their 'children' will contain actual child blocks (these are handled via BlocksFieldNode above).
 */
export type BlockNode<T extends BlockDef> = DBBase & {
  readonly name: T["name"];
  readonly type: T["type"];
  readonly fields: FieldsFromFieldDefs<T["fields"]>;
  // for regular block nodes, children will usually be [] (top-level parent's children moved into fields)
  readonly children: [];
};

/**
 * Construct BlockNode unions for a set of block defs (used when blocks field has multiple block subdefs)
 */
type BlockNodeFromBlockDefs<TDefs extends readonly BlockDef[]> =
  ArrayElement<TDefs> extends infer B ? (B extends BlockDef ? BlockNode<B> : never) : never;

/**
 * The top-level forest return type when you pass a structure: it's an array of BlockNode of any top-level BlockDef
 */
export type BlockTreeFromStructure<TStructure extends readonly BlockDef[]> =
  BlockNodeFromBlockDefs<TStructure>;
