import type { Context } from 'hono'
import SharedLayout from './SharedLayout.ts'
import { html } from 'hono/html'
import SiteHeader from '#components/SiteHeader.ts'
import Widgets from '#components/Widgets.ts'
import { HtmlEscapedString } from 'hono/utils/html'

export default (c: Context, content: HtmlEscapedString | Promise<HtmlEscapedString>) => {
  const user = c.get('user')
  const widgets = c.get('widgets')

  const splitPane = html`<vscode-split-layout
      fixed-pane="start"
      initial-handle-position="${user ? '174px' : '0px'}"
      min-start="${user ? '58px' : '0px'}"
      style="border: none; --separator-border: transparent;"
      reset-on-dbl-click="true"
    >
      <div slot="start" class="sidebar">
        ${SiteHeader()}
        <!--  -->
        ${user && Widgets(c, widgets)}
      </div>

      <div slot="end">
        <main id="swup">${content}</main>
      </div>
    </vscode-split-layout>`

  return SharedLayout(c, splitPane)
}
