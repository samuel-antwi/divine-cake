import 'aos/dist/aos.css';
import { useEffect } from 'react';
import 'styles/globals.css';
import 'styles/tailwind.css';
import AOS from 'aos';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
