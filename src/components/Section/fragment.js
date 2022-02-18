import { graphql } from 'gatsby'

export const SectionFragment = graphql`
  fragment Section on ContentfulSection {
    id
    title
    backgroundColor
    content {
      ...Card
    }
    sys {
      contentType {
        sys {
          id
        }
      }
    }
  }
`
