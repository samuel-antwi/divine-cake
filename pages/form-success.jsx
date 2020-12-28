import Layout from 'components/Layout';
import React from 'react';
import styled from 'styled-components';

const FormSuccess = () => {
  return (
    <Layout title='Success'>
      <Div>
        <div className='wrapper '>
          <div className='overlay'>
            <div className='container'>
              <p className='font-title md:text-5xl text-3xl font-bold tracking-wide text-white py-10 text-center'>
                Thank you
              </p>
            </div>
          </div>
        </div>
        <div className='-mt-40 mb-20'>
          <div className='lg:w-7/12 px-6 bg-gray-900 text-yellow-50 h-96 mx-auto '>
            <div className='py-10 text-center'>
              <p className='mb-5 md:text-4xl text-2xl font-mulish'>
                Thank you for your message.
              </p>
              <p className='text-xl text-gray-400'>
                One of our staff will be in touch very soon!
              </p>
            </div>
          </div>
        </div>
      </Div>
    </Layout>
  );
};

export default FormSuccess;

const Div = styled.div`
  .wrapper {
    background: url('/img/velizar-ivanov-rXB9YjOQX8I-unsplash.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    min-height: 350px;
  }

  .overlay {
    min-height: 350px;
    background: rgba(0, 0, 0, 0.7);
  }
`;
