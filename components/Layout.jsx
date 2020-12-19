import Head from 'next/head';
import Navbar from './Navbar';
import TopNavbar from './TopNavbar';

const Layout = ({ title, children }) => {
  return (
    <div className='w-full'>
      <TopNavbar />
      <Navbar />
      <Head>{title}</Head>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
