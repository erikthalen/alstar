export const FieldInstance = Symbol.for('field')
export const BlockFieldInstance = Symbol.for('blockfield')
export const BlockInstance = Symbol.for('block')
export const CollectionInstance = Symbol.for('collection')
export const SingleInstance = Symbol.for('single')

/**
 * Fields
 */
export interface FieldTypeMap {
  title: TitleField
  slug: SlugField
  reference: ReferenceField
}

export type FieldType = FieldTypeMap[keyof FieldTypeMap]

export type FieldInstanceType = FieldType & { instanceOf: typeof FieldInstance }

/**
 * Title
 */
export type TitleField = {
  label: string
  description?: string
  type: 'title'
}

/**
 * Slug
 */
export type SlugField = {
  label: string
  description?: string
  type: 'slug'
}

/**
 * Reference
 */
export type ReferenceField = {
  label: string
  description?: string
  type: 'reference'
}

/**
 * Block field
 */
export type BlockFields = Record<string, FieldInstanceType | BlockFieldInstanceType>

export type BlockFieldType = {
  label: string
  description?: string
  blocks: Record<string, BlockInstanceType | FieldInstanceType>
}

export type BlockFieldInstanceType = BlockFieldType & {
  instanceOf: typeof BlockFieldInstance
}

/**
 * Block
 */
export type BlockType<T extends BlockFields = BlockFields> = {
  label: string
  description?: string
  type?: string // todo: this should only apply on Block, not Collection & Single
  preview?: { field: keyof T } | { slug: string }
  icon?: string // typeof string of https://tabler.io/icons
  fields: T
}

export type BlockInstanceType<T extends BlockFields = BlockFields> = BlockType<T> & {
  instanceOf: typeof BlockInstance
}

export type CollectionInstanceType<T extends BlockFields = BlockFields> = BlockType<T> & {
  instanceOf: typeof CollectionInstance
}

export type SingleInstanceType<T extends BlockFields = BlockFields> = BlockType<T> & {
  instanceOf: typeof SingleInstance
}

export type InstanceType =
  | BlockInstanceType
  | CollectionInstanceType
  | SingleInstanceType
  | FieldInstanceType
  | BlockFieldInstanceType

/**
 * Structure
 */
export type StructureInstanceType = Record<
  string,
  CollectionInstanceType<BlockFields> | SingleInstanceType<BlockFields>
>
