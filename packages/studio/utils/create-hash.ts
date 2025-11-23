import crypto from 'node:crypto'

export const createHash = (str: string) => {
  const hash = crypto.createHash('sha256')

  hash.update(str)

  return hash.digest().toString('base64')
}
