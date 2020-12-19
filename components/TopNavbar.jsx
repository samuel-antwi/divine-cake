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
      <div className='container'>
        <div className='md:flex md:justify-between'>
          <div className='flex  mb-5 md:mb-0'>
            <div className='flex items-center mr-3'>
              <ImPhone className='mr-2' />
              <p className='font-bold'>0243562686</p>
            </div>
            <div className='flex items-center'>
              <FaRegEnvelope className='mr-2' />
              <p className='font-bold'>divinecake@gmail.com</p>
            </div>
          </div>
          <div className=' flex items-center px-4'>
            <div>
              <a href='/'>
                <FaFacebookSquare
                  className='w-10 h-10 social__links  rounded-full p-2'
                  size={20}
                />
              </a>
            </div>
            <div className='mx-5'>
              <a href='/'>
                <FaInstagram
                  className='w-10 h-10 social__links  rounded-full p-2'
                  size={20}
                />
              </a>
            </div>
            <div>
              <a href='/'>
                <FaTwitter
                  className='w-10 h-10 social__links  rounded-full p-2'
                  size={20}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
};

export default TopNavbar;

const Div = styled.div`
  background: #4c2a2c;
  .social__links {
    background: #de5932;
  }
`;