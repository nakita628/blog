import type { Matter } from '../../types'
import fs from 'node:fs'
import matter from 'gray-matter'

/**
 * getMatter
 * return Matter
 * @param filePath
 * @returns Matter
 */
export function getMatter(filePath: string): Matter {
  const content: string = fs.readFileSync(filePath, 'utf-8')
  const res = matter(content)
  const { title, description, date, tags } = res.data
  return {
    title,
    description,
    date,
    tags,
    prev: false,
    next: false,
  }
}
