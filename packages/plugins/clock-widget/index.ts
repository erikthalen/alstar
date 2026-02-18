import { definePlugin } from '@alstar/framework'
import { html } from 'hono/html'
import clock from './clock.ts'
import calendar from './calendar.ts'

const widget = () => {
  const now = new Date()

  const seconds = now.getSeconds()
  const secondsDegrees = (seconds / 60) * 360

  const mins = now.getMinutes()
  const minutesDegrees = (mins / 60) * 360 + (seconds / 60) * 6

  const hour = now.getHours()
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30

  const date = now.getDate()
  const month = now.getMonth()

  return html`
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
        ${clock()}

        <span class="date">
          ${calendar()}

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
