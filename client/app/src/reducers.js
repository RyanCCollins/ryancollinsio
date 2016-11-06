import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import client from './apolloClient';

/* GENERATOR: Import all of your reducers */
import tutorial from './containers/TutorialContainer/reducer';
import tutorials from './containers/TutorialsContainer/reducer';
import adminDashboard from './containers/AdminDashboardContainer/reducer';
import contact from './containers/ContactContainer/reducer';
import userProfile from './containers/UserProfileContainer/reducer';
import login from './containers/LoginContainer/reducer';
import signup from './containers/SignupContainer/reducer';
import archive from './containers/ArchiveContainer/reducer';
import landing from 'containers/LandingContainer/reducer';
import createProject from 'containers/CreateProjectContainer/reducer';
import createPost from 'containers/CreatePostContainer/reducer';
import blog from 'containers/BlogContainer/reducer';
import app from 'containers/AppContainer/reducer';
import portfolio from 'containers/PortfolioContainer/reducer';

const rootReducer = combineReducers({
  landing,
  createProject,
  blog,
  createPost,
  app,
  archive,
  portfolio,
  /* GENERATOR: Compile all of your reducers */
  tutorial,
  tutorials,
  adminDashboard,
  contact,
  userProfile,
  login,
  signup,
  routing: routerReducer,
  form: formReducer,
  apollo: client.reducer(),
});

export default rootReducer;
