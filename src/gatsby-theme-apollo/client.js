import fetch from 'isomorphic-unfetch';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: '', // TODO - we will come back to this
    fetch
  })
});

export default client;
