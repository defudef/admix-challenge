import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createCache from '@emotion/cache';
import Head from 'next/head';
import theme from '../theme';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createCache({ key: 'css', prepend: true });

const MyApp = ({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) => {
  const [queryClient] = useState(() => new QueryClient({
    mutationCache: undefined,
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  )
};

export default MyApp;
