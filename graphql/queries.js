import { gql } from 'graphql-request';

export const HOME_PAGE = gql`
  query homePage {
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
    cakes {
      id
      name
      price
      slug
      images {
        height
        width
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

export const ALL_CAKES = gql`
  query allProducts {
    __typename
    cakes {
      id
      name
      price
      slug
      images {
        url
      }
    }
  }
`;

export const GET_CAKE = gql`
  query queryCake($slug: String!) {
    cake(where: { slug: $slug }) {
      description
      id
      name
      price
      slug
      images {
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
