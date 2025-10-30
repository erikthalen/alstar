import barba from '@barba/core'

import './js/markdown-editor.js'
import './js/sortable-list.js'
import './js/live-preview.js'

barba.init({
  debug: true,
  cacheIgnore: true,
  views: [{ namespace: 'default' }],
})

// client side script
// const eventSource = new EventSource('http://localhost:5432')
// eventSource.onmessage = ({ data }) => {
//   const delay = data.split(' - ').at(-1) === 'true'
//   setTimeout(() => window.location.reload(), delay ? 0 : 1000)
// }

// console.log(
//   '%c REFRESHER ACTIVE ',
//   'color: green; background: lightgreen; border-radius: 2px'
// )
