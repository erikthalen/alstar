import barba from '@barba/core'

import './js/markdown-editor.js'
import './js/sortable-list.js'

barba.init({
  cacheIgnore: true,
  views: [{ namespace: 'default' }],
})
