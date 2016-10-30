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

export const setBlogPosts = (posts) => ({
  type: types.SET_BLOG_POSTS,
  posts,
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

// blogSetSearchTerm :: String -> {Action}
export const blogSetSearchTerm = (value) => ({
  type: types.BLOG_SET_SEARCH_TERM,
  value,
});

// blogClearSearchTerm :: String -> {Action}
export const blogClearSearchTerm = () => ({
  type: types.BLOG_CLEAR_SEARCH_TERM,
});

export const blogSetCurrentPage = (page) => ({
  type: types.BLOG_SET_CURRENT_PAGE,
  page,
});
