import { Hono } from 'hono'

import { blockRoutes } from './block.ts'
import { apiKeyRoutes } from './api-key.ts'
import { backupRoutes } from './backup.ts'
import { authRoutes } from './auth.ts'
import { fieldRoutes } from '../components/fields/index.ts'

const routes = new Hono()

routes.route('/', blockRoutes)
routes.route('/', apiKeyRoutes)
routes.route('/', backupRoutes)
routes.route('/auth', authRoutes)

fieldRoutes.forEach((fieldRoute) => {
  routes.route('/field', fieldRoute)
})

export const apiRoutes = routes
