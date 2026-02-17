import { definePlugin } from '@alstar/framework'
import { html } from 'hono/html'

const widget = () => {
  const now = new Date()

  const seconds = now.getSeconds()
  const secondsDegrees = (seconds / 60) * 360 + 90

  const mins = now.getMinutes()
  const minutesDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90

  const hour = now.getHours()
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90

  const date = now.getDate()
  const month = now.getMonth()

  return html`
    <!-- data-on-interval="$clockWidget.secondsDegrees += (360 / 60)" -->
    <div
      id="clock_widget"
      data-signals="{
        clockWidget: {
          hourDegrees: ${hourDegrees},
          minutesDegrees: ${minutesDegrees},
          secondsDegrees: ${secondsDegrees}
        }
      }"
      data-on-interval="
        $clockWidget.hourDegrees = $clockWidget.hourDegrees + (360 / 60 / 60 / 60);
        $clockWidget.minutesDegrees = $clockWidget.minutesDegrees + (360 / 60 / 60);
        $clockWidget.secondsDegrees = $clockWidget.secondsDegrees + (360 / 60);
      "
    >
      <main>
        <div class="watch">
          <div class="ticks"></div>
          <span class="hour" data-style="{rotate: $clockWidget.hourDegrees + 'deg'}"></span>
          <span class="minute" data-style="{rotate: $clockWidget.minutesDegrees + 'deg'}"></span>
          <span class="second" data-style="{rotate: $clockWidget.secondsDegrees + 'deg'}"></span>
        </div>

        <span class="date">
          <p>${date}/${month}</p>
        </span>
      </main>
    </div>
  `
}

export default definePlugin(() => {
  return {
    public: [
      {
        filename: 'clock-widget.css',
        root: import.meta.dirname,
      },
    ],
    widget: widget,
  }
})
