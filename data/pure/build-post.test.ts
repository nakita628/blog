import { describe, expect, it } from 'vitest'
import { buildPost } from './build-post'

const buildPostTestCases = [
  {
    matter: {
      title: 'Sample Post Title 1',
      description: 'This is a sample post description for testing purposes. 1',
      date: '2024-01-01',
      tags: ['typescript', 'test', 'example'],
      prev: { text: 'Previous Post 1', link: '/posts/previous1' },
      next: { text: 'Next Post 1', link: '2023/1' },
    },
    link: '2023/1',
    expected: {
      title: 'Sample Post Title 1',
      description: 'This is a sample post description for testing purposes. 1',
      date: '2024-01-01',
      tags: ['typescript', 'test', 'example'],
      link: '/blog/posts/2023/1',
    },
  },
]

describe('buildPost', () => {
  it.concurrent.each(buildPostTestCases)(
    'buildPost($matter, $link) -> $expected',
    ({ matter, link, expected }) => {
      const result = buildPost(matter, link)
      expect(result).toEqual(expected)
    },
  )
})
