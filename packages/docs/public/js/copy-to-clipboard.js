/**
 * @example
 * <copy-to-clipboard>
 *  <p id="my-target">Text to copy</p>
 *  <button for="my-target">Copy</button>
 * </copy-to-clipboard>
 */
class CopyToClipboard extends HTMLElement {
  abortController = new AbortController()
  button = this.querySelector('button')

  connectedCallback() {
    this.button.addEventListener('click', this.copy.bind(this), {
      signal: this.abortController.signal,
    })
  }

  copy() {
    const target = this.querySelector(`#${this.button.getAttribute('for')}`)
    const content = target.innerHTML.trim()

    navigator.clipboard.writeText(content)

    this.classList.toggle('copied', true)

    setTimeout(() => this.classList.toggle('copied', false), 1000)
  }

  disconnectedCallback() {
    this.abortController.abort()
  }
}

customElements.define('copy-to-clipboard', CopyToClipboard)
