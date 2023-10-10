import { gql } from "@apollo/client"

export const GET_POST = gql`
  {
    posts {
      title
      slug
      description
      thumbnail {
        url
      }
    }
  }
`

export const GET_DETAIL_POST = gql`
  query PostDetail($slug: String!) {
    post(where: { slug: $slug }) {
      slug
      title
      content {
        html
      }
      thumbnail {
        url
      }
    }
  }
`
