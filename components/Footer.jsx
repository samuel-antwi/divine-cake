import styled from 'styled-components';
import Link from 'next/link';
import { RiCakeFill } from 'react-icons/ri';
import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import { BsChevronUp } from 'react-icons/bs';

const Footer = ({ isTop }) => {
  const scrollToPageTop = () => {
    return window.scrollTo(0, 0);
  };

  const getCurrentYear = new Date().getFullYear();

  return (
    <Div className='relative'>
      <div className='text-white max-w-6xl mx-auto  divide-y'>
        <div className='lg:grid lg:grid-cols-6 gap-20 md:py-20 py-10'>
          <div className='col-span-2 mb-8'>
            <Link href='/'>
              <a className='logo flex items-center  mb-5 footer__logo'>
                <RiCakeFill className='mr-2' size={45} />
                <div className='flex items-center mt-5 font-extrabold md:text-2xl text-xl tracking-wide '>
                  <span className=' text-white'>DEVINE</span>
                  <span className='cake'>CAKESGH</span>
                </div>
              </a>
            </Link>
            <p className='text-gray-400 text-lg mb-5'>
              Cupcakes, custom cakes from the finest ingredients. All cakes are made from scratch.
              Our prices are wholesale prices and unbeatable.
            </p>
            <div className=' flex items-center px-4'>
              <div>
                <a
                  href='https://www.facebook.com/search/top?q=devinecakesgh'
                  target='_blank'
                  rel='noreferrer noopener'>
                  <FaFacebookF
                    className='w-8 h-8   bg-[#3A5496]   rounded-full p-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 '
                    size={20}
                  />
                </a>
              </div>
              <div className='mx-5'>
                <a
                  href='https://www.instagram.com/devinecakesgh/'
                  target='_blank'
                  rel='noreferrer noopener'>
                  <FaInstagram
                    className='w-8 h-8 bg-[#DD4168] rounded-full p-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
                    size={20}
                  />
                </a>
              </div>
              <div>
                <a href='https://wa.me/233269822198' target='_blank' rel='noreferrer noopener'>
                  <FaWhatsapp
                    className='w-8 h-8 bg-[#4AC758] rounded-full p-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
                    size={20}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='col-span-2 mb-8'>
            <h1 className='font-bold md:text-2xl text-xl mb-5'>Openeing Hours</h1>
            <div className=' font-bold text-gray-400'>
              <p>Our work timings:</p>
              <p>Mon - Fri: 8 am - 6pm</p>
              <p>Sat - Sun: 9am - 8pm</p>
              <p>Bank holidays: 8am - 6pm</p>
            </div>
          </div>
          <div className='col-span-2 mb-8 text-gray-400   font-bold'>
            <h1 className='font-bold md:text-2xl text-white text-xl mb-5'>Contact Info</h1>
            <div className='flex items-center mb-2 '>
              <a href='tel: +233246562686'>(+233) 269822198</a>
            </div>
            <div className='flex items-center text-gray-400'>
              <a href='mailto: info@devinecake.com'>info@devinecakesgh.com</a>
            </div>
            <p>Adenta Frafraha, near Ampomah Estate, Accra</p>
          </div>
        </div>
        <div className='border border-gray-600 w-full'></div>
        <div className='py-10 text-center text-gray-300 text-sm'>
          <p className='tracking-wider'>
            &copy; {getCurrentYear} Devinecakesgh. All rights reserved.
          </p>
        </div>
      </div>
      {isTop && (
        <BsChevronUp
          onClick={scrollToPageTop}
          className='fixed cursor-pointer right-5 bottom-5 w-10 p-3 h-10 rounded-full text-white bg-yellow-700  '
        />
      )}
    </Div>
  );
};

export default Footer;

const Div = styled.div`
  background: #302b27;
  .footer__logo,
  .cake {
    color: #de5932;
  }
  h1 {
    font-family: 'Playfair Display', serif;
  }
`;
