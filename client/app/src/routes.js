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
        <Route path="/portfolio" component={Pages.PortfolioPage} />
        <Route path="/projects/:slug" component={Pages.ProjectPage} />
        <Route path="/admin/create-project" component={Pages.CreateProjectPage} />
        <Route path="/blog" component={Pages.BlogPage} />
        <Route path="/blog/posts/:slug" component={Pages.PostPage} />
        <Route path="/admin/create-post" component={Pages.CreatePostPage} />
        <Route path="*" component={Pages.NotFoundPage} />
      </Route>
    </Router>
  </ApolloProvider>
);

export default routes;
