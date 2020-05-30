import fetch from 'isomorphic-unfetch';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://salmon-forest-0f5115203.azurestaticapps.net/api/grapql',
    fetch
  })
});

export default client;
