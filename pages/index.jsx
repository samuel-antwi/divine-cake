import { useState } from 'react';
import Image from 'next/image';
import Layout from 'components/Layout';
import grapgcms from 'graphql/client';
import { HERO_PAGE } from 'graphql/queries';
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
import styled from 'styled-components';

export default function Home({ page }) {
  const [heroImage, setHeroImage] = useState('');
  const { title, description, image } = page;

  return (
    <Layout>
      <Div
        style={{
          backgroundImage: `url(${image.url}) `,
          height: '70vh',
        }}
        className='hero text-white bg-cover bg-center bg-no-repeat relative'>
        <div className='overlay absolute'></div>
        <div className='container'>
          <div className='absolute inset-0 p-4 flex items-center  justify-center'>
            <div className='max-h-full '>
              <h1 className='title md:text-7xl font-extrabold text-gray-100'>
                {title}
              </h1>
            </div>
          </div>
        </div>
      </Div>
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
  .title {
    font-family: 'DM Serif Display', serif;
  }

  .overlay {
    width: 100%;
    height: 70vh;
    background: rgba(0, 0, 0, 0.5);
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
