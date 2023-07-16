import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cljxf91920o2p01uibkay0d5u/master',
  cache: new InMemoryCache(),
});