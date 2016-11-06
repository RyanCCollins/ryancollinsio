import React from 'react';
import { Router } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import store, { history } from './store';
import client from './apolloClient';
import { AppContainer } from 'containers';

/* eslint-disable */
// Polyfill for the System.import
if (typeof System === 'undefined') {
  var System = {
    import(path) {
      return Promise.resolve(require(path));
    },
  };
}
/* eslint-enable */

// Switching to system.import to make use of dynamic tree shaking
// https://medium.com/modus-create-front-end-development/automatic-code-splitting-for-react-router-w-es6-imports-a0abdaa491e9#.msrxv8fwd
const errorLoading = (err) =>
  console.error('Dynamic loading failed' + err); // eslint-disable-line

const loadRoute = (cb) =>
  (module) =>
    cb(null, module.default);

export const routes = {
  component: AppContainer,
  path: '/',
  indexRoute: {
    getComponent(location, callback) {
      System.import('./pages/LandingPage') // eslint-disable-line block-scoped-var
        .then(loadRoute(callback))
        .catch((err) => errorLoading(err));
    },
  },
  childRoutes: [
    {
      path: '/signup',
      getComponent(location, callback) {
        System.import('./pages/SignupPage')  // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: '/login',
      getComponent(location, callback) {
        System.import('./pages/LoginPage')  // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: '/logout',
      getComponent(location, callback) {
        System.import('./pages/LogoutPage')  // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: '/user/profile',
      getComponent(location, callback) {
        System.import('./pages/UserProfilePage')  // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: '/contact',
      getComponent(location, callback) {
        System.import('./pages/ContactPage')  // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: '/admin/dashboard',
      getComponent(location, callback) {
        System.import('./pages/AdminDashboardPage')  // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: '/tutorials',
      getComponent(location, callback) {
        System.import('./pages/TutorialsPage')  // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: '/tutorial/:slug',
      getComponent(location, callback) {
        System.import('./pages/TutorialPage')  // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
/* GENERATOR: Newly generated Routes go here */
    {
      path: 'projects/:slug',
      getComponent(location, callback) {
        System.import('./pages/ProjectPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: 'portfolio',
      getComponent(location, callback) {
        System.import('./pages/PortfolioPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: 'blog',
      getComponent(location, callback) {
        System.import('./pages/BlogPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: 'blog/posts/:slug',
      getComponent(location, callback) {
        System.import('./pages/PostPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: 'admin/create-post',
      getComponent(location, callback) {
        System.import('./pages/CreatePostPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: 'admin/create-project',
      getComponent(location, callback) {
        System.import('./pages/CreateProjectPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: '/blog/archive',
      getComponent(location, callback) {
        System.import('./pages/ArchivePage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: '*',
      getComponent(location, callback) {
        System.import('./pages/NotFoundPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
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

export default RouterApp;
