import { defineEntry, html, query } from '@alstar/studio'
import SiteLayout from '../components/SiteLayout.ts'
// import structure from '../structure.ts'
// import { db } from '../../db/index.ts'
// import { getBlockTrees } from "./getBlockTrees";

export default defineEntry(c => {
  const slug = c.req.param('slug')
  // const entry = query.root({ type: 'slug', value: slug })

  // Now TypeScript knows the return type is derived from `structure`.

  const result = query.root({
    name: 'slug',
    value: slug,
  })

  // result: Array of the "page" node type (with typed fields)
  // const first = result[0].fields.blocks.children[]

  return SiteLayout(html`
    <h1>Hello!</h1>
    <p>${slug}</p>

    <pre><code>${JSON.stringify(result, null, 2)}</code></pre>
  `)
})
