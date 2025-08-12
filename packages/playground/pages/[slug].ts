import { defineEntry, html, query } from '@alstar/studio'
import SiteLayout from '../components/SiteLayout.ts'
import structure from '../structure.ts'
import { getBlockTrees } from '@alstar/studio/queries/getBlockTrees.ts'
import { db } from '../../db/index.ts'
// import { getBlockTrees } from "./getBlockTrees";

export default defineEntry(c => {
  const slug = c.req.param('slug')
  // const entry = query.root({ type: 'slug', value: slug })

  // Now TypeScript knows the return type is derived from `structure`.

  const result = getBlockTrees(db.database, structure, {
    name: 'slug',
    value: 'the-slug',
  })

  // result: Array of the "page" node type (with typed fields)
  const first = result[0].fields.slug.value

  return SiteLayout(html`
    <h1>Hello!</h1>
    <p>${slug}</p>

    <pre><code>${JSON.stringify(first, null, 2)}</code></pre>
  `)
})
