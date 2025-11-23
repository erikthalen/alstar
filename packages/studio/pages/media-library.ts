import { html } from 'hono/html'

import SiteLayout from '../components/SiteLayout.ts'
import SiteHeader from '../components/SiteHeader.ts'
import Explorer from '../components/Explorer.ts'
import Tabs from '../components/Tabs.ts'
import { factory } from '../factory.ts'
import { type StudioConfig } from '../types.ts'
import MediaLibrary from '../components/MediaLibrary.ts'

export default (config: StudioConfig) =>
  factory.createHandlers((c) => {
    return c.html(
      SiteLayout(
        html`${Explorer(c)}
          <section class="page">
            ${SiteHeader(c)} ${Tabs()}
            <div class="media-library-page">${MediaLibrary()}</div>
          </section>`,
      ),
    )
  })
