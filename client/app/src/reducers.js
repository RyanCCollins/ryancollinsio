import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import client from './apolloClient';

// Import all of your reducers here:
import landing from 'containers/LandingContainer/reducer';
import createProject from 'containers/CreateProjectContainer/reducer';
import createPost from 'containers/CreatePostContainer/reducer';
import blog from 'containers/BlogContainer/reducer';

const rootReducer = combineReducers({
  // Apply all of the reducers here.
  landing,
  createProject,
  blog,
  createPost,
  routing: routerReducer,
  form: formReducer,
  apollo: client.reducer(),
});

export default rootReducer;
