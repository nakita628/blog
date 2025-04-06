import type { Post } from '../../types'
import { getAllMarkdownFiles } from './get-all-markdown-files'
import { parseFileToPost } from './parse-file-to-post'

/**
 * getPosts
 * @returns Post[]
 */
export function getPosts(): Post[] {
  const files: string[] = getAllMarkdownFiles()
  return files.map((filePath) => parseFileToPost(filePath))
}
