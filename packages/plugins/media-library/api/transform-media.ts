import sharp, { type AvailableFormatInfo, type FormatEnum } from 'sharp'

export type TransformOptions = {
  w?: string
  h?: string
  fit?: string
  format?: keyof FormatEnum | AvailableFormatInfo
}

const removeUndefined = (obj: Record<string, unknown>) => JSON.parse(JSON.stringify(obj))

export const transformMedia = async (
  buffer: Buffer,
  options: TransformOptions,
): Promise<Buffer> => {
  const transformedMedia = sharp(buffer)

  transformedMedia.resize(
    removeUndefined({
      width: options.w ? parseFloat(options.w) : undefined,
      height: options.h ? parseFloat(options.h) : undefined,
      fit: options.fit,
    }),
  )

  if (options.format) {
    transformedMedia.toFormat(options.format)
  }

  return await transformedMedia.toBuffer()
}
