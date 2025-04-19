import { getAllMarkdownFiles } from '../service/get-all-markdown-files'
import { parseFileToPost } from '../service/parse-file-to-post'

export function tagsAction(): string[] {
  try {
    const all_markdown_files = getAllMarkdownFiles()
    const posts = all_markdown_files.map((filePath) => parseFileToPost(filePath))
    const tags: string[] = Array.from(new Set(posts.flatMap((post) => post.tags))).sort()
    return tags
  } catch (e) {
    console.error(e)
    throw new Error('Failed to retrieve Tags')
  }
}
