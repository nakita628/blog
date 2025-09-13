import markdownItPlantuml from 'markdown-it-plantuml'
import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { postsAction } from './data/actions/postsAction'
import { tagsAction } from './data/actions/tagsAction'
import type { Post } from './types'

// posts
export const posts: Post[] = postsAction()
// tags
export const tags: string[] = tagsAction()

const items = [
  { text: 'Home', link: '/' },
  { text: 'About', link: '/about' },
  { text: 'Posts', link: '/posts/page/1' },
  { text: 'Tags', link: '/tags' },
]

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: "N Akita's Blog",
    description: "N Akita's Blog",
    base: '/blog/',
    head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'n.svg' }]],
    appearance: 'force-dark',
    markdown: {
      config(md) {
        md.use(groupIconMdPlugin)
        md.use(markdownItPlantuml)
        md.use(tabsMarkdownPlugin)
      },
    },
    vite: {
      define: {
        __POSTS__: posts,
        __TAGS__: tags,
      },
      plugins: [groupIconVitePlugin()],
    },
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config

      nav: items,
      sidebar: items,

      socialLinks: [
        { icon: 'github', link: 'https://github.com/nakita628' },
        { icon: 'npm', link: 'https://www.npmjs.com/~n_akita' },
        { icon: 'x', link: 'https://x.com/mini_bg_pro_N' },
        {
          icon: 'bluesky',
          link: 'https://bsky.app/profile/mini-bg-pro-n.bsky.social',
        },
      ],
      search: {
        provider: 'local',
      },
      footer: {
        copyright: '© nakita-ypm.github.io/blog',
      },
    },
  }),
)
