import { html } from '@alstar/studio'
import { raw } from 'hono/html'

type Props = {
  fields: {
    logo: {
      value: string
    }
    title: {
      value: string
    }
    description: {
      value: string
    }
  }
}

export default (section: Props) => {
  return html`
    <section class="section hero">
      <h1 class="sr-only">${section.fields.title.value}</h1>
      
      <div class="logo">${raw(section.fields.logo.value)}</div>
      
      <p>${section.fields.description.value}</p>
    </section>
  `
}
