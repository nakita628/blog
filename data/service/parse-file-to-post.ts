import type { Matter, Post } from '../../types'
import { buildPost } from '../pure/build-post'
import { relativeMd } from '../pure/relative-md'
import path from 'node:path'
import { getMatter } from './get-matter'
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
