import type { Plugin, PluginArgs } from '@alstar/types'
import { createFactory } from 'hono/factory'

export const definePlugin = (fn: (args: PluginArgs) => Plugin) => {
  return (args: PluginArgs): Plugin => fn(args)
}

export const factory = createFactory()

export { css } from './css.ts'
