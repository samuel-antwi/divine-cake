import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import SideNav from './SideNav';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useRouter();
  const home = pathname === '/';
  const about = pathname === '/about';
  const services = pathname === '/services';
  const contact = pathname === '/contact';

  return (
    <>
      {isOpen && <SideNav setOpen={setOpen} isOpen={isOpen} />}
      <Div className='bg-white text-gray-800 py-10 '>
        <div className='container mx-auto px-6'>
          <div className='flex justify-between'>
            <Link href='/'>
              <a className='logo text-yellow-700 font-extrabold md:text-4xl text-xl tracking-wider'>
                DIVINECAKE
              </a>
            </Link>
            <div className='nav__links hidden md:block'>
              <Link href='/'>
                <a
                  className={`font-bold md:text-xl hover:text-yellow-600 ${
                    home ? 'text-yellow-600' : 'text-gray-700'
                  }`}>
                  Home
                </a>
              </Link>
              <Link href='/about'>
                <a
                  className={`font-bold md:text-xl hover:text-yellow-600  ${
                    about ? 'text-yellow-600' : 'text-gray-700'
                  } `}>
                  About
                </a>
              </Link>
              <Link href='/services'>
                <a
                  className={`font-bold md:text-xl hover:text-yellow-600  ${
                    services ? 'text-yellow-600' : 'text-gray-700'
                  }`}>
                  Services
                </a>
              </Link>
              <Link href='/contact'>
                <a
                  className={`font-bold md:text-xl hover:text-yellow-600  ${
                    contact ? 'text-yellow-600' : 'text-gray-700'
                  } `}>
                  Contact
                </a>
              </Link>
            </div>
            <div className='flex items-center md:hidden'>
              <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} />
              <p className='ml-1'>Menu</p>
            </div>
          </div>
        </div>
      </Div>
    </>
  );
};

export default Navbar;

const Div = styled.div`
  .logo {
    font-family: 'Langar', cursive;
  }
  .nav__links a {
    margin: 0 20px;
  }
`;
