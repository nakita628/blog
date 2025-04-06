// prev/nextの型定義
type PrevNextLink =
  | {
      text: string
      link: string
    }
  | false

export type Matter = {
  title: string
  description: string
  date: string
  tags: string[]
  prev: PrevNextLink
  next: PrevNextLink
}

// Post
export type Post = {
  title: string
  description: string
  date: string
  tags: string[]
  link: string
}
