import Layout from 'components/Layout';
import styled from 'styled-components';
import { useForm } from '@formspree/react';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [state, handleSubmit] = useForm('contactForm');

  const location = useRouter();

  if (state.succeeded) {
    location.push('/form-success');
  }

  return (
    <Layout title='Contact Us'>
      <Div>
        <div className='wrapper '>
          <div className='overlay'>
            <div className='container'>
              <p className='font-title md:text-5xl text-3xl font-bold tracking-wide text-white py-10 text-center'>
                Contact Us
              </p>
            </div>
          </div>
        </div>
        <div className='mb-20 -mt-40'>
          <div className='xl:w-7/12 md:w-11/12 px-6 md:px-0 shadow-xl mx-auto bg-white '>
            <div className='md:grid md:grid-cols-3 gap-10'>
              <div className='col-span-2 md:p-10'>
                <h1 className='font-title md:text-5xl text-2xl mb-5 font-bold text-yellow-900'>
                  Get in touch
                </h1>
                <form
                  action='https://formspree.io/p/1578905603080715524/f/signupForm'
                  method='POST'
                  onSubmit={handleSubmit}
                  className='font-mulish'>
                  <div className='mb-5'>
                    <label className='font-thin'>Your Name (required)</label>
                    <div>
                      <input
                        name='name'
                        className='w-full border border-gray-300 hover:border-gray-600 p-3 focus:outline-none focus:border-blue-500'
                        type='text'
                      />
                    </div>
                  </div>
                  <div className='mb-5'>
                    <label className='font-thin'>Your Email (required)</label>
                    <div>
                      <input
                        name='email'
                        className='w-full border border-gray-300 hover:border-gray-600 p-3 focus:outline-none focus:border-blue-500'
                        type='text'
                      />
                    </div>
                  </div>
                  <div className='mb-5'>
                    <label className='font-thin'>Your Message (required)</label>
                    <div>
                      <textarea
                        className='w-full border border-gray-300 hover:border-gray-600 p-3 focus:outline-none focus:border-blue-500'
                        name='message'
                        id=''
                        cols='30'
                        rows='6'></textarea>
                    </div>
                  </div>
                  <button
                    disabled={state.submitting}
                    className='bg-gray-900 md:w-4/12 text-gray-200 py-3 px-3 mb-5 w-full focus:outline-none hover:bg-form'>
                    {state.submitting ? 'Loading' : 'Send'}
                  </button>
                </form>
              </div>
              <div className='col-span-1 bg-form text-gray-200 py-10 px-7'>
                <div className='mb-10'>
                  <h1 className='mb-5 text-2xl font-mulish'>Address</h1>
                  <p> 5238 Avenue Drive</p>
                  <p>Accra</p>
                </div>
                <div className='mb-10'>
                  <h1 className='mb-5 text-2xl font-mulish'>Phone</h1>
                  <p>(+233)269822198</p>
                </div>
                <div>
                  <h1 className='mb-5 text-2xl font-mulish'>Email</h1>
                  <p>info@devinecakesgh.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Div>
    </Layout>
  );
};

export default Contact;

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
