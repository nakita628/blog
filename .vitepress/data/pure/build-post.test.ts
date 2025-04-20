import { describe, test, expect } from 'vitest'
import { buildPost } from './build-post'

describe('buildPost Test', () => {
  test('buildPost($matter, $link)', () => {
    const result = buildPost(
      {
        title: 'Sample Post Title 1',
        description: 'This is a sample post description for testing purposes. 1',
        date: '2024-01-01',
        tags: ['typescript', 'test', 'example'],
        prev: { text: 'Previous Post 1', link: '/posts/previous1' },
        next: { text: 'Next Post 1', link: '2023/1' },
      },
      '2023/1',
    )
    const expected = {
      title: 'Sample Post Title 1',
      description: 'This is a sample post description for testing purposes. 1',
      date: '2024-01-01',
      tags: ['typescript', 'test', 'example'],
      link: '/blog/posts/2023/1',
    }
    expect(result).toEqual(expected)
  })
})
