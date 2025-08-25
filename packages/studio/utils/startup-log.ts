import packageJSON from '../package.json' with { type: 'json' }

export default ({ port, refresherPort }: { port: number, refresherPort: number }) => {
  console.log('\x1b[32m%s\x1b[0m', '╭───────────────────────╮')
  console.log('\x1b[32m%s\x1b[0m', '│ Alstar Studio         │')
  console.log('\x1b[32m%s\x1b[0m', `│ ${packageJSON.version}${' '.repeat(22 - packageJSON.version.length)}│`)
  console.log('\x1b[32m%s\x1b[0m', `│ http://localhost:${port} │`)
  console.log('\x1b[32m%s\x1b[0m', `│ Refresher port:  ${refresherPort} │`)
  console.log('\x1b[32m%s\x1b[0m', '╰───────────────────────╯')
}