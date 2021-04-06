import { ImPhone } from 'react-icons/im';
import { FaInstagram, FaRegEnvelope, FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

const TopNavbar = () => {
  return (
    <div className='text-gray-100 md:py-8 py-6 bg-gray-900 fixed w-full z-20'>
      <div className='md:w-10/12 mx-auto px-2'>
        <div className='md:flex md:justify-between '>
          <div className='flex text-xs xs:text-base md:text-lg mb-5 md:mb-0 justify-center justify-items-center inset-0 text-gray-300'>
            <div className='flex  items-center mr-3'>
              <ImPhone className='mr-2' />
              <a className='font-bold hidden md:block' href='tel: +233269822198'>
                (+233) 269822198
              </a>
              <a className='font-bold md:hidden' href='tel: 0243562686'>
                0269822198
              </a>
            </div>
            <div className='flex items-center'>
              <FaRegEnvelope className='mr-2' />
              <a className='font-bold' href='mailto: info@devinecakeshg.com'>
                info@devinecakesgh.com
              </a>
            </div>
          </div>
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;

export const SocialMediaIcons = () => {
  return (
    <SocilaMediaStyles>
      <div className='flex items-center px-4 justify-center  justify-items-center'>
        <div>
          <a
            // data-tip='Facebook'
            href='https://www.facebook.com/search/top?q=devinecakesgh'
            target='_blank'
            rel='noreferrer noopener'>
            <FaFacebookF className='xs:w-10 xs:h-10 w-8 h-8 bg-[#395497] rounded-full p-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ' />
          </a>
        </div>
        <div className='mx-5'>
          <a
            // data-tip='Instagram'
            href='https://www.instagram.com/devinecakesgh/'
            target='_blank'
            rel='noreferrer noopener'>
            <FaInstagram className='xs:w-10 xs:h-10 w-8 h-8 bg-[#DD4168] rounded-full p-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105' />
          </a>
        </div>
        <div>
          <a
            // data-tip='WhatsApp'
            href='https://wa.me/233269822198'
            target='_blank'
            rel='noreferrer noopener'>
            <FaWhatsapp className='xs:w-10 xs:h-10 w-8 h-8 bg-[#49C858] rounded-full p-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105' />
          </a>
        </div>
      </div>
      {/* <ReactTooltip /> */}
    </SocilaMediaStyles>
  );
};

const SocilaMediaStyles = styled.div`
  .social__links {
    background: #de5932;
  }
`;
