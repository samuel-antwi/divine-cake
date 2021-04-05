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
    chefs {
      id
      image {
        url
      }
      name
      title
    }
  }
`;

export const ALL_PRODUCTS = gql`
  query allProducts {
    __typename
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
  query queryProduct($id: ID!) {
    product(where: { id: $id }) {
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
        markdown
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

export const CHEFS = gql`
  query chefs {
    __typename
    chefs {
      id
      image {
        url
      }
      name
      title
    }
  }
`;
