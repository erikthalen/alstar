import { type Block } from '../types.ts'
import { structure } from '../index.ts'

export type StructurePath = (string | number)[]

function getTargetPath(
  target: Block,
  path: StructurePath,
): number | string | undefined {
  if (!path.length) {
    return structure.findIndex((block) => block.name === target.name)
  }

  let sub = structure

  path.forEach((key: number | string) => {
    if (sub) {
      // @ts-ignore
      sub = sub[key]
    }
  })

  if (Array.isArray(sub)) {
    return sub.findIndex((block) => block.name === target.name)
  }

  return
}

export const buildStructurePath = (
  target: Block | undefined,
  path: StructurePath = [],
) => {
  if (!target) return path

  const targetPlacement = getTargetPath(target, path)

  if (targetPlacement !== undefined) {
    path.push(targetPlacement)
  }

  return path
}
