import * as types from './constants';

export const initialState = {
  commentInput: null,
  message: null,
  error: null,
};

const projectReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.ON_EDIT_PROJECT_COMMENT:
        return {
          ...state,
          commentInput: action.value,
        };
      case types.PROJECT_MESSAGE:
        return {
          ...state,
          message: action.message,
        };
      case types.PROJECT_ERROR:
        return {
          ...state,
          error: action.error,
        };
      case types.PROJECT_CLEAR_TOAST:
        return {
          ...state,
          message: null,
          error: null,
        };
      default:
        return state;
    }
  };

export default projectReducer;
