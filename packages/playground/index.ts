import { createStudio } from '@alstar/studio'
import structure from './structure.ts'

await createStudio({
  siteName: 'My site',
  structure
})
