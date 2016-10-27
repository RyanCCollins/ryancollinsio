import * as types from './constants';

// blogError :: String -> {Action}
export const blogError = (error) => ({
  type: types.BLOG_ERROR,
  error,
});

// blogMessage :: String -> {Action}
export const blogMessage = (message) => ({
  type: types.BLOG_MESSAGE,
  message,
});

// clearblogError :: None -> {Action}
export const clearBlogError = () => ({
  type: types.CLEAR_BLOG_ERROR,
});

// clearBlogMessage :: None -> {Action}
export const clearBlogMessage = () => ({
  type: types.CLEAR_BLOG_MESSAGE,
});

export const clearBlogToast = (type) =>
  (dispatch) => {
    switch (type) {
      case 'error':
        dispatch(
          clearBlogError()
        );
        break;
      case 'message':
        dispatch(
          clearBlogMessage()
        );
        break;
      default:
        break;
    }
  };

export const blogSetSearchTerm = (value) => ({
  type: types.BLOG_SET_SEARCH_TERM,
  value,
});
