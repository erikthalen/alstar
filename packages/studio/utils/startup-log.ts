import packageJSON from '../package.json' with { type: 'json' }

export default () => {
  console.log('\x1b[32m%s\x1b[0m', '╭───────────────────────╮')
  console.log('\x1b[32m%s\x1b[0m', '│ Alstar Studio         │')
  console.log('\x1b[32m%s\x1b[0m', `│ ${packageJSON.version}${' '.repeat(22 - packageJSON.version.length)}│`)
  console.log('\x1b[32m%s\x1b[0m', `│ http://localhost:${3000} │`)
  console.log('\x1b[32m%s\x1b[0m', '╰───────────────────────╯')
}