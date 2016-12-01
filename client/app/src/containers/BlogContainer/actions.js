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

// blogSetCurrentPage :: Int -> {Action}
export const blogSetCurrentPage = (page) => ({
  type: types.BLOG_SET_CURRENT_PAGE,
  page,
});

// blogSetTags :: Array -> {Action}
export const blogSetTags = (tags) => ({
  type: types.BLOG_SET_TAGS,
  tags,
});

// blogApplyFilters :: None -> {Action}
export const blogApplyFilters = () => ({
  type: types.BLOG_APPLY_FILTERS,
});

// blogClearFilters :: None -> {Action}
export const blogClearFilters = () => ({
  type: types.BLOG_CLEAR_FILTERS,
});
