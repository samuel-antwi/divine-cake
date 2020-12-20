import { gql } from 'graphql-request';

export const PRODUCTS = gql`
  query getProducts {
    products {
      id
      name
      price
      slug
      image {
        url
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query queryProduct($slug: String!) {
    product(where: { slug: $slug }) {
      description
      id
      name
      price
      slug
      image {
        url
      }
      reviews {
        ... on Review {
          id
          email
          name
          rating
          title
          comment {
            html
          }
          createdAt
        }
      }
    }
  }
`;
