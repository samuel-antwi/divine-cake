import Link from 'next/link';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Div className='bg-white text-gray-800 py-10 '>
      <div className='container mx-auto px-6'>
        <Link href='/'>
          <a className='logo text-yellow-700 font-extrabold md:text-4xl tracking-wider'>
            DIVINECAKE
          </a>
        </Link>
      </div>
    </Div>
  );
};

export default Navbar;

const Div = styled.div`
  .logo {
    font-family: 'Langar', cursive;
  }
`;
