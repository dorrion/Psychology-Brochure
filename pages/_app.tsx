import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
