import ApolloClient, {
  createNetworkInterface,
  addTypeName,
} from 'apollo-client';
const baseUrl = 'http://localhost:3000/graphql';

const client = new ApolloClient({
  networkInterface: createNetworkInterface(baseUrl),
  initialState: typeof window !== 'undefined' ? window.__APOLLO_STATE__ : null,
  queryTransformer: addTypeName,
});

export default client;
