import ApolloClient, {
  createNetworkInterface,
  addTypeName,
} from 'apollo-client';
const isProduction = true;
const baseUrl = isProduction ?
  'https://ryancollinsio.herokuapp.com/graphql' : 'http://localhost:3000/graphql';

const client = new ApolloClient({
  networkInterface: createNetworkInterface(baseUrl),
  initialState: window.__APOLLO_STATE__, // eslint-disable-line no-underscore-dangle
  ssrForceFetchDelay: 100,
  queryTransformer: addTypeName,
});

export default client;
