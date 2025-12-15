import { html } from 'hono/html'
import LivePreviewContent from './LivePreviewContent.ts'
import LivePreviewHeader from './LivePreviewHeader.ts'

export default async ({
  userId,
  entryId,
}: {
  userId: string | undefined
  entryId: number | string
}) => {
  return html`
    <section class="live-preview">
      ${LivePreviewHeader(userId)}

      <!--  -->

      ${LivePreviewContent({ entryId })}
    </section>
  `
}
