import { gql } from 'graphql-request';

export const HERO_PAGE = gql`
  query heroPage($slug: String!) {
    page(where: { slug: $slug }) {
      description
      image {
        url
      }
      title
    }
  }
`;
