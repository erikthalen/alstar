import type {
  FieldType,
  FieldInstanceType,
  BlockFieldType,
  BlockFieldInstanceType,
  BlockType,
  BlockFields,
  BlockInstanceType,
  CollectionInstanceType,
  StructureInstanceType,
  SingleInstanceType,
} from './types.ts'

export const FieldInstance = Symbol('field')
export const BlockFieldInstance = Symbol('blockfield')
export const BlockInstance = Symbol('block')
export const CollectionInstance = Symbol('collection')
export const SingleInstance = Symbol('single')

export function defineField(field: FieldType): FieldInstanceType {
  return {
    ...field,
    instanceOf: FieldInstance,
  }
}

export function defineBlockField(
  field: BlockFieldType,
): BlockFieldInstanceType {
  return {
    ...field,
    instanceOf: BlockFieldInstance,
  }
}

export function defineBlock<const O extends BlockFields>(
  block: BlockType<O>,
): BlockInstanceType<O> {
  return {
    ...block,
    instanceOf: BlockInstance,
  }
}

export function defineSingle<const O extends BlockFields>(
  block: BlockType<O>,
): SingleInstanceType<O> {
  return {
    ...block,
    instanceOf: SingleInstance,
  }
}

export function defineCollection<const O extends BlockFields>(
  block: BlockType<O>,
): CollectionInstanceType<O> {
  return {
    ...block,
    instanceOf: CollectionInstance,
  }
}

export function defineStructure(
  structure: StructureInstanceType,
): StructureInstanceType {
  return structure
}
