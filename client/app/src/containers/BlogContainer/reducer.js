import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  error: null,
  message: null,
  searchTerm: null,
  currentPage: 1,
  postsPerPage: 6,
  posts: [],
};

const blogReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.SET_BLOG_POSTS:
        return update(state, {
          posts: {
            $set: action.posts,
          },
        });
      case types.BLOG_INCREMENT_CURRENT_PAGE:
        return update(state, {
          currentPage: {
            $set: state.currentPage + 1,
          },
        });
      case types.BLOG_DECREMENT_CURRENT_PAGE:
        return update(state, {
          currentPage: {
            $set: state.currentPage - 1,
          },
        });
      case types.BLOG_SET_CURRENT_PAGE:
        return update(state, {
          currentPage: {
            $set: action.currentPage,
          },
        });
      case types.BLOG_CLEAR_SEARCH_TERM:
        return update(state, {
          searchTerm: {
            $set: null,
          },
        });
      case types.BLOG_SET_SEARCH_TERM:
        return update(state, {
          searchTerm: {
            $set: action.value === '' ? null : action.value,
          },
        });
      case types.BLOG_ERROR:
        return update(state, {
          error: {
            $set: action.error,
          },
        });
      case types.BLOG_MESSAGE:
        return update(state, {
          message: {
            $set: action.message,
          },
        });
      case types.CLEAR_BLOG_ERROR:
        return update(state, {
          error: {
            $set: null,
          },
        });
      case types.CLEAR_BLOG_MESSAGE:
        return update(state, {
          message: {
            $set: null,
          },
        });
      default:
        return state;
    }
  };

export default blogReducer;
