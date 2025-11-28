import {
  defineBlock,
  defineBlockField,
  defineField,
  defineStructure,
} from '@alstar/studio/define'

export default {
  siteName: 'Playground',
  structure: defineStructure({
    page: defineBlock({
      label: 'Pages',
      type: 'collection',
      icon: 'file',
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
        image: defineField({
          label: 'Image',
          type: 'image',
          description: 'A featured image for the page',
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
                  description: 'Hero title'
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
