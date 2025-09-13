import Text from './Text.ts'
import Markdown from './Markdown.ts'
import Slug, { routes as slugRoutes } from './Slug.ts'

export const Field = { Text, Markdown, Slug }

export const fieldRoutes = [slugRoutes]
