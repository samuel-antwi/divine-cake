import 'aos/dist/aos.css';
import { useEffect } from 'react';
import 'styles/globals.css';
import 'styles/tailwind.css';
import AOS from 'aos';
import { FormspreeProvider } from '@formspree/react';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <FormspreeProvider project={process.env.NEXT_PUBLIC_FORMSPREE_PROJECTID}>
      <Component {...pageProps} />
    </FormspreeProvider>
  );
}

export default MyApp;
