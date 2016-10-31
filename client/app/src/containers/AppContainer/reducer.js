import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  user: {
    authToken: null,
  },
  navLinks: [
    {
      url: '/',
      name: 'Home',
    },
    {
      url: '/blog',
      name: 'Blog',
    },
    {
      url: '/portfolio',
      name: 'Portfolio',
    },
    {
      url: '/login',
      name: 'Login',
    },
    {
      url: '/signup',
      name: 'Signup',
    },
  ],
};

const appContainerReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.AUTHENTICATE_USER:
        return update(state, {
          user: {
            $set: action.user,
          },
        });
      case types.INVALIDATE_USER:
        return update(state, {
          user: {
            $set: {
              authToken: null,
            },
          },
        });
      default:
        return state;
    }
  };

export default appContainerReducer;
