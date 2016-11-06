import * as types from './constants';

export const initialState = {
  commentInput: null,
  message: null,
  error: null,
};

const postReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.ON_EDIT_POST_COMMENT:
        return {
          ...state,
          commentInput: action.value,
        };
      case types.POST_MESSAGE:
        return {
          ...state,
          message: action.message,
        };
      case types.POST_ERROR:
        return {
          ...state,
          error: action.error,
        };
      case types.POST_CLEAR_TOAST:
        return {
          ...state,
          message: null,
          error: null,
        };
      default:
        return state;
    }
  };

export default postReducer;
