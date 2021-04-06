import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import SideNav from './SideNav';
import { RiCakeFill } from 'react-icons/ri';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useRouter();
  const home = pathname === '/';
  const about = pathname === '/about';
  const cakes = pathname === '/cakes';
  const contact = pathname === '/contact';

  return (
    <>
      {isOpen && <SideNav setOpen={setOpen} isOpen={isOpen} />}
      <Div className='bg-white text-gray-800 md:pt-32 pt-36 py-6'>
        <div className='md:w-10/12 mx-auto px-4'>
          <div className='flex justify-between items-center'>
            <Link href='/'>
              <a className='logo flex items-center  text-yellow-700 font-extrabold tracking-wide'>
                <RiCakeFill className='text-yellow-700  text-4xl' />
                <div className='flex items-center md:text-3xl ml-2 mt-2 text-lg'>
                  <span className='text-gray-500 font-mulish'>Devine</span>
                  <span className='cake font-mulish'>cakesgh</span>
                </div>
              </a>
            </Link>
            <div className='nav__links hidden md:block font-title'>
              <Link href='/'>
                <a
                  className={`font-bold md:text-xl hover:text-yellow-600 ${
                    home ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-700'
                  }`}>
                  Home
                </a>
              </Link>
              <Link href='/about'>
                <a
                  className={`font-bold md:text-xl hover:text-yellow-600  ${
                    about ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-700'
                  } `}>
                  About
                </a>
              </Link>
              <Link href='/cakes'>
                <a
                  className={`font-bold md:text-xl hover:text-yellow-600  ${
                    cakes ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-700'
                  }`}>
                  Cakes
                </a>
              </Link>
              <Link href='/contact'>
                <a
                  className={`font-bold md:text-xl hover:text-yellow-600  ${
                    contact ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-700'
                  } `}>
                  Contact
                </a>
              </Link>
            </div>
            <div className=' md:hidden'>
              <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} size={25} />
            </div>
          </div>
        </div>
      </Div>
    </>
  );
};

export default Navbar;

const Div = styled.div`
  .nav__links a {
    margin: 0 20px;
  }
`;
