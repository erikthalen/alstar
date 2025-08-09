import fs from 'node:fs/promises'
import path from 'node:path'

const CONFIG_FILE_NAME = 'alstar.config.ts'

export const getConfig = async <P>(): Promise<P> => {
  const root = path.resolve('./')

  if (!(await fileExists(path.join(root, CONFIG_FILE_NAME)))) {
    return {} as P
  }

  const module = await import(path.join(root, CONFIG_FILE_NAME))
  const config = Object.values(module)[0]

  return config as P
}

async function fileExists(filepath: string) {
  try {
    return await fs.stat(filepath)
  } catch (error) {
    return null
  }
}
