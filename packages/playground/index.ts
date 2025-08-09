import { createStudio } from '@alstar/studio'
import { createRefresher } from '@alstar/refresher'
import structure from './structure.ts'

createRefresher({ rootdir: '.' })

await createStudio(structure)
// await createStudio()
