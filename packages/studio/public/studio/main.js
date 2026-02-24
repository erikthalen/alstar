// components
import './js/auth.js'
import './js/sortable-list.js'
import './js/live-preview.js'

import './js/RegisterForm.js'
import './js/LoginForm.js'

import './js/ToggleLivePreview.js'

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
