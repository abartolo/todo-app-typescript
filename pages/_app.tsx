import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import Head from 'next/head';
import Link from 'next/link';
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <title>Todo App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <nav>
          <Link href="/">Home</Link>
          <span> | </span>
          <Link href="/addTodo">Add Todo List</Link>
        </nav>

        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
export default MyApp
