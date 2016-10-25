import * as types from './constants';

// createProjectError :: String -> {Action}
export const createProjectError = (error) => ({
  type: types.CREATE_PROJECT_ERROR,
  error,
});

// createProjectMessage :: String -> {Action}
export const createProjectMessage = (message) => ({
  type: types.CREATE_PROJECT_MESSAGE,
  message,
});

// clearCreateProjectError :: None -> {Action}
export const clearCreateProjectError = () => ({
  type: types.CLEAR_CREATE_PROJECT_ERROR,
});

// clearCreateProjectMessage :: None -> {Action}
export const clearCreateProjectMessage = () => ({
  type: types.CLEAR_CREATE_PROJECT_MESSAGE,
});

export const clearCreateProjectToast = (type) =>
  (dispatch) => {
    switch (type) {
      case 'error':
        dispatch(
          clearCreateProjectError()
        );
        break;
      case 'message':
        dispatch(
          clearCreateProjectMessage()
        );
        break;
      default:
        break;
    }
  };
