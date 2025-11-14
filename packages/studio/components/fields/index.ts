import Text from './Text.ts'
import Markdown from './Markdown.ts'
import Slug, { routes as slugRoutes } from './Slug.ts'
import Reference from './Reference.ts'
import SVG from './SVG.ts'

export const Field = { Text, Markdown, Slug, Reference, SVG }

export const fieldRoutes = [slugRoutes]
