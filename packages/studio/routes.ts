import entriesId from './pages/entries/[id].ts'
import entries from './pages/entries/index.ts'
import index from './pages/index.ts'
import login from './features/auth/pages/login.ts'
import register from './features/auth/pages/register.ts'

export default [
  { path: '/', handler: index },
  { path: '/entries/:id', handler: entriesId },
  { path: '/entries', handler: entries },
  // { name: '/login', handler: login },
  // { name: '/register', handler: register },
  // { name: '/settings', handler: settings },
  // { name: '/setup', handler: setup },
]
