import { html } from 'hono/html'

type CalendarCell = {
  date: Date | null
  day: number | null
  isToday: boolean
}

export function generateCalendarGrid({
  year = new Date().getFullYear(),
  month = new Date().getMonth(), // 0-based
} = {}): CalendarCell[][] {
  const firstOfMonth = new Date(year, month, 1)
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  // Convert Sunday=0 → Monday=0
  const startOffset = (firstOfMonth.getDay() + 6) % 7

  const today = new Date()
  const isSameDay = (d: Date) =>
    d.getFullYear() === today.getFullYear() &&
    d.getMonth() === today.getMonth() &&
    d.getDate() === today.getDate()

  const cells: CalendarCell[] = []

  // Leading empty cells
  for (let i = 0; i < startOffset; i++) {
    cells.push({ date: null, day: null, isToday: false })
  }

  // Month days
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day)
    cells.push({
      date,
      day,
      isToday: isSameDay(date),
    })
  }

  // Trailing empty cells (to always fill 6 rows = 42 cells)
  while (cells.length < 42) {
    cells.push({ date: null, day: null, isToday: false })
  }

  // Chunk into weeks
  return Array.from({ length: 6 }, (_, i) => cells.slice(i * 7, i * 7 + 7))
}

export default () => {
  const grid = generateCalendarGrid()

  return html`
    <div class="weekdays">
      <div>M</div>
      <div>T</div>
      <div>W</div>
      <div>T</div>
      <div>F</div>
      <div>S</div>
      <div>S</div>
    </div>
    <div class="grid">
      ${grid
        .flat()
        .map(
          (cell) =>
            `<div class="cell ${cell.isToday ? 'today' : ''}">
          ${cell.day ?? ''}
        </div>`,
        )
        .join('')}
    </div>
  `
}
