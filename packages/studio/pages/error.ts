import { html } from 'hono/html'

export default () => {
  return html`
    <div
      class="background-pattern"
      style="padding-bottom: 10vh; height: 100%; display: flex; flex-direction: column; place-content: center;"
    >
      <quiet-empty-state style="min-height: 400px;">
        <h3>Something went wrong</h3>

        <p>404 - Page not found</p>

        <quiet-button data-barba-prevent href="/studio" variant="primary">
          Take me home
        </quiet-button>
      </quiet-empty-state>
    </div>
  `
}
