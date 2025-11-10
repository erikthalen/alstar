import { allDefined } from '@quietui/quiet'

class SettingsTabs extends HTMLElement {
  abortController = new AbortController()

  async connectedCallback() {
    await allDefined()

    window.addEventListener(
      'quiet-tab-shown',
      (e) => {
        const activeTab = e.detail.tab.getAttribute('panel')
        const url = new URL(window.location.href, window.location.origin)
        url.searchParams.set('tab', activeTab)
        window.history.replaceState(null, '', url.toString())
      },
      { signal: this.abortController.signal }
    )
  }

  disconnectedCallback() {
    this.abortController?.abort()
  }
}

customElements.define('settings-tabs', SettingsTabs)
