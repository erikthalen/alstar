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
      onEnd: (e) => {
        const items = [...e.target.children]

        items.forEach(async (child, idx) => {
          const searchParams = new URLSearchParams()

          searchParams.set('id', child.dataset.id)
          searchParams.set('sort-order', idx)

          await fetch(`/admin/api/sort-order?${searchParams.toString()}`, {
            method: 'post',
          })
        })

        this.querySelectorAll('[name="sort_order"]').forEach((input, idx) => {
          input.value = idx.toString()
        })
      },
    })
  }

  connectedCallback() {
    this.mutationObserver = new MutationObserver(this.init.bind(this))
    this.mutationObserver.observe(this, { childList: true })

    this.init()
  }

  disconnectedCallback() {
    this.instance?.destroy()
    this.mutationObserver?.disconnect()
  }
}

customElements.define('sortable-list', SortableList)
