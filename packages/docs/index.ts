import {
  createStudio,
  defineStructure,
  defineBlock,
  defineField,
} from '@alstar/studio'
import { routes } from './routes.ts'

const app = await createStudio({
  siteName: 'Docs',
  port: 8787,
  fileBasedRouter: false,
  structure: defineStructure({
    frontpage: defineBlock({
      label: 'Frontpage',
      type: 'single',
      fields: {
        title: defineField({
          label: 'Title',
          type: 'text',
        }),
        markdown: defineField({
          label: 'Markdown',
          type: 'markdown',
        }),
      },
    }),
    page: defineBlock({
      label: 'Pages',
      type: 'page',
      fields: {
        title: defineField({
          label: 'Title',
          type: 'text',
        }),
        slug: defineField({
          label: 'Slug',
          type: 'slug',
        }),
        markdown: defineField({
          label: 'Markdown',
          type: 'markdown',
        }),
      },
    }),
  }),
})

app.route('/', routes)

export default app
