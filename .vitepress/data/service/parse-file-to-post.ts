import type { Matter, Post } from '../../../types'
import matter from 'gray-matter'
import fs from 'node:fs'
import path from 'node:path'
import { buildPost } from '../pure/build-post'
import { relativeMd } from '../pure/relative-md'
import { BASE_DIR } from '../constants'

/**
 * parseFileToPost
 * @param filePath
 * @returns Post
 */
export function parseFileToPost(filePath: string): Post {
  const matter: Matter = getMatter(filePath)
  const relativePath: string = path.relative(BASE_DIR, filePath)
  const link = relativeMd(relativePath)
  return buildPost(matter, link)
}

/**
 * getMatter
 * return Matter
 * @param filePath
 * @returns Matter
 */
function getMatter(filePath: string): Matter {
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
