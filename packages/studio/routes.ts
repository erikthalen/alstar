import entriesId from './pages/entries/[id].ts'
import entries from './pages/entries/index.ts'
import index from './pages/index.ts'
import login from './pages/login.ts'
import register from './pages/register.ts'
import settings from './pages/settings.ts'

export default [
  { name: '/', handler: index },
  { name: '/entries/:id', handler: entriesId },
  { name: '/entries', handler: entries },
  // { name: '/login', handler: login },
  { name: '/register', handler: register },
  // { name: '/settings', handler: settings },
  // { name: '/setup', handler: setup },
]
