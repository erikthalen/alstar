import {
  type FieldType,
  type FieldInstanceType,
  type BlockFieldType,
  type BlockFieldInstanceType,
  type BlockType,
  type BlockFields,
  type BlockInstanceType,
  type CollectionInstanceType,
  type StructureInstanceType,
  type SingleInstanceType,
  FieldInstance,
  BlockFieldInstance,
  BlockInstance,
  SingleInstance,
  CollectionInstance,
} from '@alstar/types'

export function defineField(field: FieldType): FieldInstanceType {
  return {
    ...field,
    instanceOf: FieldInstance,
  }
}

export function defineBlockField(field: BlockFieldType): BlockFieldInstanceType {
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

export function defineStructure(structure: StructureInstanceType): StructureInstanceType {
  return structure
}
