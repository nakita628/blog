/**
 * relativeMd
 * @param str 
 * @returns 
 */
export function relativeMd(str: string): string {
  return str.replace(/\.md$/, '')
}
