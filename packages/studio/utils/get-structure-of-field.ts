import { getParentsNames } from '../database/sql/queries/block.ts'
import {
  BlockFieldInstance,
  BlockInstance,
  CollectionInstance,
  FieldInstance,
  SingleInstance,
} from '@alstar/types'
import { config } from '../index.ts'

export function getStructureOfField(id: string | number) {
  const [entryType, ...path] = getParentsNames(id)

  const fieldStructure = path.reduce((acc: any, cur: string) => {
    switch (acc.instanceOf) {
      case FieldInstance: {
        return acc
      }

      case BlockFieldInstance: {
        return acc.blocks[cur]
      }

      case BlockInstance:
      case SingleInstance:
      case CollectionInstance: {
        return acc.fields[cur]
      }
    }
  }, config.structure[entryType])

  return fieldStructure
}
