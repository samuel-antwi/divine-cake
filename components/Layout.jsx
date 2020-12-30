import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';
import TopNavbar from './TopNavbar';
import { useState, useEffect } from 'react';

const Layout = ({ title, children }) => {
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    const listener = window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return (
    <div className='w-full'>
      <TopNavbar />
      <Navbar />
      <Head>
        <title>
          {title
            ? title
            : 'Devinecakesgh, the best Cakes and Pastries in Accra'}
        </title>
      </Head>
      <div>{children}</div>
      <Footer isTop={isTop} />
    </div>
  );
};

export default Layout;
