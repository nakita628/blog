import { describe, test, expect } from 'vitest'
import { buildLink } from './build-link'

describe('buildLink Test', () => {
  test('buildLink("/blog/posts/", "1") -> /blog/posts/1', () => {
    const input = buildLink('/blog/posts/', '1')
    const expected = '/blog/posts/1'
    expect(input).toBe(expected)
  })
})
