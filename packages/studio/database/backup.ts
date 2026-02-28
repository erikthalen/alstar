import { cpSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import { basename, join } from 'node:path'
import { backup, DatabaseSync } from 'node:sqlite'

export interface BackupEntry {
  name: string
  path: string
  size: number
  createdAt: Date
}

export async function backupDatabase(sourceName: string, destName: string) {
  const source = new DatabaseSync(sourceName, {
    readOnly: true,
  })

  await backup(source, destName, {
    progress: ({ totalPages, remainingPages }) => {
      console.log('Backup in progress', { totalPages, remainingPages })
    },
  })

  source.close()

  return true
}

export async function createBackup(dbPath: string, backupsDir: string): Promise<string> {
  mkdirSync(backupsDir, { recursive: true })
  const ts = new Date().toISOString().replace(/[:.]/g, '-')
  const nano = process.hrtime.bigint().toString().slice(-6)
  const dbName = basename(dbPath)
  const name = `${dbName}.${ts}-${nano}.bak`

  await backupDatabase(dbPath, join(backupsDir, name))

  return name
}

export function listBackups(backupsDir: string): BackupEntry[] {
  let files: string[]
  try {
    files = readdirSync(backupsDir).filter((f) => f.endsWith('.bak'))
  } catch {
    return []
  }
  return files
    .map((name) => {
      const path = join(backupsDir, name)
      const stat = statSync(path)
      return { name, path, size: stat.size, createdAt: stat.birthtime }
    })
    .sort((a, b) => b.name.localeCompare(a.name))
}

export async function restoreBackup(
  dbPath: string,
  backupsDir: string,
  backupName: string,
  backup = true,
): Promise<void> {
  if (backup) await createBackup(dbPath, backupsDir)
  cpSync(join(backupsDir, backupName), dbPath)
}
