import styled from 'styled-components';
import Link from 'next/link';
import { RiCakeFill } from 'react-icons/ri';
import SocialMediaIcons from './TopNavbar';
import { GrMailOption } from 'react-icons/gr';
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
  FaRegEnvelope,
  FaFacebookF,
} from 'react-icons/fa';
import { ImPhone } from 'react-icons/im';
import { BsChevronUp } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    const unSubscribe = window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
      return () => unSubscribe();
    });
  }, []);

  const scrollToPageTop = () => {
    return window.scrollTo(0, 0);
  };

  return (
    <Div className='relative'>
      <div className='text-white container  divide-y'>
        <div className='lg:grid lg:grid-cols-5 gap-20 md:py-20 py-10'>
          <div className='col-span-2 mb-8'>
            <Link href='/'>
              <a className='logo flex items-center  mb-5 footer__logo'>
                <RiCakeFill className='mr-2' size={60} />
                <div className='flex items-center font-extrabold md:text-4xl text-xl tracking-wide '>
                  <span className=' text-white'>DEVINE</span>
                  <span className='cake'>CAKESGH</span>
                </div>
              </a>
            </Link>
            <p className='text-gray-300 text-lg mb-5'>
              Cupcakes, custom cakes from the finest ingredients. All cakes are
              made from scratch. Our prices are wholesale prices and unbeatable.
            </p>
            <div className=' flex items-center px-4'>
              <div>
                <a
                  href='https://www.facebook.com/search/top?q=devinecakesgh'
                  target='_blank'
                  rel='noreferrer noopener'>
                  <FaFacebookF
                    className='w-10 h-10 border-white border   rounded-full p-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 '
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
                    className='w-10 h-10  border border-white  rounded-full p-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
                    size={20}
                  />
                </a>
              </div>
              <div>
                <a
                  href='https://wa.me/233269822198'
                  target='_blank'
                  rel='noreferrer noopener'>
                  <FaWhatsapp
                    className='w-10 h-10   border-white border   rounded-full p-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
                    size={20}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='col-span-1 mb-8'>
            <h1 className='font-bold md:text-3xl text-xl mb-5'>
              Openeing Hours
            </h1>
            <div className='text-lg font-bold text-gray-300'>
              <p>Our work timings:</p>
              <p>Mon - Fri: 8 am - 7pm</p>
              <p>Sat: 9am - 4pm</p>
              <p>Sun: Closed</p>
            </div>
          </div>
          <div className='col-span-1 mb-8 text-gray-300 text-lg font-bold'>
            <h1 className='font-bold md:text-3xl text-white text-xl mb-5'>
              Contact Info
            </h1>
            <div className='flex items-center mb-2 '>
              <a href='tel: +233246562686'>(+233) 269822198</a>
            </div>
            <div className='flex items-center text-gray-300'>
              <a href='mailto: info@devinecake.com'>info@devinecakesgh.com</a>
            </div>
            <p>Accra</p>
          </div>
        </div>
        <div className='border border-gray-600 w-full'></div>
        <div className='py-10 text-center text-gray-500 text-lg'>
          <p>&copy; Copyright 2020 devinecakesgh</p>
        </div>
      </div>
      {isTop && (
        <BsChevronUp
          onClick={scrollToPageTop}
          className='fixed cursor-pointer right-5 bottom-5 w-12 p-3 h-12 rounded-full text-white bg-yellow-700  '
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
