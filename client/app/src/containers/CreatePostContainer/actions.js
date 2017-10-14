import * as types from './constants';

// createPostSetSelectedTags :: None -> {Action}
export const createPostSetSelectedTags = tags => ({
  type: types.CREATE_POST_SET_SELECTED_TAGS,
  tags,
});

// createPostSetMessage :: String -> {Action}
export const createPostSetMessage = message => ({
  type: types.CREATE_POST_SET_MESSAGE,
  message,
});

// createPostSetError :: Object -> {Action}
export const createPostSetError = error => ({
  type: types.CREATE_POST_SET_ERROR,
  error,
});

// createPostClearMessage :: None -> {Action}
export const createPostClearMessage = () => ({
  type: types.CREATE_POST_CLEAR_MESSAGE,
});

// createPostClearError :: None -> {Action}
export const createPostClearError = () => ({
  type: types.CREATE_POST_CLEAR_ERROR,
});

export const createPostClearToast = type =>
  (dispatch) => {
    switch (type) {
      case 'error':
        dispatch(
          createPostClearError(),
        );
        break;
      case 'message':
        dispatch(
          createPostClearMessage(),
        );
        break;
      default: break;
    }
  };
