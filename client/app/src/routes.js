import React from 'react';
import { Router } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import store, { history } from './store';
import client from './apolloClient';
/* eslint-disable */
import { AppContainer } from 'containers';
import * as Pages from 'pages';
/* eslint-enable */

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure');
  }
}

export const routes = {
  component: AppContainer,
  path: '/',
  indexRoute: {
    getComponent(location, callback) {
      require.ensure([], () => {
        const LandingPage = require('./pages/LandingPage').default;
        callback(null, LandingPage);
      });
    },
  },
  childRoutes: [
    {
      path: 'projects/:slug',
      getComponent(location, callback) {
        require.ensure([], () => {
          const ProjectPage = require('./pages/ProjectPage').default;
          callback(null, ProjectPage);
        });
      },
    },
    {
      path: 'portfolio',
      getComponent(location, callback) {
        require.ensure([], () => {
          const PortfolioPage = require('./pages/PortfolioPage').default;
          callback(null, PortfolioPage);
        });
      },
    },
    {
      path: 'blog',
      getComponent(location, callback) {
        require.ensure([], () => {
          const BlogPage = require('./pages/BlogPage').default;
          callback(null, BlogPage);
        });
      },
    },
    {
      path: 'blog/posts/:slug',
      getComponent(location, callback) {
        require.ensure([], () => {
          const PostPage = require('./pages/PostPage').default;
          callback(null, PostPage);
        });
      },
    },
    {
      path: 'admin/create-post',
      getComponent(location, callback) {
        require.ensure([], () => {
          const CreatePostPage = require('./pages/CreatePostPage').default;
          callback(null, CreatePostPage);
        });
      },
    },
    {
      path: 'admin/create-project',
      getComponent(location, callback) {
        require.ensure([], () => {
          const CreateProjectPage = require('./pages/CreateProjectPage').default;
          callback(null, CreateProjectPage);
        });
      },
    },
    {
      path: '/blog/archive',
      getComponent(location, callback) {
        require.ensure([], () => {
          const ArchivePage = require(
            './pages/ArchivePage'
        ).default;
          callback(null, ArchivePage);
        });
      },
    },
/* Newly generated Routes go here */
    {
      path: '*',
      getComponent(location, callback) {
        require.ensure([], () => {
          const NotFoundPage = require('./pages/NotFoundPage').default;
          callback(null, NotFoundPage);
        });
      },
    },
  ],
};

const RouterApp = (props) => (
  <ApolloProvider {...props} store={store} client={client}>
    <Router
      history={history} // Scroll to top on route transitions
      onUpdate={() => window.scrollTo(0, 0)} // eslint-disable-line
    >
      {routes}
    </Router>
  </ApolloProvider>
);
//
// const routes = (
//   <ApolloProvider client={client} store={store}>
//     <Router
//       history={history} // Scroll to top on route transitions
//       onUpdate={() => window.scrollTo(0, 0)} // eslint-disable-line
//     >
//       <Route path="/" component={AppContainer}>
//         <IndexRoute component={Pages.LandingPage} />
//         <Route path="/portfolio" component={Pages.PortfolioPage} />
//         <Route path="/projects/:slug" component={Pages.ProjectPage} />
//         <Route path="/admin/create-project" component={Pages.CreateProjectPage} />
//         <Route path="/blog" component={Pages.BlogPage} />
//         <Route path="/blog/posts/:slug" component={Pages.PostPage} />
//         <Route path="/admin/create-post" component={Pages.CreatePostPage} />
//         <Route path="*" component={Pages.NotFoundPage} />
//       </Route>
//     </Router>
//   </ApolloProvider>
// );

export default RouterApp;
