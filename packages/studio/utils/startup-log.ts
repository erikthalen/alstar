import packageJSON from '../package.json' with { type: 'json' }

export default ({ port, refresherPort }: { port: number, refresherPort: number }) => {
  console.log('\x1b[32m%s\x1b[0m', '╭───────────────╮')
  console.log('\x1b[32m%s\x1b[0m', '│ Alstar Studio │')
  console.log('\x1b[32m%s\x1b[0m', '╰───────────────╯')
  console.log(' ')
  console.log('\x1b[32m%s\x1b[0m', `Version:`)
  console.log(packageJSON.version)
  console.log(' ')
  console.log('\x1b[32m%s\x1b[0m', `App:`)
  console.log(`http://localhost:${port}`)
  console.log(' ')
  console.log('\x1b[32m%s\x1b[0m', `Studio:`)
  console.log(`http://localhost:${port}/studio`)
  console.log(' ')
  console.log('\x1b[32m%s\x1b[0m', `Refresher:`)
  console.log(`http://localhost:${refresherPort}`)  
}