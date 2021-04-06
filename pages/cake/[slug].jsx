import Layout from 'components/Layout';
import graphcms from 'graphql/client';
import { GET_CAKE, HOME_PAGE } from 'graphql/queries';
import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { BsChevronLeft } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { FaWhatsapp } from 'react-icons/fa';

const Product = ({ cake }) => {
  const [sixInch, setSixInche] = useState(false);
  const [threeInch, setThreeInche] = useState(true);

  const { images, name, price, description } = cake;

  const location = useRouter();

  const showThreeInch = () => {
    setThreeInche(true);
    setSixInche(false);
  };

  const showSixInch = () => {
    setThreeInche(false);
    setSixInche(true);
  };

  return (
    <Layout title='Cake'>
      <Div>
        <div style={{ backgroundImage: `url(${images[0].url})` }} className='relative wrapper'>
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
              onClick={() => location.push('/cakes')}
              className='my-5 inline-flex items-center focus:outline-none  border border-yellow-900 px-3 py-1 text-gray-500'>
              <BsChevronLeft />
              <span>All cakes</span>
            </button>
            <div className='md:grid md:grid-cols-2 gap-10'>
              <Image className='object-cover' src={images[0].url} width={500} height={500} />
              <div className='py-10'>
                <h1 className='font-title mb-6 md:text-4xl capitalize text-2xl font-semibold text-yellow-900'>
                  {name}
                </h1>
                <div className='flex items-center mb-7 space-x-3'>
                  <button
                    onClick={showThreeInch}
                    className={`${
                      threeInch && 'border-red-600'
                    } font-semibold text-gray-600 bg-gray-200 border p-1 focus:outline-none focus:border-red-500 focus:bg-white hover:border-gray-500 hover:text-black`}>
                    3 Inch
                  </button>
                  <button
                    onClick={showSixInch}
                    className='font-semibold text-gray-600 bg-gray-200 border p-1 focus:outline-none focus:border-red-500 focus:bg-white hover:border-gray-500 hover:text-black'>
                    6 Inch
                  </button>
                </div>
                {threeInch && (
                  <div className='flex items-center'>
                    <p className='font-barlow mb-7 mr-5 text-xl line-through text-red-500 font-semibold'>
                      GH90
                    </p>
                    <p className='font-barlow mb-7 md:text-3xl text-blue-600 text-xl font-semibold'>
                      GH60
                    </p>
                  </div>
                )}
                {sixInch && (
                  <div className='flex items-center'>
                    <p className='font-barlow mb-7 mr-5 text-xl line-through text-red-500 font-semibold'>
                      GH150
                    </p>
                    <p className='font-barlow mb-7 md:text-3xl text-blue-600 text-xl font-semibold'>
                      GH{price}
                    </p>
                  </div>
                )}
                <div>
                  <h1 className='text-2xl font-title font-semibold mb-3 text-yellow-900'>
                    Description
                  </h1>
                  <p className=' text-xl text-gray-600 font-mulish'>{description}</p>
                  <div className='max-w-xs'>
                    <a
                      href='https://wa.me/233269822198'
                      target='_blank'
                      rel='noreferrer noopener'
                      className='mt-10 border border-gray-900 hover:bg-gray-200 rounded py-2 flex items-center justify-between px-5'>
                      Order on WhatsApp
                      <FaWhatsapp
                        className='w-8 h-8 bg-[#4AC758] text-gray-50 rounded-full p-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
                        size={20}
                      />
                    </a>
                  </div>
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

export const getStaticPaths = async () => {
  const { cakes } = await graphcms.request(HOME_PAGE);
  return {
    paths: cakes.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { cake } = await graphcms.request(GET_CAKE, {
    slug: params.slug,
  });
  return {
    props: {
      cake,
    },
  };
};

const Div = styled.div`
  .wrapper {
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
