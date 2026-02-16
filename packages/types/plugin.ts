import type { Context, Hono } from 'hono'
import type { HtmlEscapedString } from 'hono/utils/html'
import type { DatabaseSync } from 'node:sqlite'
import type { Sql } from 'sql-template-tag'
import type { DBBlockResult } from './database.ts'
import type EventEmitter from 'node:events'
import { StudioConfig } from './index.ts'

export type Component = HtmlEscapedString | Promise<HtmlEscapedString>

export type Widget = (c: Context) => Component
export type FieldHandler = (id: number | `${number}`) => Component
export type Field = { name: string; component: FieldHandler }

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
  fields?: Field[]
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
  ],
  'entry-updated': [
    {
      id: number | `${number}`
    }
  ]
}

export type PluginArgs = {
  database: DatabaseSync
  config: StudioConfig
  eventEmitter: EventEmitter<PluginEvents>
  query: QueryAPI
}

export type PluginFactory = (args: PluginArgs) => Plugin
