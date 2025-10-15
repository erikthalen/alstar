import Text from './Text.ts'
import Markdown from './Markdown.ts'
import Slug, { routes as slugRoutes } from './Slug.ts'
import Reference from './Reference.ts'

export const Field = { Text, Markdown, Slug, Reference }

export const fieldRoutes = [slugRoutes]
