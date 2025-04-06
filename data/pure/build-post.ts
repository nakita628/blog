import type { Matter, Post } from '../../types'
import { buildLink } from './build-link'
import { formatDate } from './format-date'

/**
 * buildPost
 * @param matter
 * @param link
 * @returns Post
 */
export function buildPost(matter: Matter, link: string): Post {
  const LINK_PATH = '/blog/posts/' as const
  return {
    title: matter.title,
    description: matter.description,
    date: formatDate(matter.date),
    tags: matter.tags,
    link: buildLink(LINK_PATH, link),
  }
}
