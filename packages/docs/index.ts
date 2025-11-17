import {
  createStudio,
  defineStructure,
  defineBlock,
  defineField,
  defineBlockField,
} from '@alstar/studio'
import { html } from '@alstar/studio/html'
import { routes } from './routes.ts'

export const { app, hotReloadClient } = await createStudio({
  siteName: 'Docs',
  admin: {
    // logo: html`<svg
    //   width="236"
    //   height="342"
    //   viewBox="0 0 236 342"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M7.152 342C2.88533 342 0.752001 339.867 0.752001 335.6V98.288C0.752001 95.5573 1.60533 92.9973 3.312 90.608L63.728 4.59198C65.6053 2.03198 68.336 0.751984 71.92 0.751984H163.568C167.323 0.751984 170.053 2.03198 171.76 4.59198L232.688 90.608C234.395 92.9973 235.248 95.5573 235.248 98.288V335.6C235.248 339.867 233.115 342 228.848 342H135.152C130.885 342 128.752 339.867 128.752 335.6V239.6H107.248V335.6C107.248 339.867 105.115 342 100.848 342H7.152ZM118 150.768C125.339 150.768 131.312 148.464 135.92 143.856C140.528 139.248 142.832 133.36 142.832 126.192C142.832 118.853 140.528 112.88 135.92 108.272C131.312 103.664 125.339 101.36 118 101.36C110.661 101.36 104.688 103.664 100.08 108.272C95.472 112.88 93.168 118.853 93.168 126.192C93.168 133.36 95.472 139.248 100.08 143.856C104.688 148.464 110.661 150.768 118 150.768Z"
    //     fill="currentColor"
    //   />
    // </svg> `,
  },
  port: 8787,
  fileBasedRouter: false,
  structure: defineStructure({
    frontpage: defineBlock({
      label: 'Frontpage',
      type: 'single',
      preview: {
        slug: '/',
      },
      icon: 'home',
      fields: {
        sections: defineBlockField({
          label: 'Sections',
          blocks: {
            hero: defineBlock({
              label: 'Hero',
              type: 'hero',
              icon: 'home',
              fields: {
                logo: defineField({
                  label: 'Logo',
                  type: 'svg',
                }),
                title: defineField({
                  label: 'Title',
                  type: 'text',
                  description: 'Used for screen readers.',
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
    settings: defineBlock({
      label: 'Settings',
      type: 'single',
      icon: 'settings',
      fields: {
        logo: defineField({
          type: 'svg',
          label: 'Logo',
          description: 'A raw svg string',
        }),
      },
    }),
    page: defineBlock({
      label: 'Pages',
      type: 'collection',
      preview: {
        field: 'slug',
      },
      icon: 'file',
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
} as const)

app.route('/', routes)

export default app
