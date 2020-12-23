import { ImPhone } from 'react-icons/im';
import { GrMailOption } from 'react-icons/gr';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaRegEnvelope,
} from 'react-icons/fa';
import styled from 'styled-components';

const TopNavbar = () => {
  return (
    <Div className='text-gray-100 py-5'>
      <div className='container '>
        <div className='md:flex md:justify-between '>
          <div className='flex  mb-5 md:mb-0'>
            <div className='flex items-center mr-3'>
              <ImPhone className='mr-2' />
              <a className='font-bold' href='tel: 0243562686'>
                0269822198
              </a>
            </div>
            <div className='hidden md:flex items-center'>
              <FaRegEnvelope className='mr-2' />
              <a className='font-bold' href='mailto: divinecake@gmail.com'>
                info@devinecakesgh.com
              </a>
            </div>
          </div>
          <SocialMediaIcons />
        </div>
      </div>
    </Div>
  );
};

export default TopNavbar;

export const SocialMediaIcons = () => {
  return (
    <SocilaMediaStyles>
      <div className=' flex items-center px-4'>
        <div>
          <a href='/'>
            <FaFacebookSquare
              className='w-8 h-8 social__links  rounded-full p-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 '
              size={20}
            />
          </a>
        </div>
        <div className='mx-5'>
          <a href='/'>
            <FaInstagram
              className='w-8 h-8 social__links  rounded-full p-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
              size={20}
            />
          </a>
        </div>
        <div>
          <a href='/'>
            <FaTwitter
              className='w-8 h-8 social__links  rounded-full p-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
              size={20}
            />
          </a>
        </div>
      </div>
    </SocilaMediaStyles>
  );
};

const SocilaMediaStyles = styled.div`
  .social__links {
    background: #de5932;
  }
`;

const Div = styled.div`
  background: #4c2a2c;
`;
