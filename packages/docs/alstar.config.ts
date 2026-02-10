import {
  defineBlock,
  defineBlockField,
  defineField,
  defineCollection,
  defineStructure,
  defineSingle,
} from '@alstar/studio/structure'

export default {
  siteName: 'Docs',
  previewUrl: 'http://localhost:3000',
  structure: defineStructure({
    frontpage: defineSingle({
      label: 'Frontpage',
      fields: {
        title: defineField({
          type: 'text',
          label: 'Title',
        }),
      },
    }),
    page: defineCollection({
      label: 'Pages',

      preview: { field: 'slug' },
      fields: {
        title: defineField({
          label: 'Title',
          type: 'title',
          description: 'The overall name of the entry',
        }),
        slug: defineField({
          label: 'Slug',
          type: 'slug',
        }),
        description: defineField({
          label: 'Description',
          type: 'text',
        }),
        text: defineField({
          label: 'Text',
          type: 'text',
        }),
        image: defineField({
          label: 'Image',
          type: 'image',
          description: 'A featured image for the page',
        }),
        svg: defineField({
          label: 'SVG',
          type: 'svg',
          description: 'An SVG',
        }),
        md: defineField({
          label: 'Markdown',
          type: 'markdown',
        }),
        sections: defineBlockField({
          label: 'Sections',
          blocks: {
            hero: defineBlock({
              label: 'Hero',
              type: 'hero',
              fields: {
                title: defineField({
                  label: 'Title',
                  type: 'text',
                  description: 'Hero title',
                }),
                text: defineField({
                  label: 'Text',
                  type: 'text',
                }),
              },
            }),
            gallery: defineBlock({
              label: 'Gallery',
              type: 'gallery',
              fields: {
                images: defineBlockField({
                  label: 'Images',
                  blocks: {
                    image: defineField({
                      label: 'Image',
                      type: 'image',
                    }),
                  },
                }),
              },
            }),
          },
        }),
      },
    }),
  } as const),
}
