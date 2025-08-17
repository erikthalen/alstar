type Block = {
  id: number
  name: string
  label: string
  type: string
  sort_order: number
  value: string | null
  options: any // JSON-parsed if necessary
  parent_id: number | null
  depth: number
  // ... you can add other fields if needed
}

type BlockWithChildren = Block & { fields: BlockWithChildren[] }

export function buildBlockTree(blocks: Block[]): BlockWithChildren {
  const blockMap = new Map<number, BlockWithChildren>()

  // Initialize map with all blocks and empty `fields` array
  for (const block of blocks) {
    blockMap.set(block.id, { ...block, fields: [] })
  }

  const tree: BlockWithChildren[] = []

  for (const block of blocks) {
    const current = blockMap.get(block.id)!

    if (block.parent_id != null) {
      const parent = blockMap.get(block.parent_id)
      if (parent) {
        parent.fields.push(current)
      } else {
        console.warn(
          `Parent with id ${block.parent_id} not found for block ${block.id}`,
        )
      }
    } else {
      tree.push(current) // top-level (root) blocks
    }
  }

  return tree[0]
}
