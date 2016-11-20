import * as types from './constants';

export const initialState = {
  error: null,
  message: null,
  isLoading: false,
};

const loginReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.LOGIN_SHOW_ERROR:
        return {
          ...state,
          error: action.error,
          isLoading: false,
        };
      case types.LOGIN_SHOW_MESSAGE:
        return {
          ...state,
          message: action.message,
          isLoading: false,
        };
      case types.LOGIN_CLEAR_ERROR:
        return {
          ...state,
          error: null,
        };
      case types.LOGIN_CLEAR_MESSAGE:
        return {
          ...state,
          message: null,
        };
      case types.LOGIN_SET_LOADING:
        return {
          ...state,
          isLoading: true,
        };
      default:
        return state;
    }
  };

export default loginReducer;
