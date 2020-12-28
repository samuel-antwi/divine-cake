import { useState } from 'react';
import Image from 'next/image';
import graphcms from 'graphql/client';
import { PRODUCTS } from 'graphql/queries';
import styled from 'styled-components';
import MainServices from 'components/MainServices';
import FeaturedProducts from 'components/FeaturedProducts';
import Link from 'next/link';
import SpecialCake from 'components/SpecialCake';
import Testimony from 'components/Testimony';
import AOS from 'aos';
import Layout from 'components/Layout';

export default function Home({ products, testimonies }) {
  return (
    <Layout title='Home'>
      <Div className='hero text-white bg-cover bg-center bg-no-repeat relative'>
        <div className='overlay absolute'></div>
        <div className='container'>
          <div
            data-aos='fade-up'
            data-aos-duration={2000}
            className='absolute inset-0 px-6 md:w-10/12 2xl:w-7/12 mx-auto flex items-center justify-center '>
            <div>
              <h1 className='font-title text-2xl tracking-wider md:text-7xl font-extrabold text-gray-100 mb-5'>
                The Best Cakes and Pastries
              </h1>
              <p className='md:text-2xl text-gray-300 md:mb-10 mb-5'>
                Cupcakes, custom cakes from the finest ingredients. All cakes
                are made from scratch. Our prices are wholesale prices and
                unbeatable. Get in touch with us to place your order now.
              </p>
              <Link href='/products'>
                <a className='md:text-2xl focus:outline-none font-bold hero__btn md:py-5 md:px-8 py-3 px-6 rounded-full hover:bg-yellow-900'>
                  View Our Cakes
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Div>
      <FeaturedProducts products={products} />
      <SpecialCake />
      <MainServices />
      <Testimony testimonies={testimonies} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { products, testimonies } = await graphcms.request(PRODUCTS, {
    type: 'featured-products',
  });
  return {
    props: {
      products,
      testimonies,
    },
  };
};

const Div = styled.div`
  background: url('/img/hero-bg.jpg');
  height: 70vh;
  background-attachment: fixed;

  .overlay {
    width: 100%;
    height: 70vh;
    background: rgba(0, 0, 0, 0.7);
  }

  .hero__btn {
    background: #d15732;
  }

  @media (max-width: 600px) {
    height: 400px;
    .overlay {
      height: 400px;
    }
  }
`;
