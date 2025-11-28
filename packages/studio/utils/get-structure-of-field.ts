import { config } from '../index.ts'
import { getParentsNames } from '../queries/get-structure-path.ts'
import type {
  BlockDefStructure,
  BlocksFieldDefStructure,
  FieldDefStructure,
} from '../types.ts'
import { BlockFieldInstance, BlockInstance, FieldInstance } from './define.ts'

type StructureItem =
  | BlockDefStructure
  | BlocksFieldDefStructure
  | FieldDefStructure

export function getStructureOfField(id: string | number) {
  const [entryType, ...path] = getParentsNames(id)

  const fieldStructure = path.reduce((acc: StructureItem, cur: string) => {
    switch (acc.instanceOf) {
      case FieldInstance: {
        return acc
      }

      case BlockFieldInstance: {
        return acc.blocks[cur]
      }

      case BlockInstance: {
        return acc.fields[cur]
      }
    }
  }, config.structure[entryType])

  return fieldStructure
}
