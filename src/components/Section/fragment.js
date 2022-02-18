import { graphql } from 'gatsby';

export const SectionFragment = graphql`
  fragment Section on ContentfulSection {
    id
    title
    backgroundColor
    sys {
      contentType {
        sys {
          id
        }
      }
    }
  }
`;
