class ToggleLivePreview extends HTMLElement {
  /** @type {AbortController} */
  abortController

  toggle(e) {
    const splitPane = document.getElementById('split_pane')

    if (e.target.checked) {
      // open
      splitPane.setAttribute('handle-position', '50%')
      splitPane.setAttribute('fixed-pane', 'start')
    } else {
      // close
      const { width } = splitPane.getBoundingClientRect()

      splitPane.setAttribute('handle-position', width - 24 + 'px')
      splitPane.setAttribute('fixed-pane', 'end')
    }
  }

  connectedCallback() {
    this.abortController = new AbortController()

    this.addEventListener('quiet-change', (e) => this.toggle(e), {
      signal: this.abortController.signal,
    })
  }

  disconnectedCallback() {
    this.abortController.abort()
  }
}

customElements.define('toggle-live-preview', ToggleLivePreview)
