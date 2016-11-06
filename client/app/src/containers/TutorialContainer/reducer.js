import * as types from './constants';

export const initialState = {
  commentInput: null,
};

const tutorialReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.ON_EDIT_COMMENT:
        return {
          ...state,
          commentInput: action.value,
        };
      default:
        return state;
    }
  };

export default tutorialReducer;
