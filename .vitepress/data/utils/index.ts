import type { Matter, Post } from '../../types'

/**
 * buildLink
 * @param path
 * @param str
 * @returns string
 */
export function buildLink(path: string, str: string): string {
  return `${path}${str}`
}

/**
 * buildPost
 * @param matter
 * @param link
 * @returns Post
 */
export function buildPost(matter: Matter, link: string): Post {
  return {
    title: matter.title,
    description: matter.description,
    date: formatDate(matter.date),
    tags: matter.tags,
    link: buildLink('/blog/posts/', link),
  }
}

/**
 * formatDate
 * @param dateStr
 * @returns string
 */
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

/**
 * relativeMd
 * @param str
 * @returns
 */
export function relativeMd(str: string): string {
  return str.replace(/\.md$/, '')
}

/**
 * fileFilter
 * @param file
 * @returns boolean
 */
export function fileFilter(file: string): boolean {
  return file.endsWith('.md') && file !== 'index.md' && file !== '[page].md'
}

/**
 * isMarkdownFile
 * @param value
 * @returns boolean
 */
export function isMarkdownFile(value: string): value is `${string}.md` {
  return value.endsWith('.md')
}
