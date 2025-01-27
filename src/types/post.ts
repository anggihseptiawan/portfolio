export interface Post {
  title: string
  slug: string
  description: string
  thumbnail: {
    url: string
  }
}

export interface PostLoaderData {
  posts: {
    description: string
    slug: string
    thumbnail: {
      url: string
    }
    title: string
  }[]
}

export interface PostDetailLoaderData {
  post: {
    localizations: {
      content: {
        markdown: string
      }
      locale: "id" | "en"
      title: string
      thumbnail: {
        url: string
      }
    }[]
    slug: string
  }
}
