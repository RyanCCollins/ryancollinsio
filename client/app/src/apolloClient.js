import ApolloClient, {
  createNetworkInterface,
  addTypeName,
} from 'apollo-client';
const isProduction = true;
const baseUrl = isProduction ?
  'https://ryancollinsio.herokuapp.com/graphql' : 'http://localhost:3000/graphql';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: baseUrl,
  }),
  initialState: typeof window !== 'undefined' ? window.__APOLLO_STATE__ : null, // eslint-disable-line
  ssrForceFetchDelay: 100,
  queryTransformer: addTypeName,
});

export default client;
