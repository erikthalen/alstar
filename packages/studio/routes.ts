import entriesId from './pages/entries/[id].ts'
import entries from './pages/entries/index.ts'
import index from './pages/index.ts'
import login from './pages/login.ts'
import profile from './pages/profile.ts'
import register from './pages/register.ts'
import sandbox from './pages/sandbox.ts'
import settings from './pages/settings.ts'
import setup from './pages/setup.ts'

export default [
  { name: '/entries/:id', handler: entriesId },
  { name: '/entries', handler: entries },
  { name: '/', handler: index },
  { name: '/login', handler: login },
  { name: '/profile', handler: profile },
  { name: '/register', handler: register },
  { name: '/sandbox', handler: sandbox },
  { name: '/settings', handler: settings },
  { name: '/setup', handler: setup },
]
