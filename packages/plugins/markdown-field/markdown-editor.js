import { ink } from 'https://esm.sh/ink-mde@0.34.0'

class MarkdownEditor extends HTMLElement {
  instance = null

  async connectedCallback() {
    const value = this.dataset.value

    this.instance = ink(this, {
      doc: atob(value),
      interface: {
        appearance: 'dark',
        attribution: false,
        autocomplete: true,
        images: false,
        lists: true,
        spellcheck: true,
        toolbar: true,
      },
      toolbar: false,
      // toolbar: {
      //   bold: true,
      //   code: true,
      //   codeBlock: true,
      //   heading: true,
      //   image: false,
      //   italic: true,
      //   link: true,
      //   list: true,
      //   orderedList: true,
      //   quote: true,
      //   taskList: true,
      //   upload: false,
      // },
      hooks: {
        afterUpdate: async (value) => {
          this.dispatchEvent(new CustomEvent('input', { detail: value }))
          window.dispatchEvent(new CustomEvent('markdown-editor:update'))
        },
      },
    })
  }

  disconnectedCallback() {
    this.instance.destroy()
  }
}

customElements.define('markdown-editor', MarkdownEditor)
