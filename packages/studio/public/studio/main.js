import barba from '@barba/core'

import './js/markdown-editor.js'
import './js/sortable-list.js'
import './js/live-preview.js'

let abortController = new AbortController()

barba.init({
  debug: true,
  cacheIgnore: true,
  views: [{ namespace: 'default' }],
})

barba.hooks.after(hydrateQuietLinks)

hydrateQuietLinks()

function hydrateQuietLinks() {
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
