import { fileFilter } from './file-filter'
import { describe, expect, it } from 'vitest'

const fileFilterTestCases = [
  {
    file: '1.md',
    expected: true,
  },
  {
    file: '1.txt',
    expected: false,
  },
  {
    file: 'index.md',
    expected: false,
  },
]

describe('fileFilter', () => {
  it.concurrent.each(fileFilterTestCases)(
    'fileFilter($file) -> $expected',
    ({ file, expected }) => {
      const result = fileFilter(file)
      expect(result).toBe(expected)
    },
  )
})
