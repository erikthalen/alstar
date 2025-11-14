import { Hono } from 'hono'

import { blockRoutes } from './block.ts'
import { apiKeyRoutes } from './api-key.ts'
import { backupRoutes } from './backup.ts'
import { fieldRoutes } from '../components/fields/index.ts'
import { userSettingsRoutes } from './user-settings.ts'

const routes = new Hono()

routes.route('/', blockRoutes)
routes.route('/', apiKeyRoutes)
routes.route('/', backupRoutes)
routes.route('/', userSettingsRoutes)

fieldRoutes.forEach((fieldRoute) => {
  routes.route('/field', fieldRoute)
})

export const apiRoutes = routes
