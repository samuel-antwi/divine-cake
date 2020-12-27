import { gql } from 'graphql-request';

export const PRODUCTS = gql`
  query featuredProducts($type: String!) {
    products(where: { type: $type }) {
      description
      id
      name
      price
      slug
      image {
        url
      }
    }
    testimonies {
      rating
      name
      id
      review {
        text
      }
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

export const ABOUT_PAGE = gql`
  query queryAboutPage($slug: String!) {
    about(where: { slug: $slug }) {
      description {
        text
      }
      id
      missionStatement {
        text
      }
      slug
      title
      missionTitle
      images {
        id
        url
      }
    }
    testimonies {
      rating
      name
      id
      review {
        text
      }
      image {
        url
      }
    }
  }
`;
