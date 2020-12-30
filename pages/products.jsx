import Layout from 'components/Layout';
import graphcms from 'graphql/client';
import { ALL_PRODUCTS } from 'graphql/queries';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Products = ({ products }) => {
  return (
    <Layout title='Products'>
      <Div className='bg-gray-100'>
        <div className='relative wrapper'>
          <div className='overlay'>
            <div className='container'>
              <p className='font-title md:text-5xl text-3xl font-bold tracking-wide text-white absolute flex justify-center items-center inset-0'>
                Products
              </p>
            </div>
          </div>
        </div>
        <div className='xl:w-8/12 md:w-10/12   mx-auto py-20 px-6'>
          <div className='md:grid xl:grid-cols-3 md:grid-cols-2 gap-10'>
            {products.map((product) => (
              <div
                key={product.id}
                className=' shadow-lg mb-5 rounded-xl bg-white'>
                <Link href={`/product/${product.id}`}>
                  <a>
                    <Image
                      className='object-cover'
                      src={product.image.url}
                      width={500}
                      height={400}
                      layout='fill'
                    />
                  </a>
                </Link>
                <div className='p-3 text-center capitalize'>
                  <p className='font-bold text-xl text-yellow-800 font-title'>
                    {product.name}
                  </p>
                  <p className='text-lg font-barlow font-semibold text-gray-700'>
                    GH{product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Div>
    </Layout>
  );
};

export default Products;

export const getStaticProps = async () => {
  const { products } = await graphcms.request(ALL_PRODUCTS);
  return {
    props: {
      products,
    },
  };
};

const Div = styled.div`
  .wrapper {
    background: url('/img/velizar-ivanov-rXB9YjOQX8I-unsplash.jpg');
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
