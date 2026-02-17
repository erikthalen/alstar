import { html } from 'hono/html'
import Entry from '../../components/Entry.ts'
import LivePreview from '../../components/live-preview/LivePreview.ts'
import { Context } from 'hono'
import { css } from '@alstar/framework'

export default (c: Context) => {
  const id = c.req.param('id') as `${number}`
  const user = c.get('user')

  if (!id) {
    return html`<p>Entry page url needs an ID param: "${id}"</p>`
  }

  return html`
    <div class="entry-page">
      <vscode-split-layout id="split_pane" fixed-pane="start" initial-handle-position="50%">
        <div slot="start">${Entry({ entryId: id })}</div>
        <div slot="end">${LivePreview({ userId: user?.id, entryId: id })}</div>
      </vscode-split-layout>
    </div>
  `
}

export const styles = css`
  .entry-page {
  }
`
