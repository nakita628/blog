import { describe, expect, it } from 'vitest'
import { relativeMd } from './relative-md'

const relativeMdTestCases = [
  { str: '1.md', expected: '1' },
  { str: '2.md', expected: '2' },
  { str: '3.md', expected: '3' },
  { str: '4.md', expected: '4' },
  { str: '5.md', expected: '5' },
]

describe('relativeMd', () => {
  it.concurrent.each(relativeMdTestCases)('relativeMd($str) -> $expected', ({ str, expected }) => {
    const input = relativeMd(str)
    expect(input).toBe(expected)
  })
})
