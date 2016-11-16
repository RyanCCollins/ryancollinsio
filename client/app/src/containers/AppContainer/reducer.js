import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  isMobile: false,
  user: {
    authToken: null,
  },
  navIsActive: false,
  searchTerm: null,
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
      url: '/tutorials',
      name: 'Tutorials',
    },
  ],
};

const appContainerReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.APP_ON_TOGGLE_NAV:
        return update(state, {
          navIsActive: {
            $set: !state.navIsActive,
          },
        });
      case types.APP_SET_MOBILE:
        return update(state, {
          isMobile: {
            $set: action.isMobile,
          },
        });
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
      case types.SET_SEARCH_TERM:
        return update(state, {
          searchTerm: {
            $set: action.term,
          },
        });
      case types.CLEAR_SEARCH_TERM:
        return update(state, {
          searchTerm: {
            $set: null,
          },
        });
      default:
        return state;
    }
  };

export default appContainerReducer;
