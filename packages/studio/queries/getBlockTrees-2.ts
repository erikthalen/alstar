import { structure } from "../index.ts";

export const defineField = <
  F extends Record<string, any> | undefined = undefined,
  C extends Record<string, any> | undefined = undefined
>(config: {
  type: string;
  label: string;
  fields?: F;
  children?: C;
}) =>
  ({
    kind: 'field',
    type: config.type,
    label: config.label,
    fields: (config.fields ?? {}) as F,
    children: (config.children ?? {}) as C,
  } as const);

export const defineBlock = <
  F extends Record<string, any> = {},
  C extends Record<string, any> = {}
>(config: {
  type: string;
  label: string;
  fields?: F;
  children?: C;
}) =>
  ({
    kind: 'block',
    type: config.type,
    label: config.label,
    fields: (config.fields ?? {}) as F,
    children: (config.children ?? {}) as C,
  } as const);

  type InferBlock<T> =
  // A Block has fields + children
  T extends { kind: 'block'; fields: infer F; children: infer C }
    ? {
        fields: { [K in keyof F]: InferBlock<F[K]> };
        children: { [K in keyof C]: InferBlock<C[K]> }[keyof C][];
      }
    // A Field without children
    : T extends { kind: 'field'; children: infer C; fields: infer F }
      ? keyof C extends never
        ? { value: string | null; type: string; label: string }
        // A Field with children (like "blocks")
        : {
            fields: { [K in keyof F]: InferBlock<F[K]> };
            children: { [K in keyof C]: InferBlock<C[K]> }[keyof C][];
            type: string;
            label: string;
          }
      : never;

// Top-level inference for the structure object
type InferStructure<S> = {
  [K in keyof S]: InferBlock<S[K]>;
};

  type AppStructure = typeof structure;
type AppBlocks = InferStructure<AppStructure>;

// Example: AppBlocks["page"] is the typed shape for a page block
export function getBlockTrees<T extends keyof AppBlocks>(
  rootType: T
): AppBlocks[T][] {
  // Your SQL + builder code goes here
  return [] as any;
}