import { html } from '@alstar/studio/html'

export default section => {
  // console.log(section.fields.items.blocks)

  return html`
    <section class="section features">
      <ul>
        ${section.fields.items?.blocks?.map(block => {
          return html`<li>[x] ${block.value}</li>`
        })}
      </ul>
    </section>
  `
}
