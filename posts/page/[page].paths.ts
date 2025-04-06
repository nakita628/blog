import { posts } from '../../.vitepress/config.mjs'

export default {
  paths() {
    const totalPages: number = Math.ceil(posts.length / 20) // 1ページあたり20記事と仮定

    return Array.from({ length: totalPages }, (_, i: number) => ({
      params: {
        page: i + 1,
      },
    }))
  },
}
