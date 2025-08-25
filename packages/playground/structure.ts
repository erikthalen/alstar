import {
  defineBlock,
  defineBlockField,
  defineField,
  defineStructure,
} from '@alstar/studio'

export default defineStructure({
  page: defineBlock({
    label: 'Pages',
    type: 'page',
    fields: {
      title: defineField({
        label: 'Title',
        type: 'text',
        description: 'The overall name of the entry',
      }),
      slug: defineField({
        label: 'Slug',
        type: 'slug',
      }),
      md: defineField({
        label: 'Markdown',
        type: 'markdown',
      }),
      sections: defineBlockField({
        label: 'Sections',
        type: 'blocks',
        children: {
          hero: defineBlock({
            label: 'Hero',
            type: 'hero',
            fields: {
              title: defineField({
                label: 'Title',
                type: 'text',
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
                type: 'blocks',
                children: {
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
} as const)
