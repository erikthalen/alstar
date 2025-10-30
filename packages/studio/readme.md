# Alstar Studio

Alstar Studio is a **fullstack framework** for building CMS-driven applications with **native Node.js** and **Hono**.

## Installation

Create a new project:

```sh
pnpm create @alstar
```

Follow the CLI prompts to set up a starter project in your chosen folder.

## Development

Start the dev server:

```sh
pnpm run dev
```

This runs a **Hono server**.

The core app is created via `createStudio(structure)`, which returns the Hono app. This makes it possible to extend the server with plugins or custom settings:

```ts
const app = await createStudio(structure)
// app.use(...) custom middleware
```

## Routing

Pages are defined in the `/pages` directory.

- Each `.ts` file becomes a route.
- Dynamic routes are created with square brackets, e.g. `/pages/[slug].ts`.

## CMS

Access the CMS at:

```
/studio
```

### Defining Content Structure

Pass a `Structure` object to `createStudio(structure)` to define the schema.

Use the helpers:

```ts
import {
  defineBlock,
  defineField,
  defineStructure,
  defineBlockField,
} from '@alstar/studio'
```

### Example: Schema Definition

```ts
const titleField = defineField({
  label: 'Title',
  type: 'text' | 'image' | 'markdown' | 'slug',
  description: 'Page title',
})

const pageBuilder = defineBlockField({
  label: 'Sections',
  type: 'blocks',
  children: {
    hero: defineBlock({
      label: 'Hero',
      type: 'hero',
      fields: {
        /* fields */
      },
    }),
    gallery: defineBlock({
      label: 'Gallery',
      type: 'gallery',
      fields: {
        /* fields */
      },
    }),
  },
})

const entryBlock = defineBlock({
  label: 'Entry',
  type: 'entry',
  fields: {
    title: titleField,
    builder: pageBuilder,
  },
})

export default defineStructure({
  entry: entryBlock,
})
```

### Concepts

- **Blocks** contain **fields**.
- **Block fields** (`type: 'blocks'`) can nest multiple block types under `children`.
- This enables **page builders** and reusable structures.

All content is stored in a **SQLite database** (`studio.db`) and can be queried in the templates with the `query` module.

## Frontend

The framework encourages **server-side rendering** with Hono’s HTML helper (re-exported by the `@alstar/studio` package):

```ts
import { defineEntry, html } from '@alstar/studio'

export default defineEntry((c) => {
  const slug = c.req.param('slug')

  return html`
    <h1>Hello World</h1>
    <p>This page is: ${slug}</p>
  `
})
```

### Interactivity

Even though the framework allows for having any library and tool for creating client-side behavior, it's recommended to use lightweight libraries such as:

- [Datastar](https://data-star.dev/) (used internally by the Studio)
- [Alpine.js](https://alpinejs.dev/)

## Quickstart Example Project

This example shows how to define a simple **page schema** and render it on the frontend.

### 1. Define the CMS Schema (`./index.ts`)

```ts
import {
  createStudio,
  defineBlock,
  defineField,
  defineStructure,
} from '@alstar/studio'

const page = defineBlock({
  label: 'Page',
  type: 'page',
  fields: {
    title: defineField({
      label: 'Title',
      type: 'text',
    }),
    slug: defineField({
      label: 'Slug',
      type: 'slug',
    }),
    body: defineField({
      label: 'Body',
      type: 'markdown',
    }),
  },
})

const structure = defineStructure({
  page,
})

await createStudio(structure)
```

### 2. Create a Frontend Route (`/pages/[slug].ts`)

```ts
import { defineEntry, html, query } from '@alstar/studio'

export default defineEntry(c) => {
  const slug = c.req.param('slug')
  const page = query.root({ type: 'slug', value: slug })

  if (!page) return c.notFound()

  return html`
    <main>
      <h1>${page.fields.title.value}</h1>
      <article>${page.fields.body.value}</article>
    </main>
  `
}
```

### 3. Run the Project

```sh
pnpm run dev
```

Visit:

- **CMS admin**: `http://localhost:3000/studio`
- **Frontend page**: `http://localhost:3000/my-first-page`

Create a new page in the CMS, set its slug field to `my-first-page`, and the frontend will render it automatically.
