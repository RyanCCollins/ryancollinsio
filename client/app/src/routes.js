import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import store, { history } from './store';
import client from './apolloClient';
/* eslint-disable */
import App from 'components/App';
import * as Pages from 'pages';
/* eslint-enable */

const routes = (
  <ApolloProvider client={client} store={store}>
    <Router
      history={history} // Scroll to top on route transitions
      onUpdate={() => window.scrollTo(0, 0)} // eslint-disable-line
    >
      <Route path="/" component={App}>
        <IndexRoute component={Pages.LandingPage} />
        <Route path="*" component={Pages.NotFoundPage} />
      </Route>
    </Router>
  </ApolloProvider>
);

export default routes;
