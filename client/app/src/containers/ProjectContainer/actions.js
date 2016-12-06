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


export const projectCloseLightbox = () => ({
  type: types.PROJECT_CLOSE_LIGHTBOX,
});

export const projectOpenLightbox = (index) => ({
  type: types.PROJECT_OPEN_LIGHT_BOX,
  index,
});

export const projectGoToNextImage = () => ({
  type: types.PROJECT_GO_TO_NEXT_IMAGE,
});

export const projectGoToPreviousImage = () => ({
  type: types.PROJECT_GO_TO_PREVIOUS_IMAGE,
});

export const projectSetCurrentImage = (index) => ({
  type: types.PROJECT_SET_CURRENT_IMAGE,
  index,
});
