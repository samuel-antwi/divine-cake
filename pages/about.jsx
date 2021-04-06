import Layout from 'components/Layout';
import graphcms from 'graphql/client';
import { ABOUT_PAGE } from 'graphql/queries';
import styled from 'styled-components';
import Image from 'next/image';
import Testimony from 'components/Testimony';
import ReactMarkdown from 'react-markdown';
import { gfm } from 'remark-gfm';

const About = ({ about, testimonies }) => {
  const { images, title, missionTitle, description, missionStatement } = about;
  return (
    <Layout title='About'>
      <Div>
        <div className='relative wrapper'>
          <div className='overlay'>
            <div className='container'>
              <p className='font-title md:text-5xl text-3xl font-bold tracking-wide text-white absolute flex justify-center items-center inset-0'>
                About us
              </p>
            </div>
          </div>
        </div>
        <div className='py-10 w-full md:w-10/12 xl:w-7/12 mx-auto '>
          <h1 className='capitalize font-title md:text-5xl text-3xl font-bold text-yellow-900 text-center mb-10'>
            {title}
          </h1>
          <p className='text-lg text-gray-700 mb-10 px-6 md:px-0'>{description.text}</p>
          <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {images.map((image) => (
              <div key={image.id} className='mb-5 col-span-1'>
                <Image src={image.url} width={500} height={350} layout='responsive' />
              </div>
            ))}
          </div>
          <div
            data-aos='zoom-in'
            data-aos-transition-duration={2000}
            className='py-10 bg-gray-900 text-gray-300'>
            <div className='md:grid md:grid-cols-3 gap-10 px-6'>
              <div className='col-span-1 mb-5'>
                <h1 className='font-title md:text-4xl text-2xl mb-5 tracking-wide text-yellow-900 font-bold capitalize'>
                  Our Services
                </h1>
                <div className='w-20 h-1 bg-gray-600'></div>
              </div>
              <div className='col-span-2'>
                <p>
                  Of course, even the most delicious cake can become sad and stale if it’s left too
                  long on the bakery shelf, which is why we take pride in our same-day delivery
                  system. Our bespoke special occasion and celebration cakes are made to order
                  within just 30 minutes, 7 days a week (till 8pm); within a few hours they are
                  hand-delivered to your doorstep, or as a same-day gift. For a personalised,
                  handmade cake which is delivered within hours of coming out of the oven, our
                  unique services can’t be beat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Div>
      <Testimony testimonies={testimonies} />
    </Layout>
  );
};

export default About;

export const getStaticProps = async () => {
  const { about, testimonies } = await graphcms.request(ABOUT_PAGE, {
    slug: 'about-page',
  });
  return {
    props: {
      about,
      testimonies,
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
    min-height: 300px;
  }

  .overlay {
    min-height: 300px;
    background: rgba(0, 0, 0, 0.7);
  }
`;
