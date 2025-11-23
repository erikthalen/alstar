import { type HtmlEscapedString } from 'hono/utils/html'
import path from 'node:path'

export async function getElementsToPatch(
  patchElements: {
    name: string
    props?: any
  }[],
): Promise<HtmlEscapedString[]> {
  if (!patchElements) return []

  return Promise.all(
    patchElements.map(async (patchElement) => {
      try {
        const { name, props } = patchElement

        const partialToRender = await import(
          path.join('../components', name + '.ts')
        )

        return partialToRender.default(props)
      } catch (error) {
        console.log(error)
        return ''
      }
    }),
  )
}
