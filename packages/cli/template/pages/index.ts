import { defineEntry } from '@alstar/studio'

import SiteLayout from '../components/SiteLayout.ts'
import Welcome from '../components/Welcome.ts'

export default defineEntry(() => SiteLayout(Welcome()))
