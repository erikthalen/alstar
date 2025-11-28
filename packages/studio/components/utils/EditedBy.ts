import { html } from 'hono/html'
import { db } from '@alstar/db'
import { sql } from '../../utils/sql.ts'
import { type AuthType } from '../../index.ts'

export default (props: { id: number; userId?: string }) => {
  if (!props.userId) {
    return html`<div id="edited_by_${props.id}"></div>`
  }

  const user = db.database
    .prepare(sql`select * from user where id = ?`)
    .get(props.userId) as AuthType['user'] | undefined

  return html`<div id="edited_by_${props.id}" slot="content-after" style="display: contents;">
    <quiet-avatar
      id="edited_by_avatar_${props.id}"
      style="--size: 24px;"
      label="${user?.email || 'Anonymus user'}"
    >
    </quiet-avatar>

    <quiet-tooltip
      distance="0"
      without-arrow
      class="ts-label"
      for="edited_by_avatar_${props.id}"
    >
      ${user?.email} is editing
    </quiet-tooltip>
  </div> `
}
