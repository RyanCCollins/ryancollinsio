import * as types from './constants';

export const initialState = {
  modal: {
    isVisible: false,
  },
};

const feedbackReducer =
  (state = initialState, action) => {
    switch (action.type) {
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
