import * as types from './constants';

export const initialState = {
  commentInput: null,
  message: null,
  error: null,
};

const tutorialReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.ON_EDIT_COMMENT:
        return {
          ...state,
          commentInput: action.value,
        };
      case types.TUTORIAL_MESSAGE:
        return {
          ...state,
          message: action.message,
        };
      case types.TUTORIAL_ERROR:
        return {
          ...state,
          error: action.error,
        };
      case types.TUTORIAL_CLEAR_TOAST:
        return {
          ...state,
          message: null,
          error: null,
        };
      default:
        return state;
    }
  };

export default tutorialReducer;
