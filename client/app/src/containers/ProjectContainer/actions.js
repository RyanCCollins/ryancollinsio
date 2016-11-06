import * as types from './constants';

// projectEditComment :: String -> {Action}
export const projectEditComment = (value) => ({
  type: types.ON_EDIT_PROJECT_COMMENT,
  value,
});

export const projectMessage = (message) => ({
  type: types.PROJECT_MESSAGE,
  message,
});

export const projectError = (error) => ({
  type: types.PROJECT_ERROR,
  error,
});

export const projectClearToast = () => ({
  type: types.PROJECT_CLEAR_TOAST,
});
