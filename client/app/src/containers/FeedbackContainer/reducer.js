import * as types from './constants';

export const initialState = {
  error: null,
  message: null,
  isSubmitting: false,
  modal: {
    isVisible: false,
  },
};

const feedbackReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.FEEDBACK_CLEAR_ALERTS:
        return {
          ...state,
          error: null,
          message: null,
        };
      case types.FEEDBACK_SUBMISSION_INITIATION:
        return {
          ...state,
          isSubmitting: true,
        };
      case types.FEEDBACK_SUBMISSION_ERROR:
        return {
          ...state,
          isSubmitting: false,
          error: action.error,
        };
      case types.FEEDBACK_SUBMISSION_MESSAGE:
        return {
          ...state,
          isSubmitting: false,
          message: action.message,
        };
      case types.TOGGLE_FEEDBACK_MODAL:
        return {
          ...state,
          modal: {
            isVisible: !state.modal.isVisible,
          },
        };
      default:
        return state;
    }
  };

export default feedbackReducer;
