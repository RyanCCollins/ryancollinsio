import * as types from './constants';

// postEditComment :: String -> {Action}
export const postEditComment = (value) => ({
  type: types.ON_EDIT_POST_COMMENT,
  value,
});

export const postMessage = (message) => ({
  type: types.POST_MESSAGE,
  message,
});

export const postError = (error) => ({
  type: types.POST_ERROR,
  error,
});

export const postClearToast = () => ({
  type: types.POST_CLEAR_TOAST,
});
