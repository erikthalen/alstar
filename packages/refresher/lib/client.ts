// client side script
export function refresherClient() {
  const eventSource = new EventSource('http://localhost:5432')
  eventSource.onmessage = () => {
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  console.log(
    '%c REFRESHER ACTIVE ',
    'color: green; background: lightgreen; border-radius: 2px'
  )
}
