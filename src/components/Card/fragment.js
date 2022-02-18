import { graphql } from 'gatsby';

export const CardFragment = graphql`
  fragment Card on ContentfulCard {
    id
    title
    sys {
      contentType {
        sys {
          id
        }
      }
    }
  }
`;
