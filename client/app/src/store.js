import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import rootReducer from './reducers';
import client from './apolloClient';
const isClient = typeof document !== 'undefined';
const isDeveloping = process.env.NODE_ENV !== 'production';

/* GENERATOR: Import all of your initial state */
import { initialState as tutorial } from './containers/TutorialContainer/reducer';
import { initialState as tutorials } from './containers/TutorialsContainer/reducer';
import { initialState as adminDashboard } from './containers/AdminDashboardContainer/reducer';
import { initialState as contact } from './containers/ContactContainer/reducer';
import { initialState as userProfile } from './containers/UserProfileContainer/reducer';
import { initialState as login } from './containers/LoginContainer/reducer';
import { initialState as signup } from './containers/SignupContainer/reducer';
import { initialState as archive } from './containers/ArchiveContainer/reducer';
import { initialState as landing } from './containers/LandingContainer/reducer';
import { initialState as createProject } from './containers/CreateProjectContainer/reducer';
import { initialState as createPost } from './containers/CreatePostContainer/reducer';
import { initialState as blog } from './containers/BlogContainer/reducer';
import { initialState as app } from 'containers/AppContainer/reducer';
import { initialState as portfolio } from 'containers/PortfolioContainer/reducer';

const initialState = {
  /* GENERATOR: Compile all of your initial state */
  tutorial,
  tutorials,
  adminDashboard,
  contact,
  userProfile,
  login,
  signup,
  landing,
  createProject,
  blog,
  createPost,
  archive,
  app,
  portfolio,
};

/* Commonly used middlewares and enhancers */
/* See: http://redux.js.org/docs/advanced/Middleware.html*/
const routingMiddleware = routerMiddleware(browserHistory);
const middlewares = [thunk, routingMiddleware, client.middleware()];

if (isDeveloping && isClient) {
  const createLogger = require('redux-logger');
  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);
}

/* Everyone should use redux dev tools */
/* https://github.com/gaearon/redux-devtools */
/* https://medium.com/@meagle/understanding-87566abcfb7a */
const enhancers = [];
if (isClient && isDeveloping) {
  if (typeof devToolsExtension === 'function') {
    const devToolsExtension = window.devToolsExtension;
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

/* Hopefully by now you understand what a store is and how redux uses them,
 * But if not, take a look at: https://github.com/reactjs/redux/blob/master/docs/api/createStore.md
 * And https://egghead.io/lessons/javascript-redux-implementing-store-from-scratch
 */
const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

/* See: https://github.com/reactjs/react-router-redux/issues/305 */
export const history = isClient ?
  syncHistoryWithStore(browserHistory, store) : undefined;

/* Hot reloading of reducers.  How futuristic!! */
if (module.hot) {
  module.hot.accept('./reducers', () => {
    /*eslint-disable */ // Allow require
    const nextRootReducer = require('./reducers').default;
    /*eslint-enable */
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
