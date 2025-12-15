import { patchElements, type Jsonifiable } from '../helpers/hono-datastar/index.ts'
import type { AuthType } from '../index.ts'

export const defineEventHandler = (
  fn: (arg: {
    param: string
    user: AuthType['user']
    signals: Record<string, Jsonifiable> | null
  }) => any,
) => fn
