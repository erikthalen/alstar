import Sortable from 'sortablejs'

class SortableList extends HTMLElement {
  instance = null

  connectedCallback() {
    if (!this.children.length) return

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

  disconnectedCallback() {
    this.instance?.destroy()
  }
}

customElements.define('sortable-list', SortableList)
