import grapgcms from 'graphql/client';
import styled from 'styled-components';
import { FaBirthdayCake } from 'react-icons/fa';
import { GiCakeSlice } from 'react-icons/gi';
import { MdCake } from 'react-icons/md';

export default function MainServices({ services }) {
  return (
    <Div>
      <div className='overlay '>
        <div className='md:py-20 flex items-center justify-center '>
          <div className='2xl:w-8/12 w-11/12 md:w-10/12'>
            <h1 className='text-white md:text-5xl text-2xl py-5 2xl:text-7xl md:mb-10 mb-5 font-bold'>
              Our Main Services
            </h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 text-white gap-5'>
              <div
                data-aos='flip-right'
                data-aos-duration={2000}
                className='col-span-1 border border-white p-5 '>
                <h1 className='md:text-2xl text-xl font-bold mb-5'>
                  Celebration Cakes
                </h1>
                <FaBirthdayCake size={60} className='md:mb-10 mb-5' />
                <p className='md:text-lg'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  exercitationem nam ad eum, iure ab ratione expedita minima?
                  Quaerat esse molestias nemo velit, eligendi, architecto ipsum.
                </p>
              </div>
              <div
                data-aos='flip-left'
                data-aos-duration={2000}
                className='col-span-1 border border-white p-5 '>
                <h1 className='md:text-2xl text-xl font-bold mb-5'>Pastries</h1>
                <GiCakeSlice size={60} className='md:mb-10 mb-5' />
                <p className='md:text-lg'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  exercitationem nam ad eum, iure ab ratione expedita minima?
                  Quaerat esse molestias nemo velit, eligendi, architecto ipsum.
                </p>
              </div>
              <div
                data-aos='flip-right'
                data-aos-duration={2000}
                className='col-span-1 border border-white p-5 '>
                <h1 className='md:text-2xl text-xl font-bold mb-5'>
                  Party Cakes
                </h1>
                <MdCake size={60} className='md:mb-10 ' />
                <p className='md:text-lg'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  exercitationem nam ad eum, iure ab ratione expedita minima?
                  Quaerat esse molestias nemo velit, eligendi, architecto ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  background: url('/img/tarhini.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 800px;
  font-family: 'Playfair Display', serif;
  .overlay {
    width: 100%;
    min-height: 800px;
    background: rgba(209, 87, 50, 0.9);
  }

  @media (max-width: 768px) {
    height: 1100px;
    .overlay {
      height: 1100px;
    }
  }
`;

{
  /* <div className='col-span-1 border border-white p-5'>
                <h1 className='md:text-2xl text-xl font-bold mb-5'>
                  Party Cakes
                </h1>
                <p className='md:text-lg'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  exercitationem nam ad eum, iure ab ratione expedita minima?
                  Quaerat esse molestias nemo velit, eligendi, architecto ipsum.
                </p>
              </div>
              <div className='col-span-1 border border-white p-5'>
                <h1 className='md:text-2xl text-xl font-bold mb-5'>Pastries</h1>
                <p className='md:text-lg'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  exercitationem nam ad eum, iure ab ratione expedita minima?
                  Quaerat esse molestias nemo velit, eligendi, architecto ipsum.
                </p>
              </div> */
}
