import * as types from './constants';

export const initialState = {
  commentInput: null,
  message: null,
  error: null,
  lightbox: {
    isOpen: false,
    currentImage: 0,
  },
};

const projectReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.PROJECT_CLOSE_LIGHTBOX:
        return {
          ...state,
          lightbox: {
            isOpen: false,
            currentImage: 0,
          },
        };
      case types.PROJECT_OPEN_LIGHT_BOX:
        return {
          ...state,
          lightbox: {
            isOpen: true,
            currentImage: action.index,
          },
        };
      case types.PROJECT_GO_TO_NEXT_IMAGE:
        return {
          ...state,
          lightbox: {
            ...state.lightbox,
            currentImage: state.lightbox.currentImage + 1,
          },
        };
      case types.PROJECT_GO_TO_PREVIOUS_IMAGE:
        return {
          ...state,
          lightbox: {
            ...state.lightbox,
            currentImage: state.lightbox.currentImage - 1,
          },
        };
      case types.PROJECT_SET_CURRENT_IMAGE:
        return {
          ...state,
          lightbox: {
            ...state.lightbox,
            currentImage: action.index,
          },
        };
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
