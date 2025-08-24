import { defineEntry } from '../utils/define.ts'

import SiteLayout from '../components/SiteLayout.ts'
import Settings from '../components/Settings.ts'

export default defineEntry(() => {
  return SiteLayout({
    content: Settings(),
  })
})
