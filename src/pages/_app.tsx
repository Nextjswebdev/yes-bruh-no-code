import { Auth0Provider } from '@auth0/auth0-react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
};

export default MyApp;
