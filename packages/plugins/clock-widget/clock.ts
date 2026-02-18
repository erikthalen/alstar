import { html } from 'hono/html'

export default () => {
  return html`
    <div class="clock">
      <div class="clock-face" id="app">
        <time datetime="12:00">12</time>
        <time datetime="1:00">1</time>
        <time datetime="2:00">2</time>
        <time datetime="3:00">3</time>
        <time datetime="4:00">4</time>
        <time datetime="5:00">5</time>
        <time datetime="6:00">6</time>
        <time datetime="7:00">7</time>
        <time datetime="8:00">8</time>
        <time datetime="9:00">9</time>
        <time datetime="10:00">10</time>
        <time datetime="11:00">11</time>
        <span class="arm hours" data-style="{rotate: $clockWidget.hourDegrees + 'deg'}"></span>
        <span class="arm minutes" data-style="{rotate: $clockWidget.minutesDegrees + 'deg'}"></span>
        <span class="arm seconds" data-style="{rotate: $clockWidget.secondsDegrees + 'deg'}"></span>
      </div>
    </div>
  `
}
