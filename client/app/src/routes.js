import React from 'react';
import { Router } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import ReactGA from 'react-ga';
import { AppContainer } from 'containers'; // eslint-disable-line
import client from './apolloClient';
import store, { history } from './store';

// initialize google analytics
if (typeof window !== 'undefined') {
  ReactGA.initialize('UA-75828309-1');
}

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
const errorLoading = err =>
  console.error('Dynamic loading failed' + err); // eslint-disable-line

const loadRoute = cb =>
  module =>
    cb(null, module.default);

export const routes = {
  component: AppContainer,
  path: '/',
  indexRoute: {
    getComponent(location, callback) {
      System.import('./pages/LandingPage') // eslint-disable-line block-scoped-var
        .then(loadRoute(callback))
        .catch(err => errorLoading(err));
    },
  },
  childRoutes: [
    {
      path: '/signup',
      getComponent(location, callback) {
        System.import('./pages/SignupPage')  // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch(err => errorLoading(err));
      },
    },
    {
      path: '/login',
      getComponent(location, callback) {
        System.import('./pages/LoginPage')  // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch(err => errorLoading(err));
      },
    },
    {
      path: '/logout',
      getComponent(location, callback) {
        System.import('./pages/LogoutPage')  // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch(err => errorLoading(err));
      },
    },
    {
      path: '/user/profile',
      getComponent(location, callback) {
        System.import('./pages/UserProfilePage')  // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch(err => errorLoading(err));
      },
    },
    {
      path: '/contact',
      getComponent(location, callback) {
        System.import('./pages/ContactPage')  // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch(err => errorLoading(err));
      },
    },
    {
      path: '/admin/dashboard',
      getComponent(location, callback) {
        System.import('./pages/AdminDashboardPage')  // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch(err => errorLoading(err));
      },
    },
    {
      path: '/tutorials',
      getComponent(location, callback) {
        System.import('./pages/TutorialsPage')  // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch(err => errorLoading(err));
      },
    },
    {
      path: '/tutorials/tutorial/:slug',
      getComponent(location, callback) {
        System.import('./pages/TutorialPage')  // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch(err => errorLoading(err));
      },
    },
    {
      path: '/search',
      getComponent(location, callback) {
        System.import('./pages/SearchPage')  // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch(err => errorLoading(err));
      },
    },
    {
      path: '/about',
      getComponent(location, callback) {
        System.import('./pages/AboutPage')  // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch(err => errorLoading(err));
      },
    },
/* GENERATOR: Newly generated Routes go here */
    {
      path: '/portfolio/projects/:slug',
      getComponent(location, callback) {
        System.import('./pages/ProjectPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch(err => errorLoading(err));
      },
    },
    {
      path: 'portfolio',
      getComponent(location, callback) {
        System.import('./pages/PortfolioPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch(err => errorLoading(err));
      },
    },
    {
      path: 'blog',
      getComponent(location, callback) {
        System.import('./pages/BlogPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch(err => errorLoading(err));
      },
    },
    {
      path: 'blog/posts/:slug',
      getComponent(location, callback) {
        System.import('./pages/PostPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch(err => errorLoading(err));
      },
    },
    {
      path: 'admin/create-post',
      getComponent(location, callback) {
        System.import('./pages/CreatePostPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch(err => errorLoading(err));
      },
    },
    {
      path: 'admin/create-project',
      getComponent(location, callback) {
        System.import('./pages/CreateProjectPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch(err => errorLoading(err));
      },
    },
    {
      path: '/blog/archive',
      getComponent(location, callback) {
        System.import('./pages/ArchivePage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch(err => errorLoading(err));
      },
    },
    {
      path: '*',
      getComponent(location, callback) {
        System.import('./pages/NotFoundPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch(err => errorLoading(err));
      },
    },
  ],
};

function scrollToTop() {
  if (typeof window !== 'undefined') {
    console.log('Called scroll to top');
    setTimeout(() => {
      window.scrollTo(0, 0);
    });
  }
}

const RouterApp = props => (
  <ApolloProvider {...props} store={store} client={client}>
    <Router
      history={history} // Scroll to top on route transitions
      onUpdate={() => {
        scrollToTop();
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
      }}
    >
      {routes}
    </Router>
  </ApolloProvider>
);

export default RouterApp;
