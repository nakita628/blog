import { posts, tags } from '../../../.vitepress/config.mjs'

export default {
  async paths() {
    const paths: { params: { tag: string; page: number } }[] = tags.flatMap((tag) => {
      const tagPosts = posts.filter((post) => post.tags.includes(tag))
      const totalPages = Math.ceil(tagPosts.length / 20)

      return Array.from({ length: totalPages }, (_, i) => ({
        params: { tag, page: i + 1 },
      }))
    })
    return paths
  },
}
