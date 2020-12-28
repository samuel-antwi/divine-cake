import Layout from 'components/Layout';
import graphcms from 'graphql/client';
import { GET_PRODUCT, PRODUCTS } from 'graphql/queries';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { BsChevronLeft } from 'react-icons/bs';
import { useRouter } from 'next/router';

const Product = ({ product }) => {
  const {
    image: { url },
    name,
    price,
    description,
  } = product;

  const location = useRouter();

  console.log(useRouter());

  return (
    <Layout title='Cake'>
      <Div>
        <div
          style={{ backgroundImage: `url(${url})` }}
          className='relative wrapper'>
          <div className='overlay'>
            <div className='container'>
              <p className='font-title capitalize md:text-5xl text-3xl font-bold tracking-wide text-white absolute flex justify-center items-center inset-0'>
                {name}
              </p>
            </div>
          </div>
        </div>
        <div className='py-10'>
          <div className='xl:w-8/12 mx-auto px-6 md:px-10'>
            <button
              onClick={() => location.push('/products')}
              className='my-5 inline-flex items-center focus:outline-none  border border-yellow-900 px-3 py-1 text-gray-500'>
              <BsChevronLeft />
              <span>All products</span>
            </button>
            <div className='md:grid md:grid-cols-2 gap-10'>
              <Image
                className='object-cover'
                src={url}
                width={500}
                height={500}
              />
              <div className='py-10'>
                <h1 className='font-title mb-6 md:text-4xl capitalize text-2xl font-semibold text-yellow-900'>
                  {name}
                </h1>
                <p className='font-barlow mb-7 md:text-3xl text-gray-700 text-xl font-semibold'>
                  GH{price}
                </p>
                <div>
                  <h1 className='text-2xl font-title font-semibold mb-3 text-yellow-900'>
                    Description
                  </h1>
                  <p className=' text-xl text-gray-600 font-mulish'>
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Div>
    </Layout>
  );
};

export default Product;

const Div = styled.div`
  .wrapper {
    /* background: url('/img/velizar-ivanov-rXB9YjOQX8I-unsplash.jpg'); */
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    min-height: 250px;
  }

  .overlay {
    min-height: 250px;
    background: rgba(0, 0, 0, 0.7);
  }
`;

export const getStaticPaths = async () => {
  const { products } = await graphcms.request(PRODUCTS, {
    type: 'featured-products',
  });
  return {
    paths: products.map(({ id }) => ({
      params: {
        id,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { product } = await graphcms.request(GET_PRODUCT, {
    id: params.id,
  });
  return {
    props: {
      product,
    },
  };
};
