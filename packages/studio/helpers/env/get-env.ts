import fsp from 'node:fs/promises'

type AlstarEnv = {
  ALSTAR_JWT_ACCESS_TOKEN_SECRET: string
  ALSTAR_JWT_REFRESH_TOKEN_SECRET: string
  ALSTAR_ADMIN_USER: string
  ALSTAR_ADMIN_PASSWORD: string
}

function parseEnvFile(envContent: string): AlstarEnv {
  const envJson: { [key: string]: string } = {}

  const lines = envContent.split('\n')

  for (let line of lines) {
    line = line.trim()

    // Ignore empty lines or comments
    if (!line || line.startsWith('#')) {
      continue
    }

    const [key, value] = line.split('=')

    if (key && value) {
      envJson[key.trim()] = value.trim()
    }
  }

  return envJson as AlstarEnv
}

export async function getEnv(asJSON: boolean = true) {
  const envFile = await fsp.readFile('./.env').catch(() => null)

  if (envFile) {
    // if (asJSON) {
      return parseEnvFile(envFile.toString())
    // } else {
    //   return envFile.toString()
    // }
  }

  await fsp.writeFile('./.env', '')

  return getEnv(asJSON)
}
