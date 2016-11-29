import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  error: null,
  message: null,
  searchTerm: null,
  currentPage: 1,
  perPage: 6,
  posts: [],
  tags: [],
  isFiltering: false,
  modal: {
    isShowing: false,
  },
};

const blogReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.BLOG_CLEAR_FILTERS:
        return {
          ...state,
          searchTerm: null,
          isFiltering: false,
          tags: [],
          modal: {
            isShowing: false,
          },
        };
      case types.BLOG_TOGGLE_MODAL:
        return {
          ...state,
          modal: {
            isShowing: !state.modal.isShowing,
          },
        };
      case types.BLOG_APPLY_FILTERS:
        return {
          ...state,
          isFiltering: true,
          modal: {
            isShowing: false,
          },
        };
      case types.BLOG_SET_TAGS:
        return update(state, {
          tags: {
            $set: action.tags,
          },
        });
      case types.SET_BLOG_POSTS:
        return update(state, {
          posts: {
            $set: action.posts,
          },
        });
      case types.BLOG_SET_CURRENT_PAGE:
        return update(state, {
          currentPage: {
            $set: action.page,
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
