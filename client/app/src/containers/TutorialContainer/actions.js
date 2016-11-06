import * as types from './constants';

// tutorialEditComment :: String -> {Action}
export const tutorialEditComment = (value) => ({
  type: types.ON_EDIT_COMMENT,
  value,
});

export const tutorialMessage = (message) => ({
  type: types.TUTORIAL_MESSAGE,
  message,
});

export const tutorialError = (error) => ({
  type: types.TUTORIAL_ERROR,
  error,
});

export const tutorialClearToast = () => ({
  type: types.TUTORIAL_CLEAR_TOAST,
});
