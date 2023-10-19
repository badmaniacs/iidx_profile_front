import React from 'react';
import Layout from '@/components/layout';
import '@/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HydrationZustand from '@/components/hydrationzustand';

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
          <title>IIDX PASTAINFO</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HydrationZustand>
    </QueryClientProvider>
  );
}
