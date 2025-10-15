import { html, query } from '@alstar/studio'

type Props = {
  fields: {
    link: {
      value: string
    }
    installCommand: {
      value: string
    }
  }
}

export default (section: Props) => {
  const linkReference = query.root({
    type: 'slug',
    value: section.fields.link.value,
  })

  return html`
    <section class="section cta">
      <a href="${linkReference?.fields.slug.value}"> Get started </a>

      <copy-to-clipboard>
        <span>$ <code id="code"> ${section.fields.installCommand.value} </code></span>

        <button class="ghost" for="code" aria-title="Copy to clipboard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <!-- Icon from HeroIcons by Refactoring UI Inc - https://github.com/tailwindlabs/heroicons/blob/master/LICENSE -->
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0q.083.292.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0q.002-.32.084-.612m7.332 0q.969.073 1.927.184c1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48 48 0 0 1 1.927-.184"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <!-- Icon from HeroIcons by Refactoring UI Inc - https://github.com/tailwindlabs/heroicons/blob/master/LICENSE -->
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M11.35 3.836q-.099.316-.1.664c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75a2.3 2.3 0 0 0-.1-.664m-5.8 0A2.25 2.25 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0q-.563.035-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414q.564.035 1.124.08c1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5l3-3.75"
            />
          </svg>
        </button>
      </copy-to-clipboard>
    </section>
  `
}
