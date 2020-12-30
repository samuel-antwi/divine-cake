import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { RiCakeFill } from 'react-icons/ri';

const SideNav = ({ setOpen, isOpen }) => {
  const { pathname } = useRouter();
  const home = pathname === '/';
  const about = pathname === '/about';
  const products = pathname === '/products';
  const contact = pathname === '/contact';
  return (
    <Div>
      <motion.div
        className='toggle__backround__opacity w-full min-h-screen z-20 '
        initial={{ opacity: 0, x: -400 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}>
        <motion.div
          initial={{ opacity: 0, x: -800 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='nav__links w-10/12 bg-white  min-h-screen'>
          <div className='flex items-center p-4 justify-between'>
            <Link href='/'>
              <a className='logo flex items-center flex-col text-yellow-700 font-extrabold md:text-4xl text-xl tracking-wide'>
                <RiCakeFill className='text-yellow-700 md:text-7xl text-4xl' />
                <div className='flex items-center'>
                  <span className='text-gray-500 mr-2'>DEVINE</span>{' '}
                  <span className='cake'>CAKE</span>
                </div>
              </a>
            </Link>
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              duration={0.8}
              size={25}
            />
          </div>
          <hr />
          <div onClick={() => setOpen()} className='flex flex-col p-5'>
            <Link href='/'>
              <a
                className={`font-bold text-xl mb-10 hover:text-yellow-600 ${
                  home ? 'text-yellow-600' : 'text-gray-700'
                }`}>
                Home
              </a>
            </Link>
            <Link href='/about'>
              <a
                className={`font-bold text-xl mb-10 hover:text-yellow-600  ${
                  about ? 'text-yellow-600' : 'text-gray-700'
                } `}>
                About
              </a>
            </Link>
            <Link href='/products'>
              <a
                className={`font-bold text-xl mb-10 hover:text-yellow-600  ${
                  products ? 'text-yellow-600' : 'text-gray-700'
                }`}>
                Products
              </a>
            </Link>
            <Link href='/contact'>
              <a
                className={`font-bold mb-10 text-xl hover:text-yellow-600  ${
                  contact ? 'text-yellow-600' : 'text-gray-700'
                } `}>
                Contact
              </a>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </Div>
  );
};

export default SideNav;

const Div = styled.div`
  .toggle__backround__opacity {
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
  }
`;
