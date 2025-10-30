// client side script
const html = String.raw

export const refreshClient = (port: number) => {
  return html`<script defer type="module">
    function reload() {
      const retry = async () => {
        if (await fetch('http://localhost:${port}').catch(() => false))
          window.location.reload()
        else requestAnimationFrame(retry)
      }

      retry()
    }

    console.log(
      '%c REFRESHER ACTIVE ',
      'color: green; background: lightgreen; border-radius: 2px'
    )

    const response = await fetch('http://localhost:${port}/refresh').catch(
      () => false
    )

    reload()
  </script>`
}
