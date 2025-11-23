import { LitElement, html, css } from 'lit'

export class Tabs extends LitElement {
  static properties = {
    tabs: {},
    abortController: { attribute: false },
  }

  constructor() {
    super()

    this.tabs = this.getTabs()
    this.abortController = new AbortController()

    console.log('this.tabs', this.tabs)
  }

  connectedCallback() {
    super.connectedCallback()

    window.addEventListener('tabs:update', this.updatedTabs.bind(this), {
      signal: this.abortController.signal,
    })
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.abortController.abort()
  }

  updatedTabs(e) {
    console.log(e)
    // const newTab = e.detail

    // this.setTab(newTab)
  }

  getTabs() {
    return JSON.parse(window.localStorage.getItem('tabs') || '[]')
  }

  setTab(newTab) {
    const currentTabs = this.getTabs()

    const updatedTabs = [...currentTabs, newTab]

    window.localStorage.setItem('tabs', JSON.stringify(updatedTabs))
  }

  render() {
    return html`
      <div class="root">
        ${this.tabs.map(
          (tab) => html`
            <div class="tab">
              <div class="content">
                <a href="${tab.href}" aria-title="${tab.name}"></a>
                <span>${tab.name}</span>
              </div>
              <button aria-title="Remove tab">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-x"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
          `,
        )}
      </div>
    `
  }

  static styles = css`
    .root {
      display: flex;

      height: 100%;
      width: 100%;
    }

    .tab {
      box-sizing: border-box;
      height: 100%;
      width: 200px;
      background-color: var(--tab-background-color);
      border-right: 1px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        padding: 0 0.5rem;
      }
    }

    .content {
      position: relative;
      width: 100%;
    }

    a {
      position: absolute;
      inset: 0;
      color: inherit;
      text-decoration: none;
    }

    button {
      background: none;
      border: none;
      display: flex;
      align-items: center;
      height: 100%;
      aspect-ratio: 1;
      cursor: pointer;

      svg {
        width: 1em;
        height: 1em;
      }
    }

    button:hover {
      background-color: var(--border-color);
    }
  `
}
customElements.define('alstar-tabs', Tabs)
