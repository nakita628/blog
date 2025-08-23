import type { Post } from '../types'

declare const __POSTS__: Post[]

export const getNewPosts = (num: number) => {
  const posts = __POSTS__
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, num)
}
