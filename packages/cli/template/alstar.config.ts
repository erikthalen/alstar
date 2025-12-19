import {
  defineStructure,
  defineSingle,
  defineCollection,
  defineField,
} from '@alstar/studio/structure'

export default {
  siteName: 'My app',
  structure: defineStructure({
    homepage: defineSingle({
      label: 'Homepage',
      fields: {
        title: defineField({
          type: 'text',
          label: 'Title',
        }),
        content: defineField({
          type: 'markdown',
          label: 'Content',
        }),
      },
    }),
    page: defineCollection({
      label: 'Pages',
      fields: {
        title: defineField({
          label: 'Title',
          type: 'title',
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
      },
    }),
  } as const),
}
