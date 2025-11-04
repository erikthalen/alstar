import './js/auth.js'
import './js/markdown-editor.js'
import './js/sortable-list.js'
import './js/live-preview.js'
import './js/settings-tabs.js'

import barba from '@barba/core'
import { allDefined } from '@quietui/quiet'

let abortController = new AbortController()

barba.init({
  debug: true,
  cacheIgnore: true,
  views: [{ namespace: 'default' }],
})

barba.hooks.after(hydrateQuietLinks)

hydrateQuietLinks()

async function hydrateQuietLinks() {
  await allDefined()

  abortController.abort()
  abortController = new AbortController()

  document.querySelectorAll('quiet-button').forEach((link) => {
    if (!link.href || link.getAttribute('data-barba-prevent') !== null) return

    link.addEventListener(
      'click',
      (e) => {
        e.preventDefault()
        e.stopPropagation()
        barba.go(link.href)
      },
      { signal: abortController.signal }
    )
  })
}
