import { defineStructure, defineBlock, defineField } from '@alstar/studio'

export default defineStructure([
  defineBlock({
    name: 'page',
    label: 'Page',
    type: 'page',
    fields: [
      defineField({
        name: 'title',
        label: 'Title',
        type: 'text',
      }),
      defineField({
        name: 'slug',
        label: 'Slug',
        type: 'slug',
      }),
      defineField({
        name: 'md',
        label: 'Markdown',
        type: 'markdown',
      }),
      defineField({
        name: 'blocks',
        label: 'Sections',
        type: 'blocks',
        fields: [
          defineBlock({
            name: 'hero',
            label: 'Hero',
            type: 'hero',
            fields: [
              defineField({
                name: 'title',
                label: 'Title',
                type: 'text',
              }),
              defineField({
                name: 'text',
                label: 'Text',
                type: 'text',
              }),
            ],
          }),
          defineBlock({
            name: 'gallery',
            label: 'Gallery',
            type: 'gallery',
            fields: [
              defineField({
                name: 'images',
                label: 'Images',
                type: 'blocks',
                fields: [
                  defineField({
                    name: 'image',
                    label: 'Image',
                    type: 'image',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  }),
])
