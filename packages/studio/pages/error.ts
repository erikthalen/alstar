import { html } from "hono/html";
import SiteLayout from "../components/SiteLayout.ts";
import type { HTTPResponseError } from "hono/types";

export default ((err?: Error | HTTPResponseError) => {

  return SiteLayout(html`
    <article>
      <header>Something went wrong</header>
      <p>Try again</p>
      <p>${err?.message || '404 - Not found'}</p>
    </article>
  `, false)
})