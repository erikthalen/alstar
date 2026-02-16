export type DatastarFileUpload = {
  name: string
  contents: string
  mime: string
}

export type MediaSchema = {
  name: string
  filename: string
  mime_type: string
  width: number
  height: number
}

export type MediaRow = {
  name: string
  filename: string
  mime_type: string
  width: number
  height: number
}

export type MediaCacheSchema = {
  original_filename: string
  filename: string
  mime_type: string
  width: number
  height: number
}
