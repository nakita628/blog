import { describe, test, expect } from 'vitest'
import { formatDate } from './format-date'

describe('formatDate Test', () => {
  test(`formatDate('2024-01-01T00:00:00.000Z') -> '2024-01-01'`, () => {
    const result = formatDate('2024-01-01T00:00:00.000Z')
    const expected = '2024-01-01'
    expect(result).toBe(expected)
  })
})
