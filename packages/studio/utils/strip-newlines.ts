import { type HtmlEscapedString } from 'hono/utils/html'

export const stripNewlines = (
  str: string | HtmlEscapedString | Promise<HtmlEscapedString>
) => str.toString().replaceAll('\n', '')
