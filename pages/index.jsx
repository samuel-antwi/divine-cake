import { useState } from 'react';
import Image from 'next/image';
import Layout from 'components/Layout';
import grapgcms from 'graphql/client';
import { HERO_PAGE } from 'graphql/queries';
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
import styled from 'styled-components';
import MainServices from 'components/MainServices';

export default function Home({ page }) {
  const [heroImage, setHeroImage] = useState('');
  const { title, description, image } = page;

  return (
    <Layout>
      <Div
        style={{
          backgroundImage: `url(${image.url}) `,
        }}
        className='hero text-white bg-cover bg-center bg-no-repeat relative'>
        <div className='overlay absolute'></div>
        <div className='container'>
          <div className='absolute md:inset-0 p-4 flex items-center justify-center'>
            <div className='max-h-full max-w-4xl '>
              <h1 className='title text-2xl tracking-wider md:text-7xl font-extrabold text-gray-100 mb-5'>
                {title}
              </h1>
              <p className='md:text-2xl md:mb-10 mb-5'>{description}</p>
              <button className='md:text-2xl font-bold bg-yellow-700 md:py-4 px-8 py-2 rounded-full hover:bg-yellow-900'>
                View Our Cakes
              </button>
            </div>
          </div>
        </div>
      </Div>
      <MainServices />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { page } = await grapgcms.request(HERO_PAGE, { slug: 'home-page' });
  return {
    props: {
      page,
    },
  };
};

const Div = styled.div`
  height: 70vh;
  background-attachment: fixed;
  .title {
    font-family: 'Playfair Display', serif;
  }

  .overlay {
    width: 100%;
    height: 70vh;
    background: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 600px) {
    height: 50vh;
    .overlay {
      height: 50vh;
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
