import {
  createStudio,
  defineStructure,
  defineBlock,
  defineField,
} from '@alstar/studio'
import { createRefresher } from '@alstar/refresher'

createRefresher({ rootdir: '.' })

const structure = defineStructure([
  defineBlock({
    name: 'entry',
    label: 'Entry',
    type: 'entry',
    fields: [
      defineField({
        name: 'title',
        label: 'Title',
        type: 'text',
      }),
    ],
  }),
])

await createStudio(structure)
