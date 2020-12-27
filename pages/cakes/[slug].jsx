import Layout from 'components/Layout';
import graphcms from 'graphql/client';
import { GET_PRODUCT, PRODUCTS } from 'graphql/queries';
import React from 'react';

const Product = ({ product }) => {
  return (
    <Layout title='Cake'>
      <p>Product details</p>
    </Layout>
  );
};

export default Product;

export const getStaticPaths = async () => {
  const { products } = await graphcms.request(PRODUCTS, {
    type: 'featured-products',
  });
  return {
    paths: products.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { product } = await graphcms.request(GET_PRODUCT, {
    slug: params.slug,
  });
  return {
    props: {
      product,
    },
  };
};
