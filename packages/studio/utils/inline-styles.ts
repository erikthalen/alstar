import fsp from 'node:fs/promises'
import path from 'node:path'

const STYLES_EXPORT_NAME = 'styles'

export async function inlineStyles(options: { root: string }) {
  const pageFiles = await fsp.readdir(path.join(options.root, 'pages'), {
    recursive: true,
    withFileTypes: true,
  })
  const componentFiles = await fsp.readdir(path.join(options.root, 'components'), {
    recursive: true,
    withFileTypes: true,
  })
  const widgetFiles = await fsp.readdir(path.join(options.root, 'plugins'), {
    recursive: true,
    withFileTypes: true,
  })

  const files = [...pageFiles, ...componentFiles, ...widgetFiles]

  const tsFiles = files.filter((file) => path.extname(file.name) === '.ts')

  let styles = []

  for (const file of tsFiles) {
    try {
      const content = await import(path.join(file.parentPath, file.name))

      if (content[STYLES_EXPORT_NAME]) {
        styles.push(content[STYLES_EXPORT_NAME])
      }
    } catch (error) {
      console.log(error)
    }
  }

  return styles.join('\n')

  // console.log(tsFiles)
}
