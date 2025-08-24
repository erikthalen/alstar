import { defineEntry, html } from '@alstar/studio'

import SiteLayout from '../components/SiteLayout.ts'

export default defineEntry(() => SiteLayout(html` <p>Alstar Studio</p> `))
