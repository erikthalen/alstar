import { html } from 'hono/html'
import { sql } from '../../utils/sql.ts'
import { database, type AuthType } from '../../index.ts'

export default (props: { id: number | string; userId?: string }) => {
  let user

  if (props.userId) {
    user = database
      .prepare(sql`
        select
          *
        from
          user
        where
          id = ?
      `)
      .get(props.userId) as AuthType['user'] | undefined
  }

  return html`<div id="edited_by_${props.id}" slot="content-after" style="display: contents;">
      ${props.userId
      ? html`<quiet-avatar
            id="edited_by_avatar_${props.id}"
            style="--size: 24px;"
            label="${user?.email || 'Anonymus user'}"
            characters="${user?.email.substring(0, 2)}"
          >
          </quiet-avatar>

          <!-- <quiet-tooltip
            distance="0"
            without-arrow
            class="text-label"
            for="edited_by_avatar_${props.id}"
          >
            ${user?.email} is editing
          </quiet-tooltip> --> `
      : ''}
    </div> `
}
