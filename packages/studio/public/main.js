import barba from '@barba/core'
import Sortable from 'sortablejs'
// import { wrap } from 'ink-mde'

barba.init({
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
      var sortable = Sortable.create(el, {
        delay: 0,
        animation: 250,
        dragClass: 'sortable-drag',
        easing: 'ease-in-out',
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
