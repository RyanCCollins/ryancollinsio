import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import client from './apolloClient';

/* GENERATOR: Import all of your reducers */
import archive from './containers/ArchiveContainer/reducer';
import landing from 'containers/LandingContainer/reducer';
import createProject from 'containers/CreateProjectContainer/reducer';
import createPost from 'containers/CreatePostContainer/reducer';
import blog from 'containers/BlogContainer/reducer';
import app from 'containers/AppContainer/reducer';

const rootReducer = combineReducers({
  landing,
  createProject,
  blog,
  createPost,
  app,
  archive,
  /* GENERATOR: Compile all of your reducers */
  routing: routerReducer,
  form: formReducer,
  apollo: client.reducer(),
});

export default rootReducer;
