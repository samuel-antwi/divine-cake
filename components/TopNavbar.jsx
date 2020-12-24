import { ImPhone } from 'react-icons/im';
import { GrMailOption } from 'react-icons/gr';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaRegEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

const TopNavbar = () => {
  return (
    <Div className='text-gray-100 py-5'>
      <div className='md:w-10/12 mx-auto px-2'>
        <div className='md:flex md:justify-between '>
          <div className='flex text-xs xs:text-base md:text-lg mb-5 md:mb-0 justify-center justify-items-center inset-0'>
            <div className='flex items-center mr-3'>
              <ImPhone className='mr-2' />
              <a className='font-bold' href='tel: 0243562686'>
                0269822198
              </a>
            </div>
            <div className='flex items-center'>
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
      <div className='flex items-center px-4 justify-center  justify-items-center'>
        <div>
          <a
            data-tip='Facebook'
            href='https://www.facebook.com/search/top?q=devinecakesgh'
            target='_blank'
            rel='noreferrer noopener'>
            <FaFacebookSquare className='xs:w-10 xs:h-10 w-8 h-8 social__links  rounded-full p-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ' />
          </a>
        </div>
        <div className='mx-5'>
          <a
            data-tip='Instagram'
            href='https://www.instagram.com/devinecakesgh/'
            target='_blank'
            rel='noreferrer noopener'>
            <FaInstagram className='xs:w-10 xs:h-10 w-8 h-8 social__links  rounded-full p-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105' />
          </a>
        </div>
        <div>
          <a data-tip='WhatsApp' href='https://wa.me/233269822198'>
            <FaWhatsapp className='xs:w-10 xs:h-10 w-8 h-8 social__links  rounded-full p-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105' />
          </a>
        </div>
      </div>
      <ReactTooltip />
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
