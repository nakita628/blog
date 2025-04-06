import { getPosts } from '../service/get-posts'

export function tagsTransaction(): string[] {
  try {
    const posts = getPosts()
    const tags: string[] = Array.from(new Set(posts.flatMap((post) => post.tags))).sort()
    return tags
  } catch (e) {
    console.error(e)
    throw new Error('Failed to retrieve Tags')
  }
}
