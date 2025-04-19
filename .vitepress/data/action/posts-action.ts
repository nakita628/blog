import type { Post } from '../../../types'
import { getAllMarkdownFiles } from '../service/get-all-markdown-files'
import { parseFileToPost } from '../service/parse-file-to-post'

export function postsAction(): Post[] {
  try {
    const all_markdown_files = getAllMarkdownFiles()
    const posts = all_markdown_files.map((filePath) => parseFileToPost(filePath))
    return posts
  } catch (e) {
    console.error(e)
    throw new Error('Failed to retrieve article')
  }
}
