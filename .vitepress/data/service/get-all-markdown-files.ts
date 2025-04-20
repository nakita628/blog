import fs from 'node:fs'
import path from 'node:path'
import { fileFilter } from '../pure/file-filter'
import { BASE_DIR } from '../constants'

/**
 * getAllMarkdownFiles
 * @returns string[]
 */
export function getAllMarkdownFiles(): string[] {
  const files: string[] = []
  const readDirectory = (directory: string) => {
    const entries = fs.readdirSync(directory, { withFileTypes: true })
    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name)
      if (entry.isDirectory()) {
        readDirectory(fullPath)
        continue
      }
      if (fileFilter(entry.name)) {
        files.push(fullPath)
      }
    }
  }
  readDirectory(BASE_DIR)
  return files
}
