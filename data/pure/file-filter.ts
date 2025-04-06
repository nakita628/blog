/**
 * fileFilter
 * @param file
 * @returns boolean
 */
export function fileFilter(file: string): boolean {
  return file.endsWith('.md') && file !== 'index.md' && file !== '[page].md'
}
