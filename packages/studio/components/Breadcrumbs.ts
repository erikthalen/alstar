import { type Context } from 'hono'
import { matchedRoutes, routePath, baseRoutePath, basePath } from 'hono/route'
import { html } from 'hono/html'
import * as icons from './icons.ts'
import { getField } from '../helpers/sql/index.ts'
import EntryTitle from './EntryTitle.ts'

export default (c: Context) => {
  const breadcrumbs = getBreadcrumbs(c)

  return html` <quiet-breadcrumb>
    <quiet-breadcrumb-item href="/studio">
      <span class="logo">${icons.logo}</span>
      <span class="sr-only"></span>
      <span slot="separator">/</span>
    </quiet-breadcrumb-item>

    ${breadcrumbs.map((breadcrumb, idx) => {
      return html`
        <quiet-breadcrumb-item
          ${idx === breadcrumbs.length - 1
            ? 'current'
            : `href=${breadcrumb.url}`}
          ${breadcrumb.isEntry ? 'class=is-entry' : ''}
        >
          ${breadcrumb.name}
          <span slot="separator">/</span>
        </quiet-breadcrumb-item>
      `
    })}
  </quiet-breadcrumb>`
}

function getBreadcrumbs(c: Context) {
  const relativeURL = routePath(c)

  let breadcrumbs = []

  if (relativeURL === '/studio/profile') {
    breadcrumbs.push({
      name: 'Profile',
    })
  }

  if (relativeURL === '/studio/settings') {
    breadcrumbs.push({
      name: 'Settings',
    })
  }

  if (relativeURL === '/studio/entries') {
    breadcrumbs.push({
      url: '/studio/entries',
      name: 'Entries',
    })

    const nameQuery = c.req.query('name')

    if (nameQuery) {
      const data = getField({ name: nameQuery })

      breadcrumbs.push({
        name: data?.label,
      })
    }
  }

  if (relativeURL === '/studio/entries/:id') {
    const entryId = c.req.param('id')
    const data = getField({ id: entryId })

    breadcrumbs.push({
      url: '/studio/entries',
      name: 'Entries',
    })

    if (data?.type === 'single') {
      breadcrumbs.push({
        name: data.label,
        isEntry: true,
      })
    }

    if (data?.type === 'collection') {
      breadcrumbs.push({
        url: '/studio/entries?name=' + data.name,
        name: data.label,
      })

      breadcrumbs.push({
        name: EntryTitle({ entryId }),
        isEntry: true,
      })
    }
  }

  return breadcrumbs
}
