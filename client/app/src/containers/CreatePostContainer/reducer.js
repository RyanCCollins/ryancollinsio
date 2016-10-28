import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  selectedTags: [],
  error: null,
  message: null,
};

const createPostReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.CREATE_POST_CLEAR_ERROR:
        return update(state, {
          error: {
            $set: null,
          },
        });
      case types.CREATE_POST_CLEAR_MESSAGE:
        return update(state, {
          message: {
            $set: null,
          },
        });
      case types.CREATE_POST_SET_MESSAGE:
        return update(state, {
          message: {
            $set: action.message,
          },
        });
      case types.CREATE_POST_SET_ERROR:
        return update(state, {
          error: {
            $set: action.error,
          },
        });
      case types.CREATE_POST_SET_SELECTED_TAGS:
        return update(state, {
          selectedTags: {
            $set: action.tags,
          },
        });
      default:
        return state;
    }
  };

export default createPostReducer;
