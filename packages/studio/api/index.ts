import { Hono } from 'hono'

import { blockRoutes } from './block.ts'
import { apiKeyRoutes } from './api-key.ts'
import { backupRoutes } from './backup.ts'
import { userSettingsRoutes } from './user-settings.ts'
import { componentRoutes } from './component.ts'

const routes = new Hono()

routes.route('/', blockRoutes)
routes.route('/', apiKeyRoutes)
routes.route('/', backupRoutes)
routes.route('/', userSettingsRoutes)
routes.route('/', componentRoutes)

export const apiRoutes = routes
