import barba from '@barba/core'
import Sortable from 'sortablejs'
// import { wrap } from 'ink-mde'

barba.init({
  cacheIgnore: true,
  views: [
    {
      namespace: 'default',
      afterEnter() {
        init()
      },
    },
  ],
})

function init() {
  // sortable
  {
    const els = document.querySelectorAll('[data-sortable]')

    els.forEach((el) => {
      const id = el.dataset.sortable

      var sortable = Sortable.create(el, {
        delay: 0,
        animation: 250,
        dragClass: 'sortable-drag',
        easing: 'ease-in-out',
        handle: `[data-handle="${id}"]`,
      })
    })
  }

  // // ink-mde
  // {
  //   const el = document.querySelector('textarea')

  //   if (el) {
  //     wrap(el, {
  //       interface: {
  //         // appearance: InkValues.Appearance.Auto,
  //         attribution: false,
  //       },
  //     })
  //   }
  // }
}
