import Sortable from 'sortablejs'

class SortableList extends HTMLElement {
  instance = null

  mutationObserver

  init() {
    if (this.instance || !this.children.length) return

    const { id } = this.dataset

    this.instance = Sortable.create(this, {
      animation: 250,
      handle: `[data-handle-for="${id}"]`,
      // onClone: function (/**Event*/ evt) {
      //   const origEl = evt.item
      //   const cloneEl = evt.clone

      //   console.log(origEl, cloneEl)
      // },
      // onUpdate: function (/**Event*/ evt) {
      //   const origEl = evt.item
      //   const cloneEl = evt.clone

      //   console.log(origEl, cloneEl)
      // },
      onEnd: async (e) => {
        const items = [...e.target.children]

        await Promise.all(
          items.map(async (child, idx) => {
            return fetch('/studio/api/block/' + child.dataset.id, {
              method: 'PATCH',
              body: JSON.stringify({
                id: child.dataset.id,
                sortOrder: idx,
              }),
            })
          }),
        )

        this.querySelectorAll('[name="sort_order"]').forEach((input, idx) => {
          input.value = idx.toString()
        })

        window.dispatchEvent(new CustomEvent('sortable-list:update'))
      },
    })
  }

  connectedCallback() {
    this.mutationObserver = new MutationObserver(this.init.bind(this))
    this.mutationObserver.observe(this, { childList: true })

    this.init()
  }

  disconnectedCallback() {
    try {
      this.instance?.destroy()
      this.mutationObserver?.disconnect()
    } catch (error) {
      console.log(error)
    }
  }
}

customElements.define('sortable-list', SortableList)
