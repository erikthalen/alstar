import { ink } from 'ink-mde'

class MarkdownEditor extends HTMLElement {
  instance = null

  connectedCallback() {
    this.style.width = '100%'

    this.instance = ink(this, {
      hooks: {
        afterUpdate: async (e) => {
          await fetch('/studio/api/value', {
            method: 'PATCH',
            headers: {
              render: 'LivePreview',
              props: this.dataset.entryId
            },
            body: JSON.stringify({
              value: e,
              id: this.dataset.id,
            }),
          })

          window.dispatchEvent(new CustomEvent('markdown-editor:update'))
        },
      },
      interface: {
        attribution: false,
      },
    })

    this.instance.update(this.dataset.content)
  }

  disconnectedCallback() {
    // this.instance.destroy()
  }
}

customElements.define('markdown-editor', MarkdownEditor)
