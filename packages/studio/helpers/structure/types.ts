// import {
//   BlockFieldInstance,
//   BlockInstance,
//   CollectionInstance,
//   FieldInstance,
//   SingleInstance,
// } from './index.ts'

// /**
//  * Fields
//  */
// export type FieldType =
//   | TextField
//   | TitleField
//   | SlugField
//   | ImageField
//   | SVGField
//   | MarkdownField
//   | ReferenceField

// export type FieldInstanceType =
//   | TextFieldInstance
//   | TitleFieldInstance
//   | SlugFieldInstance
//   | ImageFieldInstance
//   | SVGFieldInstance
//   | MarkdownFieldInstance
//   | ReferenceFieldInstance

// /**
//  * Text
//  */
// export type TextField = {
//   label: string
//   description?: string
//   type: 'text'
// }

// export type TextFieldInstance = TextField & { instanceOf: typeof FieldInstance }

// /**
//  * Title
//  */
// export type TitleField = {
//   label: string
//   description?: string
//   type: 'title'
// }

// export type TitleFieldInstance = TitleField & {
//   instanceOf: typeof FieldInstance
// }

// /**
//  * Slug
//  */
// export type SlugField = {
//   label: string
//   description?: string
//   type: 'slug'
// }

// export type SlugFieldInstance = SlugField & { instanceOf: typeof FieldInstance }

// /**
//  * Image
//  */
// export type ImageField = {
//   label: string
//   description?: string
//   type: 'image'
// }

// export type ImageFieldInstance = ImageField & {
//   instanceOf: typeof FieldInstance
// }

// /**
//  * SVG
//  */
// export type SVGField = {
//   label: string
//   description?: string
//   type: 'svg'
// }

// export type SVGFieldInstance = SVGField & {
//   instanceOf: typeof FieldInstance
// }

// /**
//  * Markdown
//  */
// export type MarkdownField = {
//   label: string
//   description?: string
//   type: 'markdown'
// }

// export type MarkdownFieldInstance = MarkdownField & {
//   instanceOf: typeof FieldInstance
// }

// /**
//  * Reference
//  */
// export type ReferenceField = {
//   label: string
//   description?: string
//   type: 'reference'
// }

// export type ReferenceFieldInstance = ReferenceField & {
//   instanceOf: typeof FieldInstance
// }

// /**
//  * Block field
//  */
// export type BlockFields = Record<
//   string,
//   FieldInstanceType | BlockFieldInstanceType
// >

// export type BlockFieldType = {
//   label: string
//   description?: string
//   blocks: Record<string, BlockInstanceType<BlockFields> | FieldInstanceType>
// }

// export type BlockFieldInstanceType = BlockFieldType & {
//   instanceOf: typeof BlockFieldInstance
// }

// /**
//  * Block
//  */
// export type BlockType<T extends BlockFields> = {
//   label: string
//   description?: string
//   type?: string // todo: this should only apply on Block, not Collection & Single
//   preview?: { field: keyof T } | { slug: string }
//   icon?: string // typeof string of https://tabler.io/icons
//   fields: T
// }

// export type BlockInstanceType<T extends BlockFields> = BlockType<T> & {
//   instanceOf: typeof BlockInstance
// }

// export type CollectionInstanceType<T extends BlockFields> = BlockType<T> & {
//   instanceOf: typeof CollectionInstance
// }

// export type SingleInstanceType<T extends BlockFields> = BlockType<T> & {
//   instanceOf: typeof SingleInstance
// }

// export type InstanceType =
//   | BlockInstanceType<BlockFields>
//   | CollectionInstanceType<BlockFields>
//   | SingleInstanceType<BlockFields>
//   | FieldInstanceType
//   | BlockFieldInstanceType

// /**
//  * Structure
//  */
// export type StructureInstanceType = Record<
//   string,
//   CollectionInstanceType<BlockFields> | SingleInstanceType<BlockFields>
// >
