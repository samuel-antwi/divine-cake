import grapgcms from 'graphql/client';
import styled from 'styled-components';
import { FaBirthdayCake } from 'react-icons/fa';
import { GiCakeSlice } from 'react-icons/gi';
import { MdCake } from 'react-icons/md';

export default function MainServices({ services }) {
  return (
    <Div>
      <div className='overlay absolute '></div>
      <div className='container'>
        <div className='md:pt-20 absolute inset-x-0 flex items-center justify-center '>
          <div className='2xl:w-8/12 w-11/12 md:w-10/12'>
            <h1 className='text-white md:text-5xl text-2xl py-5 2xl:text-7xl md:mb-10 mb-5 font-bold'>
              Our Main Services
            </h1>
            <div className='grid lg:grid-cols-3 text-white gap-5'>
              {services.map((service) => (
                <div
                  key={service.title}
                  className='col-span-1 border border-white p-5'>
                  {service.title === 'Celebration Cakes' && (
                    <FaBirthdayCake size={60} className='md:mb-10 mb-5' />
                  )}
                  {service.title === 'Pastries' && (
                    <GiCakeSlice size={60} className='md:mb-10 mb-5' />
                  )}
                  {service.title === 'Party Cakes' && (
                    <MdCake size={60} className='md:mb-10 mb-5' />
                  )}
                  <h1 className='md:text-2xl text-xl font-bold mb-5'>
                    {service.title}
                  </h1>
                  <p className='md:text-lg'>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  position: relative;
  background: url('/img/tarhini.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 80vh;
  font-family: 'Playfair Display', serif;
  .overlay {
    width: 100%;
    height: 80vh;
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
