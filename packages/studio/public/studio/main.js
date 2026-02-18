// components
import './js/auth.js'
import './js/sortable-list.js'
import './js/live-preview.js'
import './js/settings-tabs.js'
import './js/split-pane.js'

import './js/RegisterForm.js'

// global
import Swup from 'swup'
import { allDefined } from '@quietui/quiet'

let abortController = new AbortController()

await allDefined()

export const swup = new Swup({
  animationSelector: false,
  cache: false,
})

function hydrateLinks() {
  abortController.abort()
  abortController = new AbortController()

  document.querySelectorAll('*[href]').forEach((link) => {
    // console.log(link)
    link.addEventListener(
      'click',
      (e) => {
        e.preventDefault()
        e.stopPropagation()
        swup.navigate(link.href)
      },
      { signal: abortController.signal },
    )
  })
}

hydrateLinks()

swup.hooks.on('page:view', () => {
  hydrateLinks()
})

swup.hooks.on('visit:end', (visit) => {
  window.dispatchEvent(
    new CustomEvent('tabs:update', { name: visit.to.url, href: visit.to.url }),
  )
})
