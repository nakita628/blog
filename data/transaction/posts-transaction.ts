import type { Post } from '../../types'
import { getPosts } from '../service/get-posts'

export function postsTransaction(): Post[] {
  try {
    return getPosts()
  } catch (e) {
    console.error(e)
    throw new Error('Failed to retrieve article')
  }
}
