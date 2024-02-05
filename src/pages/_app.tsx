import React from 'react';
import Layout from '@/components/layouts/layout';
import '@/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HydrationZustand from '@/components/layouts/hydrationzustand';
import Analytics from '@/components/layouts/analytics';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationZustand>
        <Head>
          <title>IIDX PASTAINFO - 투덱 서열표, 난이도표, 프로필</title>
        </Head>
        <Analytics/>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HydrationZustand>
    </QueryClientProvider>
  );
}
