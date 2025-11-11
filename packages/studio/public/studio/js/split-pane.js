import { LitElement, html, css } from 'lit'

const styles = css`
  .root {
    display: grid;
    grid-template-columns: var(--pane-start-size, 50%) 1px var(
        --pane-end-size,
        50%
      );

    height: 100%;
    width: 100%;
  }

  .root.fixed-start {
    grid-template-columns: var(--pane-start-size, 50%) 1px 1fr;
  }

  .handle {
    border: 0;
    padding: 0;
    margin: 0;

    position: relative;

    width: 1px;
    height: 100%;
    background: var(--alstar-split-pane-border);

    cursor: col-resize;
  }

  .handle:before {
    transition: opacity 200ms;
    content: '';
    position: absolute;
    inset: 0 -2px;
    background: blue;

    opacity: 0;
  }

  .handle:after {
    content: '';
    position: absolute;
    inset: 0 -10px;
  }

  .handle:hover:before {
    transition: opacity 200ms 500ms;
    opacity: 1;
  }

  .pane {
    overflow: hidden;
  }
`

export class SplitPane extends LitElement {
  static properties = {
    fixed: {},

    abortController: { attribute: false },
    activeAbortController: { attribute: false },
  }

  static styles = styles

  constructor() {
    super()

    this.fixedClass =
      this.fixed === 'start'
        ? 'fixed-start'
        : this.fixed === 'end'
        ? 'fixed-end'
        : ''

    this.abortController = new AbortController()
    this.activeAbortController = new AbortController()
  }

  connectedCallback() {
    super.connectedCallback()

    window.addEventListener(
      'pointerup',
      () => this.activeAbortController.abort(),
      { signal: this.abortController.signal }
    )

    setTimeout(() => {
      const { width } = this.getBoundingClientRect()
      this.setCSS(width, width * 0.5)
    })
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.abortController.abort()
  }

  setCSS(width, position) {
    this.style.setProperty('--pane-start-size', position - 0.5 + 'px')
    this.style.setProperty('--pane-end-size', width - position - 0.5 + 'px')
  }

  onPointerDown() {
    this.activeAbortController = new AbortController()

    window.addEventListener(
      'pointermove',
      (e) => {
        const { left, width } = this.getBoundingClientRect()
        const newPosition = e.clientX - left

        this.setCSS(width, newPosition)
      },
      { signal: this.activeAbortController.signal }
    )
  }

  render() {
    return html`
      <div class="root ${this.fixedClass}">
        <div class="pane start">
          <slot name="start"></slot>
        </div>

        <button
          @pointerdown=${this.onPointerDown}
          class="handle"
          aria-title="Change size of panes"
        ></button>

        <div class="pane end">
          <slot name="end"></slot>
        </div>
      </div>
    `
  }
}
customElements.define('alstar-split-pane', SplitPane)
