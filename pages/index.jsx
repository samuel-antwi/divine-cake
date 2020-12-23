import { useState } from 'react';
import Image from 'next/image';
import Layout from 'components/Layout';
import graphcms from 'graphql/client';
import { PRODUCTS } from 'graphql/queries';
import styled from 'styled-components';
import MainServices from 'components/MainServices';
import FeaturedProducts from 'components/FeaturedProducts';
import Link from 'next/link';
import SpecialCake from 'components/SpecialCake';
import Testimony from 'components/Testimony';
import Footer from 'components/Footer';
import AOS from 'aos';

export default function Home({ products, testimonies }) {
  return (
    <Layout>
      <Div className='hero text-white bg-cover bg-center bg-no-repeat relative'>
        <div className='overlay absolute'></div>
        <div className='container'>
          <div
            data-aos='fade-up'
            data-aos-duration={2000}
            className='absolute inset-0 px-6 md:w-10/12 2xl:w-7/12 mx-auto flex items-center justify-center '>
            <div>
              <h1 className='title text-2xl tracking-wider md:text-7xl font-extrabold text-gray-100 mb-5'>
                The Best Cakes and Pastries
              </h1>
              <p className='md:text-2xl text-gray-300 md:mb-10 mb-5'>
                Are you looking for one of the best cakes to celebrate your
                anniversary? You have come to the right place. With
                Divinecakesgh, we make sure the cake you cut today leaves you a
                special memories just as the occasion you are celebrating.
              </p>
              <button className='md:text-2xl font-bold hero__btn md:py-4 px-8 py-2 rounded-full hover:bg-yellow-900'>
                View Our Cakes
              </button>
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
  const { products, testimonies } = await graphcms.request(PRODUCTS);
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
  .title {
    font-family: 'Playfair Display', serif;
  }

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

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await authUser.signup(email, password);
//     console.log('sign up successfully');
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <p>Sign up</p>
//       <input
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         type='text'
//         placeholder='Enter email'
//       />
//       <input
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         type='password'
//         placeholder='Enter email'
//       />
//       <button type='submit'>Sign up</button>
//     </form>
//   );
// };

// const SignIn = ({ signin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     await signin(email, password);
//   };

//   return (
//     <form onSubmit={handleSignIn}>
//       <p>Sign In</p>
//       <input
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         type='text'
//         placeholder='Enter email'
//       />
//       <input
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         type='password'
//         placeholder='Enter email'
//       />
//       <button type='submit'>Log In</button>
//     </form>
//   );
// };
