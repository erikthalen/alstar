import packageJSON from '../package.json' with { type: 'json' }

const versionLength = packageJSON.version.length

export default () => {
  console.log()
  console.log(
    '\x1b[47m\x1b[30m%s\x1b[0m',
    ` ╭${'─'.repeat(17 + versionLength)}╮ `,
  )
  console.log(
    '\x1b[47m\x1b[30m%s\x1b[0m',
    ` │ Alstar Studio v${packageJSON.version} │ `,
  )
  console.log(
    '\x1b[47m\x1b[30m%s\x1b[0m',
    ` ╰${'─'.repeat(17 + versionLength)}╯ `,
  )
  console.log(' ')
}
