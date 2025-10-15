import {
  createStudio,
  defineStructure,
  defineBlock,
  defineField,
  defineBlockField,
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
        sections: defineBlockField({
          label: 'Sections',
          blocks: {
            hero: defineBlock({
              label: 'Hero',
              type: 'hero',
              fields: {
                logo: defineField({
                  label: 'Logo',
                  type: 'text',
                }),
                title: defineField({
                  label: 'Title',
                  type: 'text',
                }),
                description: defineField({
                  label: 'Description',
                  type: 'text',
                }),
              },
            }),
            cta: defineBlock({
              label: 'CTA',
              type: 'cta',
              fields: {
                link: defineField({
                  label: 'Link',
                  type: 'reference',
                  to: 'page',
                }),
                installCommand: defineField({
                  label: 'Install command',
                  type: 'text',
                }),
              },
            }),
            features: defineBlock({
              label: 'Features',
              type: 'features',
              fields: {
                items: defineBlockField({
                  label: 'Items',
                  blocks: {
                    item: defineField({
                      label: 'Text',
                      type: 'text',
                    }),
                  },
                }),
              },
            }),
          },
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
