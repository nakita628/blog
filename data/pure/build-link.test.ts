import { describe, expect, it } from 'vitest'
import { buildLink } from './build-link'

const buildLinkTestCases = [
  {
    path: '/blog/posts/',
    str: '1',
    expected: '/blog/posts/1',
  },
  {
    path: '/blog/posts/',
    str: '2',
    expected: '/blog/posts/2',
  },
  {
    path: '/blog/posts/',
    str: '3',
    expected: '/blog/posts/3',
  },
]

describe('buildLink', () => {
  it.concurrent.each(buildLinkTestCases)(
    'buildLink($path, $str) -> $expected',
    ({ path, str, expected }) => {
      const input = buildLink(path, str)
      expect(input).toBe(expected)
    },
  )
})
