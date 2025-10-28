import { html } from "hono/html";
import { defineEntry } from "../utils/define.ts";
import SiteLayout from "../components/SiteLayout.ts";

export default defineEntry(c => {
  return SiteLayout(html`
  <div class="login-form">
    <article>
      <header>Login</header>
      <form data-on:submit="@post('/studio/api/auth/login', { contentType: 'form' })">
        <label for="email">Email</label>  
        <input id="email" name="email" type="text" placeholder="Email">
        <label for="password">Password</label>  
        <input id="password" name="password" type="password" placeholder="Password">
        <br>
        <button style="width: 100%;">Login</button>
      </form>
    </article>
    </div>
  `, false)
})