import type { Context, Hono } from 'hono'
import type { HtmlEscapedString } from 'hono/utils/html'
import type { DatabaseSync } from 'node:sqlite'
import type { Sql } from 'sql-template-tag'
import type { DBBlockResult, DBPrimitiveFieldResult } from './database.ts'
import type EventEmitter from 'node:events'
import { StudioConfig } from './index.ts'
import { FieldTypeMap } from './structure.ts'

export type Component = HtmlEscapedString | Promise<HtmlEscapedString>

export type Widget = (c: Context) => Component

export type FieldStructure<T extends keyof FieldTypeMap> = FieldTypeMap[T]['props'] & { type: T }

export type FieldComponent<T extends keyof FieldTypeMap> = (
  id: number | `${number}`,
  props: FieldStructure<T>,
) => Component

export type FieldHandler<T extends keyof FieldTypeMap> = (
  row: DBPrimitiveFieldResult,
) => FieldTypeMap[T]['returns']

export type Field<T extends keyof FieldTypeMap> = {
  type: T
  component: FieldComponent<T>
  handler?: FieldHandler<T>
}

export type Plugin = {
  app?: Hono
  public?: {
    filename: string
    root: string
  }[]
  views?: {
    path: string
    handler: (c: Context) => Component
  }[]
  widget?: Widget
  migrations?: Sql[]
  fields?: {
    [K in keyof FieldTypeMap]: Field<K>
  }[keyof FieldTypeMap][]
}

export type QueryAPI = {
  getField: (params: Record<string, any>) => DBBlockResult
}

export type PluginEvents = {
  'update-block': [
    {
      userId?: string
      id: number | `${number}`
      payload: { value: string }
      patchSelf?: boolean
    },
  ]
  'entry-updated': [
    {
      id: number | `${number}`
    },
  ]
}

export type PluginArgs = {
  database: DatabaseSync
  config: StudioConfig
  eventEmitter: EventEmitter<PluginEvents>
  query: QueryAPI
}

export type PluginFactory = (args: PluginArgs) => Plugin
