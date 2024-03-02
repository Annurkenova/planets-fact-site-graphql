import { ApolloProvider } from '@apollo/client';
import client from '../ApolloClient';
import MyComponent from './MyComponent';
import { ComponentType } from 'react';

interface AppProps {
  Component: ComponentType;
  pageProps: Record<string, unknown>;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
