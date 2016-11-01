import * as types from './constants';

// contactInitiateLoading :: None -> {Action}
export const contactInitiateLoading = () => ({
  type: types.CONTACT_INITIATE_LOADING,
});

// contactSuccess :: String -> {Action}
export const contactSuccess = (message) => ({
  type: types.CONTACT_SUCCESS,
  message,
});

// contactSuccess :: String -> {Action}
export const contactFailure = (error) => ({
  type: types.CONTACT_ERROR,
  error,
});

// contactClearError :: None -> {Action}
export const contactClearError = () => ({
  type: types.CONTACT_CLEAR_ERROR,
});

// contactClearMessage :: None -> {Action}
export const contactClearMessage = () => ({
  type: types.CONTACT_CLEAR_MESSAGE,
});

export const clearContactToast = (type) =>
  (dispatch) => {
    switch (type) {
      case 'error':
        dispatch(
          contactClearError()
        );
        break;
      case 'message':
        dispatch(
          contactClearMessage()
        );
        break;
      default:
        break;
    }
  };
