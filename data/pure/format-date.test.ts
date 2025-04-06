import { describe, expect, it } from 'vitest'
import { formatDate } from './format-date'

const formatDateTestCases: {
  dateStr: string
  expected: string
}[] = [
  { dateStr: '2024-01-01T00:00:00.000Z', expected: '2024-01-01' },
  { dateStr: '2024-01-02T00:00:00.000Z', expected: '2024-01-02' },
  { dateStr: '2024-01-03T00:00:00.000Z', expected: '2024-01-03' },
  { dateStr: '2024-01-04T00:00:00.000Z', expected: '2024-01-04' },
  { dateStr: '2024-01-05T00:00:00.000Z', expected: '2024-01-05' },
]

describe('formatDate', () => {
  it.concurrent.each(formatDateTestCases)(
    'formatDate($dateStr) -> $expected',
    ({ dateStr, expected }) => {
      const result = formatDate(dateStr)
      expect(result).toBe(expected)
    },
  )
})
