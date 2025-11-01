class LivePreview extends HTMLElement {
  abortController = new AbortController()
  mutationObserver
  iframe

  reload() {
    this.iframe.contentWindow.location.reload()
  }

  connectedCallback() {
    this.mutationObserver = new MutationObserver(this.reload.bind(this))
    this.mutationObserver.observe(this, { attributes: true })

    this.iframe = this.querySelector('quiet-zoomable-frame')

    console.log(this.iframe.querySelector('iframe'))

    window.addEventListener('markdown-editor:update', this.reload.bind(this), { signal: this.abortController.signal })
    window.addEventListener('sortable-list:update', this.reload.bind(this), { signal: this.abortController.signal })
  }

  disconnectedCallback() {
    this.abortController?.abort()
    this.mutationObserver?.disconnect()
  }
}

customElements.define('live-preview', LivePreview)
