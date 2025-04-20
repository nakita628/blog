import { describe, test, expect } from 'vitest'
import { fileFilter } from './file-filter'

describe('fileFilter Test', () => {
  test('fileFilter(1.md) -> true', () => {
    const result = fileFilter('1.md')
    const expected = true
    expect(result).toBe(expected)
  })
  test('fileFilter(index.md) -> false', () => {
    const result = fileFilter('index.md')
    const expected = false
    expect(result).toBe(expected)
  })
})
