import {
  createStudio,
  defineStructure,
  defineBlock,
  defineField,
} from '@alstar/studio'

await createStudio({
  structure: defineStructure({
    entry: defineBlock({
      label: 'Entry',
      type: 'entry',
      fields: {
        title: defineField({
          label: 'Title',
          type: 'text',
        }),
      },
    }),
  }),
})
