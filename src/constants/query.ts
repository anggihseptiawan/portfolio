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
  query PostDetail(
    $slug: String!
    $locales: [Locale!]!
    $includeCurrent: Boolean!
  ) {
    post(where: { slug: $slug }) {
      slug
      localizations(locales: $locales, includeCurrent: $includeCurrent) {
        locale
        title
        content {
          markdown
        }
        thumbnail {
          url
        }
      }
    }
  }
`
