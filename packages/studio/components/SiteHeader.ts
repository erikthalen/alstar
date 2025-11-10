import { html } from '@alstar/studio/html'
import { Context } from 'hono'
import Breadcrumbs from './Breadcrumbs.ts'



export default (c: Context) => {
  

  // console.log(breadcrumbs, c.req.routeIndex, {
  //   routePath: routePath(c), // '/posts/:id'
  //   baseRoutePath: baseRoutePath(c), // '/api'
  //   basePath: basePath(c), // '/api' (with actual params)
  //   matchedRoutes: matchedRoutes(c),
  // })

  return html`
    <header class="site-header">
      <section>
        ${Breadcrumbs(c)}
      </section>

      <section class="secondary">
        <quiet-dropdown class="ts-label">
          <quiet-button appearance="none" size="sm" pill slot="trigger">
            <quiet-avatar
              id="profile_link"
              style="--size: 24px;"
              label="Avatar"
            ></quiet-avatar>
          </quiet-button>

          <!-- <h3>Profile</h3> -->

          <quiet-dropdown-item href="/studio/profile">
            <quiet-icon slot="icon" name="user-circle"></quiet-icon>
            Profile
          </quiet-dropdown-item>

          <quiet-dropdown-item href="/studio/settings">
            <quiet-icon slot="icon" name="settings"></quiet-icon>
            Settings
          </quiet-dropdown-item>

          <quiet-divider></quiet-divider>

          <quiet-dropdown-item
            variant="destructive"
            data-on:click="window.auth.logout()"
          >
            <quiet-icon slot="icon" name="logout-2"></quiet-icon>
            Logout
          </quiet-dropdown-item>
        </quiet-dropdown>
      </section>
    </header>
  `
}
