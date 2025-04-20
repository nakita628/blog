import { describe, test, expect } from 'vitest'
import { relativeMd } from './relative-md'

describe('relativeMd Test', () => {
  test(`relativeMd('1.md') -> '1'`, () => {
    const result = relativeMd('1.md')
    const expected = '1'
    expect(result).toBe('1')
  })
})
