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
  const products = pathname === '/products';
  const contact = pathname === '/contact';

  return (
    <>
      {isOpen && <SideNav setOpen={setOpen} isOpen={isOpen} />}
      <Div className='bg-white text-gray-800 py-6 '>
        <div className='md:w-10/12 mx-auto px-4'>
          <div className='flex justify-between items-center'>
            <Link href='/'>
              <a className='logo flex items-center flex-col text-yellow-700 font-extrabold md:text-4xl tracking-wide'>
                <RiCakeFill className='text-yellow-700 md:text-7xl text-4xl' />
                <div className='flex items-center'>
                  <span className='text-gray-500'>DEVINE</span>
                  <span className='cake'>CAKESGH</span>
                </div>
              </a>
            </Link>
            <div className='nav__links hidden md:block font-title'>
              <Link href='/'>
                <a
                  className={`font-bold md:text-xl hover:text-yellow-600 ${
                    home
                      ? 'text-yellow-600 border-b-2 border-yellow-600'
                      : 'text-gray-700'
                  }`}>
                  Home
                </a>
              </Link>
              <Link href='/about'>
                <a
                  className={`font-bold md:text-xl hover:text-yellow-600  ${
                    about
                      ? 'text-yellow-600 border-b-2 border-yellow-600'
                      : 'text-gray-700'
                  } `}>
                  About
                </a>
              </Link>
              <Link href='/products'>
                <a
                  className={`font-bold md:text-xl hover:text-yellow-600  ${
                    products
                      ? 'text-yellow-600 border-b-2 border-yellow-600'
                      : 'text-gray-700'
                  }`}>
                  Products
                </a>
              </Link>
              <Link href='/contact'>
                <a
                  className={`font-bold md:text-xl hover:text-yellow-600  ${
                    contact
                      ? 'text-yellow-600 border-b-2 border-yellow-600'
                      : 'text-gray-700'
                  } `}>
                  Contact
                </a>
              </Link>
            </div>
            <div className='flex flex-col items-center md:hidden'>
              <p className='-mb-3'>Menu</p>
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                duration={0.8}
                size={25}
              />
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
